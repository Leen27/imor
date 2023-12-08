import { Stage } from "konva/lib/Stage";

export default () => ({
  name: 'editor-bg-grid',

  install(stage: Stage): void {
    this.drawUseCss(stage)
  },

  drawUseCss(stage: Stage) {    
    stage.content.style.backgroundSize = `50px 50px`
    stage.content.style.backgroundImage = `linear-gradient(to right, grey 1px, transparent 1px),linear-gradient(to bottom, grey 1px, transparent 1px)`
  }
})