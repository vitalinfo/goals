import DS from 'ember-data';
import Validator from '../mixins/model-validator';

export default DS.Model.extend(Validator, {
  title: DS.attr('string'),
  score: DS.attr('number'),
  user: DS.belongsTo('user'),
  validations: {
    title: {
      presence: true
    },
    user: {
      presence: true
    },
    score: {
      presence: true,
      numericality: { greaterThanOrEqualTo: 0, lessThanOrEqualTo: 10 }
    }
  }

});
