import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('party');
  },

  actions: {
    saveParty(params) {
      var newParty = this.store.createRecord('party', params);
      newPantry.save();
      this.transitionTo('party');
    }
  }
});
