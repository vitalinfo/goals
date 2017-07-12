import DS from 'ember-data';
import Validator from '../mixins/model-validator';

export default DS.Model.extend(Validator, {
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  average_score: DS.attr('number'),
  validations: {
    first_name: {
      presence: true
    },
    last_name: {
      presence: true
    }
  }
});
