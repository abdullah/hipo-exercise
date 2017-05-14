
<template>
  <div class="recent-search">
    <span class="title">RECENT SEARCHES</span>
    <ul v-if="data.length">
      <li v-for="r in data"><a href="#">{{r.query}} in {{r.near}}</a></li>
    </ul>
    <span v-else>Whoops.. we don't found your recent search</span>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: 'search-result-card',
};
</script>
