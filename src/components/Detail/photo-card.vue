
<template>
  <div class="photo-card" :style="{ 'background-image': `url(${photo})` }">
    <div class="owner">
      <span :style="{ 'background-image': `url(${ownerPhoto})` }"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: 'photo-card',
  computed: {
    photo() {
      const url = `${this.data.prefix}300x500${this.data.suffix}`;
      return url;
    },
    ownerPhoto() {
      const { photo } = this.data.user;
      return `${photo.prefix}40x40${photo.suffix}`;
    },
  },
};
</script>
