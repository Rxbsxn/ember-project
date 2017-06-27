import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    saveTransaction() {
      let transactionRecord = this.get('transaction');
      this.get('store').findRecord('transaction', transactionRecord.id)
      .then(record => {
        record.set('amount', transactionRecord.amount);
      })
    }
  }
});
