import { CodeContext } from "./model/CodeContext";
import { Context } from "./model/Context";

export class TextParser {

    constructor(private debugMode: boolean = false) { }

    public ParseText(text: string): Context[] {

        let codeContextArray = new Array<CodeContext>();

        if (text == null) {
            this.Log("will not parse null text");
            return codeContextArray;
        }

        let insideCodeContext = false;
        let transientCodeContext: CodeContext = new CodeContext();

        for (let i = 0; i < text.length; i++) {

            if (text[i] == '{') {
                if (insideCodeContext) {
                    this.Log(`Error: Invalid character '{' in regard of code context`);
                    throw "Invalid character '{' in regard of code context";
                }
                else {
                    insideCodeContext = true;
                    transientCodeContext = new CodeContext();
                    continue;
                }
            }

            if (text[i] == '}') {
                if (!insideCodeContext) {
                    this.Log(`Error: Invalid character '}' in regard of code context`);
                    throw "Invalid character '}' in regard of code context";
                }
                else {
                    insideCodeContext = false;
                    codeContextArray.push(transientCodeContext.Clone());
                    continue;
                }
            }

            if (insideCodeContext && transientCodeContext != null) {
                transientCodeContext.plainText += text[i];
            }
        }

        return codeContextArray;
    }

    private Log(message: string) {
        if (this.debugMode) {
            console.log(`> ${message}`);
        }
    }
}
