import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeTransaction(transaction) {
      transaction.deleteRecord();
    }
  }
});
