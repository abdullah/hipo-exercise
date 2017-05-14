
<template>
  <router-link :to="{ name: 'detail', params: { id: data.venue.id }}">
    <div class="venue-card" :style="{ 'background-image': 'url('+photo+')' }">
      <div class="desc">
        <h3>{{data.venue.name}}</h3>
        <span>{{data.venue.ratingSignals}}</span>
        <span></span>
        <div class="point" :style="{ 'background-color': '#'+ data.venue.ratingColor }" :data-poin="data.venue.rating"></div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['data'],
  name: 'venue-card',
  computed: {
    photo() {
      const photo = this.data.venue.featuredPhotos.items[0];
      const url = `${photo.prefix}300x300${photo.suffix}`;
      return url;
    },
  },
};
</script>
