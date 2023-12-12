import Konva from "konva";

export default () => ({
  name: 'editor-bg-grid',

  install(stage: Konva.Stage): void {
    const el = stage.container()
    this.drawUseCss(el)
    stage.on('dragmove', function () {
        el.style.backgroundPositionX = `${stage.position().x}px`
        el.style.backgroundPositionY = `${stage.position().y}px`
    });
  },

  drawUseCss(el: HTMLDivElement ) {    
    el.style.backgroundSize = `25px 25px`
    el.style.backgroundImage = `linear-gradient(to right, grey 1px, transparent 1px),linear-gradient(to bottom, grey 1px, transparent 1px)`
  }
})