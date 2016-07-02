module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateFormulas extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016070223530730;
    }

    up() {

      return [
        this.createTable("formulas", [{"name":"user_id","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("formulas")
      ];

    }

  }

  return CreateFormulas;

})();
