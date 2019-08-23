<template>
  <section class="treatments">
    <div class="container">
      <b-row>
        <b-col lg="12">
          <div class="treatments-title">
            <h2>{{$t('home.treatments.title')}}</h2>
            <p>{{$t('home.treatments.description')}}</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4">
          <div class="treatments-content-item">
            <div class="item-image">
              <img class="item-image-first"
                   src="~/assets/images/home/treatments/dental.svg"/>
            </div>
            <div class="item-description">
              <h5>{{$t('home.treatments.dental.title')}}</h5>
              <p>{{$t('home.treatments.dental.description')}}</p>
            </div>
            <div class="item-button">
              <a href="/treatments"
                 class="button-extend-small-round">{{$t('common.readMore')}}</a>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="treatments-content-item">
            <div class="item-image">
              <img class="item-image-second"
                   src="~/assets/images/home/treatments/esthetics.svg"/>
            </div>
            <div class="item-description">
              <h5>{{$t('home.treatments.esthetics.title')}}</h5>
              <p>{{$t('home.treatments.esthetics.description')}}</p>
            </div>
            <div class="item-button">
              <a href="/treatments/esthetics"
                 class="button-extend-small-round">{{$t('common.readMore')}}</a>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="treatments-content-item">
            <div class="item-image">
              <img class="item-image-third"
                   src="~/assets/images/home/treatments/natural-medicine.svg"/>
            </div>
            <div class="item-description">
              <h5>{{$t('home.treatments.natural.title')}}</h5>
              <p>{{$t('home.treatments.natural.description')}}</p>
            </div>
            <div class="item-button">
              <a href="/treatments/natural-medicine"
                 class="button-extend-small-round">{{$t('common.readMore')}}</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-home-treatments",
    props: {
      categories: {
        type: Array,
        default: () => []
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>

</style>
