import Ember from 'ember';

const {
  Component,
  inject: {
    service
  }
} = Ember;


export default Component.extend({
  flashMessages: service(),
  actions: {
    removeTransaction(transaction) {
      transaction.destroyRecord()
        .then(() => {
          this.get('flashMessages').success('Transaction deleted!')
        })
    }
  }
});
