<template>
  <section class="about">
    <div class="container">
      <div class="small-container">
        <b-row>
          <b-col md="12">
            <div class="about-title">
              <h2>{{$t('home.about.title')}}</h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <div class="about-content-item">
              <div class="item-image ">
                <img class="image-first"
                     src="~/assets/images/home/about/personal-approach.svg"/>
              </div>
              <div class="item-description">
                <h5>{{$t('home.about.approach.title')}}</h5>
                <p>{{$t('home.about.approach.description')}}</p>
              </div>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="about-content-item">
              <div class="item-image ">
                <img class="image-second"
                     src="~/assets/images/home/about/broad-range.svg"/>
              </div>
              <div class="item-description">
                <h5>{{$t('home.about.treatments.title')}}</h5>
                <p>{{$t('home.about.treatments.description')}}</p>
              </div>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="about-content-item">
              <div class="item-image">
                <img class="image-third"
                     src="~/assets/images/home/about/first-certificate.svg"/>
              </div>
              <div class="item-description">
                <h5>{{$t('home.about.quality.title')}}</h5>
                <p>{{$t('home.about.quality.description')}}</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-home-about"
  }
</script>

<style scoped>

</style>
