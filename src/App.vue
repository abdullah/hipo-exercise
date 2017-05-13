<template>
  <div id="app">
    <router-view></router-view>
    <footer-navigation></footer-navigation>
  </div>
</template>

<script>

import FooterNavigation from '@/components/FooterNavigation';

export default {
  name: 'app',
  components: { FooterNavigation },
};
</script>
