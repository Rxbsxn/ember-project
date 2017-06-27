import Ember from 'ember';

const { Service, inject: { service } } = Ember;

export default Service.extend({
  store: service(),
  flashMessages: service(),

  // add(record) {
  //   let validate = this.get('validate');
  //   if(validate(record)) {
  //     this.get('store').createRecord('transaction', { amount: record }).save()
  //     .then(() => { this.get('flashMessages').success("record created") })
  //   } else {
  //     this.get('flashMessages').success('Amount should higher than 1 and higher zero');
  //   }
  // },

  validate(record) {
    return record > 0;
  },
});
