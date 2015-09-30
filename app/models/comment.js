import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  body: DS.attr(),
  // place: DS.belongsTo('place', { async: true }),
  // post: DS.belongsTo('post', { async: true }),
  parent: DS.belongsTo('parent', {
    async: true,
    polymorphic: true,
    inverse: 'parent'
  })
});
