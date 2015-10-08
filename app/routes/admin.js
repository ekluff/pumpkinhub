import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      post: this.store.findAll('post'),
      place: this.store.findAll('place')
    })
  },
  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    },
    destroyPlace(place) {
      place.destroyRecord();
      this.transitionTo('admin');
    },
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    },
  }
});
