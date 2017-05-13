<template>
  <section class="home">
    <div class="banner"
         :class="{'show-detail' : result.loaded}">
      <div class="container">
        <div class="banner-content">
          <div class="brand-logo"></div>
          <div class="slogan"
               v-show="!result.loaded">
            <h2>
              Lorem ipsum dolor sit!
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="search-area">
            <div class="form-group">
              <input type="text"
                     v-model="searchText"
                     placeholder="I’m looking for">
            </div>
            <div class="form-group">
              <input type="text"
                     v-model="place"
                     placeholder="Istanbul">
            </div>
            <a href="#"
               @click.prevent="search"></a>
          </div>
        </div>
      </div>
    </div>
    <show-result data="data" />
  </section>
</template>

<script>
import showResult from '@/components/Home/show';

export default {
  name: 'home',
  components: {
    showResult,
  },
  data() {
    return {
      searchText: '',
      place: '',
      result: {
        loading: false,
        loaded: false,
        failure: false,
        data: [],
      },
    };
  },
  methods: {
    search() {
      this.result.loading = true;
      setTimeout(() => {
        this.result.data = [1, 2, 3];
        this.result.loaded = true;
      }, 300);
    },
  },
};
</script>
