import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  amountValue: '',

  actions: {
    newTransaction() {
      let amount = this.get('amountValue');
      this.get('store').createRecord('transaction', {amount})
    }
  }
});
