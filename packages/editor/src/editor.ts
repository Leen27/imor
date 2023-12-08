import Konva from 'konva'
export class Editor {
    constructor(private el: HTMLDivElement) {
        var width = el.clientWidth;
        var height = el.clientHeight;
  
        var stage = new Konva.Stage({
          container: el,
          width: width,
          height: height,
        });
    }
}