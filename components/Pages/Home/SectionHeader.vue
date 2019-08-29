<template>
  <section class="header">
    <div class="container h-100 position-relative">
      <div class="v-middle_wrap">
        <div class="headline v-middle">
          <h1>{{$t('home.header.title')}}</h1>
          <h2>{{$t('home.header.subTitle')}}</h2>
        </div>
      </div>
      <div class="inner-container position-relative">
        <div class="header-bottom">
          <p>{{$t('home.header.bottomDescription')}}</p>
        </div>
        <div class="header-arrow_wrap">
          <img class="header-arrow"
               src="~/assets/images/icons/down-arrow.svg"
               alt="Down Arrow"/>
        </div>
      </div>
    </div>
    <div class="header-bottom_back"></div>
  </section>
</template>

<script>
  export default {
    name: "app-page-home-header"
  }
</script>

<style scoped>

</style>
