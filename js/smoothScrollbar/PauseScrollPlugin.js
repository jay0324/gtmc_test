//定義pause擴充，用來暫停scrollbar
//使用方式為
//ScrollBar實體.updatePluginOptions('pause', { pause: false }); //執行暫停
//ScrollBar實體.updatePluginOptions('pause', { pause: true }); //停止暫停
class PauseScrollPlugin extends Scrollbar.ScrollbarPlugin {
    static pluginName = 'pause';
  
    static defaultOptions = {
      open: false,
    };
  
    transformDelta(delta) {
      return this.options.pause ? { x: 0, y: 0 } : delta;
    }
  }
  Scrollbar.use(PauseScrollPlugin);