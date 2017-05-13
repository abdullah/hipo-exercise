<template>
  <section class="page detail">
    <div class="banner">
      <div class="banner-detail-content">
        <div class="banner-icons">
          <div class="box two">
            <span class="icon">icon</span>
          </div>
          <div class="box one">
            <span class="icon">icon</span>
          </div>
        </div>
        <div class="detail-of-place">
          <div class="container">
            <h2>Name of Cafe</h2>
          </div>
          <div class="place-info">
            <div class="container">
              <div class="point">8.8</div>
              <div class="info-field">
                <address>Caferağa Mh. Kadife Sk. No:15 Kadıköy</address>
              </div>
              <div class="info-field">
                <a href="">0 (216) 345 67 78</a>
              </div>
              <div class="info-field">
                <span>123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="place-detail">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-8">
            <div class="row">
              <div class="col-xs-12 col-xs-6 card-col" v-for="i in 10">
                <div class="card">
                  <!--  -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="tips">
              <span class="title">TIPS</span>
              <ul>
                <li v-for="i in 10">
                  <div class="avatar"></div>
                  <div class="comment">
                    <span>Abdullah Mara</span>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'detail',
};
</script>
