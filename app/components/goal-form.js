import Ember from 'ember';

export default Ember.Component.extend({
  goal: null,
  users: [],
  actions: {
    submit(){
      let goal = this.get('goal');
      this.triggerSave(goal);
    }
  },
  init(){
    this._super(...arguments);
    this.set('goal', this.data.goal);
    this.set('users', this.data.users);
  }
});
