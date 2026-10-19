// Shared lecture-tracker view for Dataview.
// Usage in a note:  ```dataviewjs
//                   await dv.view("Year 3/_Scripts/lectures", { mode: "table", folder: "Year 3/Computer Vision" })
//                   ```
// Modes: "progress" | "table" | "overview" | "missing" | "upcoming"
const ROOT = "Year 3";
const mode = input?.mode ?? "table";
const folder = input?.folder ?? ROOT;
const today = dv.date("today");

const ms = d => (d && typeof d.toMillis === "function") ? d.toMillis() : null;
const isPast = p => ms(p.date) !== null && ms(p.date) <= ms(today);
const isDone = p => p.status === "done";
const label = p => isDone(p) ? "✅ Done"
  : p.status === "in-progress" ? "📝 In progress"
  : isPast(p) ? "⚠️ Missing" : "⏳ Upcoming";
const fmt = d => ms(d) !== null ? d.toFormat("ccc d MMM") : "TBC";
const moduleOf = p => p.file.folder.split("/")[1];
const moduleLink = m => dv.fileLink(`${ROOT}/${m}/${m}.md`, false, m);
const bar = (done, total) =>
  `<progress value="${done}" max="${Math.max(total, 1)}" style="width:100%"></progress>`;

const cmp = (a, b) =>
  ((a.week ?? 99) - (b.week ?? 99)) ||
  ((ms(a.date) ?? 9e15) - (ms(b.date) ?? 9e15)) ||
  ((a.order ?? 0) - (b.order ?? 0)) ||
  a.file.name.localeCompare(b.file.name);
const byDate = (a, b) => ((ms(a.date) ?? 9e15) - (ms(b.date) ?? 9e15)) || cmp(a, b);

const lectures = src => dv.pages(`"${src}"`)
  .where(p => p.type === "lecture" && !p.file.path.includes("_Templates"))
  .array();

const stats = ps => ({
  total: ps.length,
  done: ps.filter(isDone).length,
  missing: ps.filter(p => !isDone(p) && isPast(p)).length,
  next: ps.filter(p => !isPast(p)).sort(byDate)[0],
});

const ps = lectures(folder);

if (mode === "progress") {
  const s = stats(ps);
  const pct = s.total ? Math.round(s.done / s.total * 100) : 0;
  dv.paragraph(`${bar(s.done, s.total)}\n**${s.done} / ${s.total}** lectures written up (${pct}%) · **${s.missing}** delivered but missing notes`);
}

else if (mode === "table") {
  if (!ps.length) { dv.paragraph("*No lectures yet. Create one from the **Lecture** template in `Year 3/_Templates`.*"); }
  else dv.table(["Wk", "Date", "Lecture", "Lecturer", "Status"],
    ps.sort(cmp).map(p => [p.week ?? "", fmt(p.date), p.file.link, p.lecturer ?? "", label(p)]));
}

else if (mode === "overview") {
  const mods = input?.modules ?? [...new Set(ps.map(moduleOf))];
  dv.table(["Module", "Progress", "Written up", "Missing", "Next lecture"],
    mods.map(m => {
      const s = stats(ps.filter(p => moduleOf(p) === m));
      return [moduleLink(m), bar(s.done, s.total), `${s.done} / ${s.total}`,
        s.missing ? `⚠️ ${s.missing}` : "—",
        s.next ? `${fmt(s.next.date)}: ${s.next.file.link}` : "—"];
    }));
}

else if (mode === "missing") {
  const rows = ps.filter(p => !isDone(p) && isPast(p)).sort(byDate);
  if (!rows.length) dv.paragraph("All caught up 🎉");
  else dv.table(["Date", "Module", "Lecture", "Status"],
    rows.map(p => [fmt(p.date), moduleLink(moduleOf(p)), p.file.link, label(p)]));
}

else if (mode === "upcoming") {
  const days = input?.days ?? 7;
  const end = ms(today.plus({ days }));
  const rows = ps.filter(p => ms(p.date) !== null && ms(p.date) >= ms(today) && ms(p.date) <= end).sort(byDate);
  if (!rows.length) dv.paragraph(`*Nothing scheduled in the next ${days} days.*`);
  else dv.table(["Date", "Module", "Lecture", "Lecturer"],
    rows.map(p => [fmt(p.date), moduleLink(moduleOf(p)), p.file.link, p.lecturer ?? ""]));
}
