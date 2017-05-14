<template>
  <div class="tips">
    <span class="title">TIPS</span>
    <ul>
      <li v-for="i in data.groups[0]">
        <div class="avatar"></div>
        <div class="comment">
          <span>Abdullah Mara</span>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['data'],
  name: 'detail-tips',
};
</script>
