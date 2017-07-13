import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
		save(user) {
			let newUser = user;
      if (!newUser.validate()) { return }
			newUser.save().catch(() => {}).then(() =>{
				this.transitionToRoute('/')
			})
		}
	}
});
