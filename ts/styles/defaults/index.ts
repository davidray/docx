import { XmlComponent } from "../../docx/xml-components";
import { ParagraphPropertiesDefaults } from "./paragraph-properties";
import { RunPropertiesDefaults } from "./run-properties";

export class DocumentDefaults extends XmlComponent {

    private runPropertiesDefaults: RunPropertiesDefaults;
    private paragraphPropertiesDefaults: ParagraphPropertiesDefaults;

    constructor() {
        super("w:docDefaults");
        this.runPropertiesDefaults = new RunPropertiesDefaults();
        this.paragraphPropertiesDefaults = new ParagraphPropertiesDefaults();
        this.root.push(this.runPropertiesDefaults);
        this.root.push(this.paragraphPropertiesDefaults);
    }
}
