import { expect } from "chai";
import { Suite } from 'mocha';
import { Context } from '../src/model/Context';
import { CodeContext } from '../src/model/CodeContext';

class TestContext extends Context {
}

describe("Context", () => {
    it("should set plainText property", () => {
        const sampleText = "sample text";
        var ctx = new TestContext();

        ctx.plainText = sampleText;
        expect(ctx.plainText).to.be.equal(sampleText);
    });
});

describe("Code Context", () => {

    it("should be initialized with empty plain text", () => {
        let ctx = new CodeContext();
        expect(ctx.plainText).to.equal('');
    });

    it("should be instance of Context", () => {
        let ctx = new CodeContext();
        expect(ctx instanceof CodeContext).to.be.true;
        expect(ctx instanceof Context).to.be.true;
    })
});