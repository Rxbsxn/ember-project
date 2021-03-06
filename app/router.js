import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('transactions', function() {
    this.route('new');
    this.route('transaction', { path: '/transaction/:transaction_id' });
  });
});

export default Router;
