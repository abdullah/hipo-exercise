
<template>
  <router-link :to="{ name: 'detail', params: { id: id }}">
    <div class="venue-card" :style="{ 'background-image': `url(${photo})` }">
      <div class="desc">
        <h3>{{name}}</h3>
        <div class="badges rating">{{ratingSignals}}</div>
        <div class="badges price">
          <span v-for="p in price"></span>
        </div>
        <div class="point" :style="{ 'background-color': `#${ratingColor}` }" :data-point="rating"></div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['data'],
  name: 'venue-card',
  computed: {
    id() {
      return this.data.venue.id;
    },
    name() {
      return this.data.venue.name;
    },
    rating() {
      return this.data.venue.rating;
    },
    ratingSignals() {
      return this.data.venue.ratingSignals;
    },
    ratingColor() {
      return this.data.venue.ratingColor;
    },
    price() {
      const price = this.data.venue.price;
      return price ? price.tier : 0;
    },
    photo() {
      const featuredPhotos = this.data.venue.featuredPhotos;
      if (!featuredPhotos) return '';
      const photo = featuredPhotos.items[0];
      return `${photo.prefix}300x300${photo.suffix}`;
    },
  },
};
</script>
