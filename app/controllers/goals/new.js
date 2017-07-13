import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(goal) {
      let newGoal = goal;
      if (!newGoal.validate()) { return }
      newGoal.save().catch(() => {}).then(() =>{
        this.transitionToRoute('/')
      })
    }
  }
});
