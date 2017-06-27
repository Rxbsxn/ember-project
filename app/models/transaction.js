import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),
  createdAt: DS.attr('date', { defaultValue() { return new Date(); }
  })
});