import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('admin');
  this.route('post', {path: '/post/:post_id'});
  this.route('place', {path: '/place/:place_id'});
  this.route('places');
});

export default Router;
