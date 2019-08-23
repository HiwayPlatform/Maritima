<template>
  <section class="tenerife">
    <div class="tenerife-left">
      <div class="tenerife-left-content"></div>
    </div>
    <div class="tenerife-right">
      <div class="tenerife-right-content v-middle_wrap">
        <div class="v-middle">
          <div class="tenerife-right-title">
            <h2>{{$t('home.tenerife.title')}}</h2>
          </div>
          <div class="tenerife-right-description">
            <p>{{$t('home.tenerife.description1')}}</p>
            <p>{{$t('home.tenerife.description2')}}</p>
            <p>{{$t('home.tenerife.description3')}}</p>
            <p>{{$t('home.tenerife.description4')}}</p>
          </div>
          <div class="tenerife-right-button">
            <a href="https://online.clinic-cloud.com/dentalesthetics/"
               class="button-normal-round"> {{$t('home.tenerife.book')}} </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-home-tenerife"
  }
</script>

<style scoped>

</style>
