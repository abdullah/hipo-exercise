<template>
  <div class="search-result">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8">
          <div class="row">
            <show-result-card v-for="x in 10" data="data" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showResultCard from '@/components/Home/search-result-card';

export default {
  name: 'search-result',
  components: {
    showResultCard,
  },
};
</script>
