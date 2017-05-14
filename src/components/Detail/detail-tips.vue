<template>
  <div class="tips">
    <span class="title">TIPS</span>
    <ul>
      <li v-for="item in list">
        <div class="avatar" :style="{ 'background-image': `url(${avatar(item)})` }">
        </div>
        <div class="comment">
          <span>{{fullName(item)}}</span>
          <p>{{item.text}}</p>
        </div>
      </li>
    </ul>
    <a href="#" class="show-all-tips" @click.prevent="showAllTips = true" v-show="!showAllTips">All Tips</a>
  </div>
</template>

<script>

export default {
  props: ['data'],
  name: 'detail-tips',
  data() {
    return {
      showAllTips: false,
    };
  },
  computed: {
    list() {
      const data = this.data.groups.filter(g => g.type === 'others')[0].items;
      return this.showAllTips ? data : data.slice(0, 10);
    },
  },
  methods: {
    fullName(item) {
      return `${item.user.firstName} ${item.user.lastName || ''}`;
    },
    avatar(item) {
      const { photo } = item.user;
      return `${photo.prefix}40x40${photo.suffix}`;
    },
  },
};
</script>
