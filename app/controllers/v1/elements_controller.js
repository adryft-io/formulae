module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Element = Nodal.require('app/models/element.js');

  class V1ElementsController extends Nodal.Controller {

    index() {

      Element.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Element.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Element.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Element.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Element.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ElementsController;

})();
