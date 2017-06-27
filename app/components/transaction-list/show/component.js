import Ember from 'ember';

const {
  Component,
  inject: {
    service
  }
} = Ember;

export default Component.extend({
  store: service(),
  flashMessages: service(),
  inputValidator: service(),
  actions: {
    saveTransaction() {
      let transactionNewValue = this.get('transaction.amount')
      let transactionRecord = this.get('transaction');
      if (this.get('inputValidator').validate(transactionNewValue)) {
        transactionRecord.set('amount', transactionNewValue);
        transactionRecord.save()
          .then(() => {
            this.get('flashMessages').success('transaction updated!')
          })
      } else {
        this.get('flashMessages').danger('Invalid value');
      }
    }
  }
});
