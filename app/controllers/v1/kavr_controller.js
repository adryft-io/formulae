require('dotenv').config({ silent: true });
var AWS = require('aws-sdk');
AWS.config.update({region: process.env.AWS_REGION});
var rp = require('request-promise');

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Formula = Nodal.require('app/models/formula.js');

  class V1TwilioController extends Nodal.Controller {

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
      var body = this.params.body.body;
      var from = this.params.body.name;
      var props = {body: body, from: from};
      var that = this
      Formula.query()
        .where({action_fields__json:{userid: from}})
        .where("reaction_channel=wemo")
        .end((err, models) => {
          for(var i = 0; i < models.length; i++){
            console.log('this is a model: ', models[i]._data)
            var result = {
              action_channel: models[i]._data.action_channel,
              action_name: models[i]._data.action_name,
              user_id: models[i]._data.user_id,
              action_props: props
            }
            console.log('result before stringified: ', result);
            result = JSON.stringify(result);
            var sqs = new AWS.SQS();
            sqs.getQueueUrl({ QueueName: 'action' }, (err, data) => {
              if (err) return console.log(err);
              var queue = new AWS.SQS({params: {QueueUrl: data.QueueUrl}});
              console.log('Stringified Message being sent: ', result);
              queue.sendMessage({ MessageBody: result },(err, data) =>
                (err ? console.log(err) : that.respond(data)));
            });

          }

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

  return V1TwilioController;

})();
