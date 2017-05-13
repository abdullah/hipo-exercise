<template>
  <div class="search-result">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8">
          <div class="row">
            <div class="col-xs-12 col-sm-6 card-col" v-for="venue in data">
              <show-result-card :key="venue.referralId" :data="venue" />
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <recent-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showResultCard from '@/components/Home/search-result-card';
import recentSearch from '@/components/Home/recent-search';

export default {
  name: 'search-result',
  props: ['data'],
  components: {
    showResultCard,
    recentSearch,
  },
};
</script>
