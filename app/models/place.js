import Parent from './parent';

export default Parent.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  image: DS.attr(),
  name: DS.attr(),
  type: DS.attr(),
  hours: DS.attr(),
  notes: DS.attr(),
  author: DS.attr(),
  openDate: DS.attr(),
  closeDate: DS.attr(),
  comments: DS.hasMany('comment', {
    async: true,
    inverse: 'place'
  }),
  tag: DS.belongsTo('tag', { async: true })
});
