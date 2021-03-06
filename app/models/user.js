import DS from 'ember-data';
import Validator from '../mixins/model-validator';
import Ember from 'ember';

export default DS.Model.extend(Validator, {
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  average_score: DS.attr('number'),
  // goals: DS.hasMany('goal'), // by some reason doesn't work
  goals: DS.attr(),
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
