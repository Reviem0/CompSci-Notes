# Year 3 Dashboard

## Modules
```dataviewjs
await dv.view("Year 3/_Scripts/lectures", { mode: "overview", modules: ["Foundations of Machine Learning", "Computer Vision", "Robot Kinematics and Dynamics"] })
```

## Catch Up: Delivered Lectures Without Notes
```dataviewjs
await dv.view("Year 3/_Scripts/lectures", { mode: "missing" })
```

## Coming Up (Next 7 Days)
```dataviewjs
await dv.view("Year 3/_Scripts/lectures", { mode: "upcoming", days: 7 })
```

---
### How Tracking Works
- Every lecture note has a `status` property: `todo` → `in-progress` → `done`. Change it in the note's Properties panel.
- A lecture is flagged **⚠️ Missing** once its date has passed and it isn't `done`.
- New lectures (e.g. Robot Kinematics): create a note in the module's `Lectures` folder, then run **Templates: Insert template → Lecture** and fill in `week`, `date` and `lecturer`.
- Full lecture lists live on each module page: [[Foundations of Machine Learning]] · [[Computer Vision]] · [[Robot Kinematics and Dynamics]]
