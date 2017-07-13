import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('goal', 'Unit | Model | goal', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should require fields', function(assert) {
  let goal = this.subject();
  Ember.run(() => goal.validate());
  assert.equal(goal.get('errors').errorsFor('title').length, 1);
  assert.equal(goal.get('errors').errorsFor('score').length, 2);
  assert.equal(goal.get('errors').errorsFor('user').length, 1);
});

test('should validate score', function(assert) {
  let goal = this.subject({score: -1});
  Ember.run(() => goal.validate());
  assert.equal(goal.get('errors').errorsFor('score').length, 1);
  Ember.run(() => {
    goal.set('score', 11);
    goal.validate()
  });
  assert.equal(goal.get('errors').errorsFor('score').length, 1);
  Ember.run(() => {
    goal.set('score', 5);
    goal.validate()
  });
  Ember.run(() => goal.validate());
  assert.equal(goal.get('errors').errorsFor('score').length, 0);
});
