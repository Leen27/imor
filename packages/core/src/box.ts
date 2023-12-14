import mitt, { type Emitter, EventType } from 'mitt'

export class Box implements Emitter<Record<EventType, unknown>>{
    private _mitt = mitt()
    public on: typeof this._mitt.on
    public off: typeof this._mitt.off
    public emit: typeof this._mitt.emit
    public all: typeof this._mitt.all

    constructor() {
        this._mitt = mitt()
        this.on = this._mitt.on
        this.off = this._mitt.off
        this.emit = this._mitt.emit
        this.all = this._mitt.all
    }
}
