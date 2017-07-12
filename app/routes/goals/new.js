import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      goal: this.store.createRecord('goal'),
      users: this.store.findAll('user')
    };
  }
});
