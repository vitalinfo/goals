import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('field-error', 'Integration | Component | field error', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{field-error}}`);

  assert.equal(this.$().text().trim(), '');
});
