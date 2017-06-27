import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  amountValue: '',

  actions: {
    newTransaction() {
      const flashMessages = Ember.get(this, 'flashMessages');
      let amount = this.get('amountValue');
      this.get('store').createRecord('transaction', {amount}).save()
      .then(() => { flashMessages.success('new transaction created!')})
    }
  }
});
