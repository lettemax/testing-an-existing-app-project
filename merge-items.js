const handlebars = require("handlebars");
const handlebarsHelpers = require("handlebars-helpers");
const helpers = require('handlebars-helpers');
helpers.math({handlebars});

function mergeItems(template, items) {
  const render = handlebars.compile(template);
  return render({items});
}

exports.mergeItems = mergeItems;
