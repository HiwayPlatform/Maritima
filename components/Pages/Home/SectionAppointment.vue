<template>
  <section class="appointment">
    <div class="appointment-left">
      <app-google-map></app-google-map>
    </div>
    <div class="appointment-right">
      <div class="appointment-right-content v-middle_wrap">
        <div class="v-middle">
          <div class="appointment-right-title">
            <h2>{{$t('home.appointment.title')}}</h2>
          </div>
          <div class="appointment-right-description">
            <p>{{$t('home.appointment.description1')}}</p>
            <p>{{$t('home.appointment.description2')}}</p>
            <p>{{$t('home.appointment.description3')}}</p>
            <p class="text-center">{{$t('home.appointment.description4')}}</p>
            <p class="d-flex">
              <span>{{$t('home.appointment.address')}}</span>
              <strong>: {{$t('home.appointment.description5')}}</strong></p>
            <p>{{$t('home.appointment.phone')}}
              : <strong>+34 822 775 133</strong>, <strong>+34 674 354 930</strong>
            </p>
            <p>{{$t('home.appointment.description6')}}</p>
          </div>
          <div class="appointment-right-button">
            <a href="/contact" class="button-extend-normal-round">{{$t('home.appointment.reachOut')}}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppGoogleMap from "~/components/Map";

  export default {
    name: "app-page-home-appointment",
    components: {AppGoogleMap},
  }
</script>

<style scoped>

</style>
