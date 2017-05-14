<template>
  <div class="loading">
    <beat-loader></beat-loader>
  </div>
</template>

<script>
// Components
import beatLoader from 'vue-spinner/src/BeatLoader';

export default {
  name: 'loading',
  components: {
    beatLoader,
  },
};
</script>
