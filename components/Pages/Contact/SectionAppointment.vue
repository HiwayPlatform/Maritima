<template>
  <section class="appointment">
    <div class="appointment-left">
      <div class="appointment-left-content v-middle_wrap">
        <div class="v-middle">
          <div class="appointment-left-title">
            <h2>{{$t('contact.appointment.title')}}</h2>
          </div>
          <div class="appointment-left-description">
            <p>{{$t('contact.appointment.description1')}}</p>
            <p>{{$t('contact.appointment.description2')}}</p>
            <p>{{$t('contact.appointment.description3')}}</p>
            <p class="text-center">{{$t('contact.appointment.description4')}}</p>
            <p class="d-flex">
              <span>{{$t('contact.appointment.address')}}</span>
              <strong>: {{$t('contact.appointment.description5')}}</strong></p>
            <p>{{$t('contact.appointment.phone')}}
              : <strong>+34 822 775 133</strong>, <strong>+34 674 354 930</strong>
            </p>
          </div>
          <div class="appointment-left-button">
            <a href="#" class="button-extend-normal-round">{{$t('contact.appointment.reachOut')}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="appointment-right">
        <app-google-map></app-google-map>
    </div>
  </section>
</template>

<script>
  import AppGoogleMap from "~/components/Map";

  export default {
    name: "app-page-contact-appointment",
    components: {AppGoogleMap},
  }
</script>

<style scoped>

</style>
