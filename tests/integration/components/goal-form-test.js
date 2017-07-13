import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('goal-form', 'Integration | Component | goal form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{goal-form}}`);

  assert.equal(this.$().text().trim().replace(/[\n\r]+/g, ' ').replace(/ +/g, ' '),
    'Title User Score Submit');
});
