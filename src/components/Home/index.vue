<template>
  <section class="page home">
    <div class="banner" :class="{'show-detail' : result.loaded}">
      <div class="container">
        <div class="banner-content">
          <div class="brand-logo"></div>
          <div class="slogan" v-show="!result.loaded">
            <h2>Lorem ipsum dolor sit!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="search-area">
            <div class="form-group">
              <input type="text" v-model="query" placeholder="I’m looking for">
            </div>
            <div class="form-group">
              <input type="text" v-model="near" placeholder="Istanbul">
            </div>
            <a href="#" @click.prevent="search"></a>
          </div>
        </div>
      </div>
    </div>
    <show-result v-if="result.loaded" :data="listVenues" />
  </section>
</template>

<script>
import showResult from '@/components/Home/show-result';
import { searchPlace } from '@/services/home';

export default {
  name: 'home',
  components: {
    showResult,
  },
  data() {
    return {
      query: 'sushi',
      near: 'istanbul',
      result: {
        loading: false,
        loaded: false,
        failure: false,
        body: [],
      },
    };
  },
  computed: {
    listVenues() {
      if (!this.result.loaded) return [];

      return this.result.body.data.response.groups.reduce((arr, g) => {
        g.items.map(item => arr.push(item));

        return arr;
      }, []);
    },
  },
  methods: {
    async search() {
      this.result.loading = true;
      this.result.failure = false;
      try {
        const data = await searchPlace({
          near: this.near,
          query: this.query,
        });
        this.result.body = data;
        this.result.loaded = true;
      } catch (error) {
        this.result.loading = false;
        this.result.failure = true;
      }
    },
  },
};
</script>
