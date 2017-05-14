<template>
  <section class="page detail">
    <div class="banner" :style="{ 'background-image': `url(${bestPhoto})` }">
      <div class="banner-detail-content">
        <div class="banner-icons">
          <div class="box two">
            <span class="icon" :style="{ 'background-image': `url(${categoryIcon})` }"></span>
          </div>
          <div class="box one brand-logo"></div>
        </div>
        <div class="detail-of-place">
          <div class="container">
            <h2>{{result.body.name}}</h2>
          </div>
          <div class="place-info">
            <div class="container">
              <div class="point">{{result.body.rating}}</div>
              <div class="info-field">
                <address>{{result.body.location.address}}</address>
              </div>
              <div class="info-field">
                <a :href="'tel:'+result.body.contact.phone">{{result.body.contact.formattedPhone}}</a>
              </div>
              <div class="info-field">
                <span>{{result.body.ratingSignals}}</span>
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
              <div class="col-xs-12 col-xs-6 card-col" v-for="p in photos">
                <photo-card :data="p"></photo-card>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <detail-tips :data="result.body.tips"></detail-tips>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getVenue } from '@/services/detail';
import photoCard from '@/components/Detail/photo-card';
import detailTips from '@/components/Detail/detail-tips';

export default {
  props: ['id'],
  name: 'detail',
  components: { photoCard, detailTips },
  data() {
    return {
      result: {
        loading: false,
        loaded: false,
        failure: false,
        body: [],
      },
    };
  },
  created() {
    this.getDetail();
  },
  computed: {
    bestPhoto() {
      if (!this.result.loaded) return [];
      const { prefix, suffix } = this.result.body.bestPhoto;
      return `${prefix}300x400${suffix}`;
    },
    photos() {
      if (!this.result.loaded) return [];
      return this.result.body.photos.groups.reduce((arr, g) => {
        g.items.map(item => arr.push(item));
        return arr;
      }, []);
    },
    categoryIcon() {
      const { icon } = this.result.body.categories[0];
      return `${icon.prefix}64${icon.suffix}`;
    },
  },
  methods: {
    async getDetail() {
      this.result.loading = true;
      try {
        const res = await getVenue(this.id);
        this.result.body = res.data.response.venue;
        this.result.loading = false;
        this.result.loaded = true;
      } catch (error) {
        this.result.loading = false;
        this.result.failure = false;
      }
    },
  },
};
</script>
