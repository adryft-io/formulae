module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateRecipes extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016062121165976;
    }

    up() {

      return [
        this.createTable("recipes", [{"name":"name","type":"string"},{"name":"actionChannel","type":"string"},{"name":"actionFields","type":"string"},{"name":"actionName","type":"string"},{"name":"reactionChannel","type":"string"},{"name":"reactionName","type":"string"},{"name":"reactionFields","type":"string"},{"name":"userId","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("recipes")
      ];

    }

  }

  return CreateRecipes;

})();
