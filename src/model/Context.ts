export abstract class Context {

    public plainText: string = '';

    public Clone(): Context {
        return JSON.parse(JSON.stringify(this)) as Context;
    }
}
