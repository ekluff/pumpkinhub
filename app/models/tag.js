import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  places: DS.hasMany('place', { async: true }),
  events: DS.hasMany('event', { async: true }),
  foods: DS.hasMany('food', { async: true })
});
