
<template>
  <div class="recent-search">
    <span class="title">RECENT SEARCHES</span>
    <ul v-if="data.length">
      <li v-for="r in data"><a href="#" @click.prevent="showRecent(r)">{{recentItemText(r)}}</a></li>
    </ul>
    <span v-else>Whoops.. we don't found your recent search</span>
  </div>
</template>

<script>
export default {
  props: ['data', 'showRecent'],
  name: 'recent-search',
  methods: {
    recentItemText(item) {
      return `${item.query} in ${item.near}`;
    },
  },
};
</script>
