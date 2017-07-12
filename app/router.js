import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('goals.new', { path: '/goals/new' });
  this.route('users.new', { path: '/users/new' });
  this.route('users', { path: '/' });

  this.route('goals', function() {
    this.route('new');
  });
});

export default Router;
