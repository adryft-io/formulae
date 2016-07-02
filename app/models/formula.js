module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Formula extends Nodal.Model {}

  Formula.setDatabase(Nodal.require('db/main.js'));
  Formula.setSchema(Nodal.my.Schema.models.Formula);

  return Formula;

})();
