import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  amountValue: '',

  actions: {
    newTransaction() {
      let amount = this.get('amountValue');
      if(amount.length < 1) {
        this.get('flashMessages').success('Amount should higher than 1')
      } else {
        this.get('store').createRecord('transaction', {amount}).save()
        .then(() => { this.get('flashMessages').success('new transaction created!') })
        }
      }
  }
});
