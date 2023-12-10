import type { Stage } from "konva/lib/Stage";



export default () => ({
  name: 'context-menu',

  install(stage: Stage): void {
    stage.on('dragmove', function () {
        console.log(stage.position().x)
        stage.content.style.backgroundPositionX = `${stage.position().x}px`
        stage.content.style.backgroundPositionY = `${stage.position().y}px`
    });
  },
})