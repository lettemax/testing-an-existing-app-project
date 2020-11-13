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
      expect.fail('please write this test');


    });

    it("should return an <li> for each category", () => {
      expect.fail('please write this test');
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
      expect.fail('please write this test');
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
