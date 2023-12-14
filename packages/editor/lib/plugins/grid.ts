import type { Engine } from "../engine";

export default () => ({
  name: 'editor-bg-grid',

  install(stage: Engine): void {
    const el = stage.container()
    this.drawUseCss(el)
    var scrollContainer = el.parentElement?.parentElement
    const repositionStage = () => {
        if (!scrollContainer) return
        var dx = scrollContainer.scrollLeft;
        var dy = scrollContainer.scrollTop;
        el.style.transform =
        'translate(' + dx + 'px, ' + dy + 'px)';
        stage.x(-dx);
        stage.y(-dy);
        el.style.backgroundPositionX = `${-dx}px`
        el.style.backgroundPositionY = `${-dy}px`
    }
    scrollContainer?.addEventListener('scroll', repositionStage);
    repositionStage();
  },

  drawUseCss(el: HTMLDivElement ) {    
    el.style.backgroundSize = `25px 25px`
    el.style.backgroundImage = `linear-gradient(to right, #ddd 1px, transparent 1px),linear-gradient(to bottom, #ddd 1px, transparent 1px)`
  }
})