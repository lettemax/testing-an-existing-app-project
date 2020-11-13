const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
const handlebars = require("handlebars");
const handlebarsHelpers = require("handlebars-helpers");
const helpers = require('handlebars-helpers');
helpers.math({handlebars});

describe("The mergeItems function", () => {
  const template = `
  <table>
    <tbody>
      {{#each items}}
        <tr>
          <td>{{ add @index 1 }}</td>
          <td>{{ title }}</td>
          <td>{{ category }}</td>
          <td>
            {{#if isComplete}}
            {{else}}
              <form method="POST" action="/items/{{ add @index 1 }}">
                <button class="pure-button">Complete</button>
              </form>
            {{/if}}
          </td>
        </tr>
      {{/each}}
    </tbody>
  </table>
`;
  it("should return no <tr>s and no <td>s for no items", () => {
      let items = []

     retVal = mergeItems(template,items)

     expect(retVal).to.include("<table>")
     expect(retVal).to.include("</table>")
     expect(retVal).to.include("<tbody>")
     expect(retVal).to.include("</tbody>")

     expect(retVal).to.not.include("<tr>")
     expect(retVal).to.not.include("</tr>")
     expect(retVal).to.not.include("<td>")
     expect(retVal).to.not.include("</td>")
     expect(retVal).to.not.include("<!-- Content here -->")

  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {

    const items = [
      { title: 'Title 1', category: 'Category 1' },
    ];

    retVal = mergeItems(template,items)

    expect(retVal).to.contain("<table>")
    expect(retVal).to.contain("</table>")
    expect(retVal).to.contain("<tbody>")
    expect(retVal).to.contain("</tbody>")
    expect(retVal).to.contain("<tr>")
    expect(retVal).to.contain("</tr>")
    expect(retVal).to.contain("<td>Title 1</td>")
    expect(retVal).to.contain("<td>Category 1</td>")
    expect(retVal).to.contain(`<form method="POST" action="/items/1">`)

    expect(retVal).to.not.contain("<!-- Content here -->")

  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {

const items = [
      { title: 'Title 1', category: 'Category 1', isComplete: true },
    ];

    retVal = mergeItems(template,items)

    expect(retVal).to.contain("<table>")
    expect(retVal).to.contain("</table>")
    expect(retVal).to.contain("<tbody>")
    expect(retVal).to.contain("</tbody>")
    expect(retVal).to.contain("<tr>")
    expect(retVal).to.contain("</tr>")
    expect(retVal).to.contain("<td>Title 1</td>")
    expect(retVal).to.contain("<td>Category 1</td>")
    expect(retVal).to.not.contain("<form method='POST' action='/items/1'>")

    expect(retVal).to.not.contain("<!-- Content here -->")
  });

  it("should return three <tr>s for three items", () => {

  });
});
