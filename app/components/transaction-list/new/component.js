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
  amountValue: '',

  actions: {
    newTransaction() {
      let amount = this.get('amountValue');
      if (this.get('inputValidator').validate(amount)) {
        this.get('store').createRecord('transaction', {
            amount
          }).save()
          .then(() => {
            this.get('flashMessages').success('new transaction created!')
          })
      } else {
        this.get('flashMessages').danger('Value is invalid, should be > 0');
      }
    }
  }
});
