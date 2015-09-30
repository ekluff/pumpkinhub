import Parent from './parent';

export default Parent.extend({
  image: DS.attr(),
  title: DS.attr(),
  caption: DS.attr(),
  comments: DS.hasMany('comment', {
    async: true,
    inverse: 'post',
  }),
});
