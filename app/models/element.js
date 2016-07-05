module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Element extends Nodal.Model {}

  Element.setDatabase(Nodal.require('db/main.js'));
  Element.setSchema(Nodal.my.Schema.models.Element);

  return Element;

})();
