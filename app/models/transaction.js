import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr'

export default Model.extend({
  amount: attr('number'),
  createdAt: attr('date', { defaultValue() { return new Date(); }
  })
});
