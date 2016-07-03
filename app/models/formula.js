module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Formulae extends Nodal.Model {}

  Formulae.setDatabase(Nodal.require('db/main.js'));
  Formulae.setSchema(Nodal.my.Schema.models.Formulae);

  return Formulae;

})();
