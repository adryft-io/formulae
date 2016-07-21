module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Formula = Nodal.require('app/models/formula.js');

  class V1WemoController extends Nodal.Controller {

    index() {

      Formula.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Formula.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Formula.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });


    }

    update() {

      Formula.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Formula.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1WemoController;

})();
