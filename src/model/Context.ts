export abstract class Context {

    constructor() {
        this._plainText = '';
    }

    private _plainText: string;

    public get plainText(): string {
        return this._plainText;
    }
    public set plainText(v: string) {
        this._plainText = v;
    }


    public Clone(): Context {
        return JSON.parse(JSON.stringify(this)) as Context;
    }
}
