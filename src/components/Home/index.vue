<template>
  <section class="home">
    <div class="banner">
      <div class="container">
        <div class="banner-content">
          <a class="brand-logo">
            <img src="static/common/logo.svg"
                 alt="">
          </a>
          <div class="slogan">
            <h2>
              Lorem ipsum dolor sit!
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="search-area">
            <div class="form-group">
              <input type="text"
                     placeholder="I’m looking for">
            </div>
            <div class="form-group">
              <input type="text"
                     placeholder="Istanbul">
            </div>
            <a href="#"></a>
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
};
</script>
