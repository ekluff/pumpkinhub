import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('place', params.place_id);
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.place.save();
      this.transitionTo('place', params.place);
    },
  }
});
