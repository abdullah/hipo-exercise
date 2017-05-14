
<template>
  <router-link :to="{ name: 'detail', params: { id: data.venue.id }}">
    <div class="result-card" :style="{ 'background-image': 'url('+photo+')' }">
      <div class="desc">
        <h3>{{data.venue.name}}</h3>
        <span>123</span>
        <span>123</span>
        <div class="point">{{data.venue.rating}}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['data'],
  name: 'search-result-card',
  computed: {
    photo() {
      /* eslint-disable */
      if (!this.data.venue.photos.count) return '';

      const photo = this.data.venue.photos.groups[0].items[0];
      console.log();
      const url = `${photo.prefix}300x500${photo.suffix}`;
      return url
    },
  },
};
</script>
