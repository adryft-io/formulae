module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateElements extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016070518430094;
    }

    up() {

      return [
        this.createTable("elements", [{"name":"type", "type":"string"},{"name":"channel", "type":"string"},{"name":"name", "type":"string"},{"name":"fields", "type":"json"}])
      ];

    }

    down() {

      return [
        this.dropTable("elements")
      ];

    }

  }

  return CreateElements;

})();
