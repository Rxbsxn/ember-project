import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    removeTransaction(transaction) {
      transaction.destroyRecord()
      .then(() => { this.get('flashMessages').success('Transaction deleted!') })
    }
  }
});
