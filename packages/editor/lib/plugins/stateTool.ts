import Konva from "konva";
// @ts-ignore
import Stats from 'stats.js'

export default () => ({
  name: 'editor-state',

  install(stage: Konva.Stage): void {
    var stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    stage.container().appendChild( stats.dom );
    
    function animate() {

      stats.begin();
    
      // monitored code goes here
    
      stats.end();
    
      requestAnimationFrame( animate );
    
    }
    
    requestAnimationFrame( animate )
  },
})