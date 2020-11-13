const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
        let emptyArr = []
        let retVal = mergeCategories(template,emptyArr,"li")

        expect(retVal).to.include("<div>")
        expect(retVal).to.include("</div>")
        expect(retVal).to.include("<ul>")
        expect(retVal).to.include("</ul>")

        expect(retVal).to.not.include("<li>")
        expect(retVal).to.not.include("</li>")
        expect(retVal).to.not.include("<!-- Content here -->")

    });

    it("should return a single <li> for one category", () => {
      let arr = ['single string'];
      let retVal = mergeCategories(template, arr, 'li');
      expect(retVal).to.include("<div>")
      expect(retVal).to.include("</div>")
      expect(retVal).to.include("<ul>")
      expect(retVal).to.include("</ul>")

      expect(retVal).to.include("<li>single string</li>");
      expect(retVal).to.not.include("<!-- Content here -->");

    });

    it("should return an <li> for each category", () => {
      let arr =["first string", "second string"];
      let retVal = mergeCategories(template, arr, 'li');
      expect(retVal).to.include("<div>")
      expect(retVal).to.include("</div>")
      expect(retVal).to.include("<ul>")
      expect(retVal).to.include("</ul>")

      expect(retVal).to.include("<li>first string</li>");
      expect(retVal).to.include("<li>second string</li>");
      expect(retVal).to.not.include("<!-- Content here -->");
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      let emptyArr = []
      let retVal = mergeCategories(template,emptyArr,"li")

      expect(retVal).to.include("<div>")
      expect(retVal).to.include("</div>")
      expect(retVal).to.include("<select>")
      expect(retVal).to.include("</select>")

      expect(retVal).to.not.include("<option>")
      expect(retVal).to.not.include("</option>")
      expect(retVal).to.not.include("<!-- Content here -->")


    });

    it("should return a single <option> for one category", () => {
      let arr = ['single string'];
      let retVal = mergeCategories(template, arr, 'option');
      expect(retVal).to.include("<div>")
      expect(retVal).to.include("</div>")
      expect(retVal).to.include("<select>")
      expect(retVal).to.include("</select>")

      expect(retVal).to.include("<option>single string</option>");
      expect(retVal).to.not.include("<!-- Content here -->");
    });



    it("should return an <option> for each category", () => {
      let arr =["first string", "second string"];
      let retVal = mergeCategories(template, arr, 'option');
      expect(retVal).to.include("<div>")
      expect(retVal).to.include("</div>")
      expect(retVal).to.include("<select>")
      expect(retVal).to.include("</select>")

      expect(retVal).to.include("<option>first string</option>");
      expect(retVal).to.include("<option>second string</option>");
      expect(retVal).to.not.include("<!-- Content here -->");
    });
  });
});
