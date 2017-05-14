
<template>
  <div class="photo-card" :style="{ 'background-image': 'url('+ photo +')' }">
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
  },
};
</script>
