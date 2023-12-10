import Konva from "konva";

export default () => ({
  name: 'editor-bg-grid',

  install(stage: Konva.Stage): void {
    this.drawUseCss(stage)

    stage.on('dragmove', function () {
        console.log(stage.position().x)
        stage.content.style.backgroundPositionX = `${stage.position().x}px`
        stage.content.style.backgroundPositionY = `${stage.position().y}px`
    });
  },

  drawUseCss(stage: Konva.Stage) {    
    stage.content.style.backgroundSize = `50px 50px`
    stage.content.style.backgroundImage = `linear-gradient(to right, grey 1px, transparent 1px),linear-gradient(to bottom, grey 1px, transparent 1px)`
  }
})