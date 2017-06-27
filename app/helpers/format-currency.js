import Ember from 'ember';

export function formatCurrency([value]) {
  let sign = 'PLN';
  return `${value} ${sign}`;
}

export default Ember.Helper.helper(formatCurrency);
