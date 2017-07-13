// import Ember from 'ember';
// import { test } from 'qunit';
// import moduleForAcceptance from 'goals/tests/helpers/module-for-acceptance';
// import startApp from '../helpers/start-app';
//
// let application;
// let speakerMock = Ember.Service.extend({
//   speak: function() {
//     return {};
//   }
// });
//
// moduleForAcceptance('Acceptance | new user appears', {
//   beforeEach: function() {
//     application = startApp();
//
//     // the key here is that the registered service:name IS NOT the same as the real service you're trying to mock
//     // if you inject it as the same service:name, then the real one will take precedence and be loaded
//     application.register('service:mockSpeaker', speakerMock);
//
//     // this should look like your non-test injection, but with the service:name being that of the mock.
//     // this will make speakerService use your mock
//     application.inject('component', 'speakerService', 'service:mockSpeaker');
//   },
//
//   afterEach: function() {
//     Ember.run(application, 'destroy');
//   }
// });
//
// test('visiting /new-user-appears', function(assert) {
//   visit('/users/new');
//   fillIn('input:first', 'John');
//   fillIn('input:last', 'Dou');
//   click('button.btn-primary');
//
//   andThen(function() {
//     assert.equal(currentURL(), '/');
//     assert.equal(find('.gl-user-name:first').text(), 'User First Name User Last Name');
//   });
// });
