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
  </div>
</template>

<script>

export default {
  props: ['data'],
  name: 'detail-tips',
  computed: {
    list() {
      return this.data.groups.filter(g => g.type === 'others')[0].items;
    },
  },
  methods: {
    fullName(item) {
      return `${item.user.firstName} ${item.user.lastName}`;
    },
    avatar(item) {
      const { photo } = item.user;
      return `${photo.prefix}40x40${photo.suffix}`;
    },
  },
};
</script>
