<template>
  <section class="page home">
    <div class="banner" :class="{'show-detail' : result.loaded}">
      <div class="container">
        <div class="banner-content">
          <router-link to="/" class="brand-logo"></router-link>
          <div class="slogan">
            <h2>Just like you want!</h2>
            <p>You can tell us what you're looking for</p>
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
    <loading v-if="result.loading" />
    <show-venues v-if="result.loaded" :data="listVenues" :recentSearch="recentSearch" />
  </section>
</template>

<script>

// Components
import showVenues from '@/components/Home/show-venues';
import loading from '@/components/common/loading';

// Helper
import searchPlace from '@/services/home';
import storage from '@/helpers/localStorage';

export default {
  name: 'home',
  components: {
    showVenues,
    loading,
  },
  data() {
    return {
      query: '',
      near: 'Istanbul',
      recentSearch: storage.get() || [],
      result: {
        loading: false,
        loaded: false,
        failure: false,
        body: [],
      },
    };
  },
  computed: {
    // Merge all venues in  all groups type
    listVenues() {
      const { body: { data: { response: { groups } } } } = this.result;
      return groups.reduce((arr, g) => {
        g.items.map(item => arr.push(item));
        return arr;
      }, []);
    },
  },
  methods: {
    // Fetch place with query
    async search() {
      this.result.loading = true;
      this.result.failure = false;
      try {
        const data = await searchPlace({
          near: this.near,
          query: this.query,
        });

        this.recentSearch.push({
          near: this.near,
          query: this.query,
        });

        storage.set(this.recentSearch);
        this.result.body = data;
        this.result.loaded = true;
        this.result.loading = false;
      } catch (error) {
        this.result.loading = false;
        this.result.failure = true;
      }
    },
  },
};
</script>
