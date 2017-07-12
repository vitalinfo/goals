import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
		save(user) {
			let newUser = user;
			newUser.save().catch((error) => {
        console.log(error);
      }).then(() =>{
				// this.transitionToRoute('users')
			})
		}
	}
});
