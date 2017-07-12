import DS from 'ember-data';
import Validator from '../mixins/model-validator';

export default DS.Model.extend(Validator, {
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  average_score: DS.attr('number'),
  name: Ember.computed('first_name', 'last_name', function() {
    return `${this.get('first_name')} ${this.get('last_name')}`;
  }),
  validations: {
    first_name: {
      presence: true
    },
    last_name: {
      presence: true
    }
  }
});
