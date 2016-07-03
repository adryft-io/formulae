module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateFormulae extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016070223530730;
    }

    up() {

      return [
        this.createTable("formulae", [{"name":"name","type":"string"},{"name":"action_channel","type":"string"},{"name":"action_fields","type":"string"},{"name":"action_name","type":"string"},{"name":"reaction_channel","type":"string"},{"name":"reaction_name","type":"string"},{"name":"reaction_fields","type":"string"},{"name":"user_id","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("formulae")
      ];

    }

  }

  return CreateFormulae;

})();
