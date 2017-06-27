import Ember from 'ember';

const { Service, inject: { service } } = Ember;

export default Service.extend({
  store: service(),
  flashMessages: service(),

  validate(record) {
    return record > 0;
  },
});
