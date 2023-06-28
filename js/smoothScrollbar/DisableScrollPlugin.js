class DisableScrollPlugin extends Scrollbar.ScrollbarPlugin {
    static pluginName = 'disableScroll';
    
    static defaultOptions = {
      direction: null;
    }
    
    transformDelta(delta) {
      if(this.options.direction) {
        delta[this.options.direction] = 0;
      }
      
      return { ...delta };
    }
}