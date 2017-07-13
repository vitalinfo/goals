import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should concat first and last name', function(assert) {
  let user = this.subject({first_name: 'John', last_name: 'Doe'});
  assert.equal(user.get('name'), 'John Doe');
});

test('should require first_name', function(assert) {
  let user = this.subject({last_name: 'Doe'});
  Ember.run(() => user.validate());
  assert.equal(user.get('errors').errorsFor('first_name').length, 1);
});

test('should require last_name', function(assert) {
  let user = this.subject({first_name: 'John'});
  Ember.run(() => user.validate());
  assert.equal(user.get('errors').errorsFor('last_name').length, 1);
});
