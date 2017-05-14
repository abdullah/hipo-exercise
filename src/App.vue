<template>
  <div id="app">
    <transition name="page-animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer-navigation></footer-navigation>
  </div>
</template>

<script>

import FooterNavigation from '@/components/common/FooterNavigation';

export default {
  name: 'app',
  components: { FooterNavigation },
};
</script>
