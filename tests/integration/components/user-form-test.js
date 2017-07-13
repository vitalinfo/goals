import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-form', 'Integration | Component | user form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{user-form}}`);

  assert.equal(this.$().text().trim().replace(/[\n\r]+/g, ' ').replace(/ +/g, ' '),
    'First Name Last Name Submit');
});
