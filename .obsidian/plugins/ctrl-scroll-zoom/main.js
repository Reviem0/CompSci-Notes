const { Plugin, PluginSettingTab, Setting } = require("obsidian");
const { webFrame } = require("electron");

const DEFAULTS = { step: 0.5, invert: false, threshold: 100 };
const MIN_LEVEL = -8, MAX_LEVEL = 9;

module.exports = class CtrlScrollZoom extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULTS, await this.loadData());
    this.acc = 0;

    this.onWheel = (evt) => {
      if (!evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) return;
      evt.preventDefault();
      evt.stopPropagation();

      // Accumulate so trackpads/high-res wheels don't zoom on every tiny delta
      this.acc += evt.deltaMode === 1 ? evt.deltaY * 33 : evt.deltaY;
      if (Math.abs(this.acc) < this.settings.threshold) return;

      let dir = this.acc < 0 ? 1 : -1; // scroll up = zoom in
      if (this.settings.invert) dir = -dir;
      this.acc = 0;

      const next = Math.min(MAX_LEVEL, Math.max(MIN_LEVEL,
        webFrame.getZoomLevel() + dir * this.settings.step));
      webFrame.setZoomLevel(next);
    };

    this.registerDomEvent(window, "wheel", this.onWheel, { passive: false, capture: true });

    this.addCommand({
      id: "reset-zoom",
      name: "Reset zoom",
      callback: () => webFrame.setZoomLevel(0),
    });

    this.addSettingTab(new CtrlScrollZoomSettings(this.app, this));
  }
};

class CtrlScrollZoomSettings extends PluginSettingTab {
  constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }
  display() {
    const { containerEl } = this;
    const s = this.plugin.settings;
    const save = () => this.plugin.saveData(s);
    containerEl.empty();

    new Setting(containerEl)
      .setName("Zoom step")
      .setDesc("Zoom change per scroll notch. 0.5 matches Ctrl + / Ctrl -.")
      .addSlider((sl) => sl.setLimits(0.1, 1, 0.1).setValue(s.step).setDynamicTooltip()
        .onChange(async (v) => { s.step = v; await save(); }));

    new Setting(containerEl)
      .setName("Scroll sensitivity")
      .setDesc("Scroll distance needed per step. Raise it if a trackpad zooms too fast.")
      .addSlider((sl) => sl.setLimits(10, 300, 10).setValue(s.threshold).setDynamicTooltip()
        .onChange(async (v) => { s.threshold = v; await save(); }));

    new Setting(containerEl)
      .setName("Invert direction")
      .setDesc("Scroll down to zoom in instead.")
      .addToggle((t) => t.setValue(s.invert)
        .onChange(async (v) => { s.invert = v; await save(); }));
  }
}
