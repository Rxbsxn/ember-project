import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    saveTransaction() {
      let transactionNewValue = this.get('transaction.amount')
      let transactionRecord = this.get('transaction');
      transactionRecord.set('amount', transactionNewValue);
      transactionRecord.save()
      .then(() => { this.get('flashMessages').success('transaction updated!') })
    }
  }
});
