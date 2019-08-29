<template>
  <section class="appointment">
    <div class="appointment-left">
      <div class="appointment-left-content v-middle_wrap">
        <div class="v-middle">
          <div class="appointment-left-description">
            <p>{{$t('contact.appointment.description1')}}</p>
            <p>{{$t('contact.appointment.description2')}}</p>
            <p>{{$t('contact.appointment.description3')}}</p>
            <p class="text-center">{{$t('contact.appointment.description4')}}</p>
            <p>
              <span>{{$t('contact.appointment.address')}}:&nbsp;&nbsp;</span>
              <strong>{{$t('contact.appointment.description5')}}</strong>
            </p>
            <p class="d-flex">
              <span>{{$t('contact.appointment.phone')}}:&nbsp;&nbsp;</span>
              <span>
                <strong>+34 822 775 133</strong><br>
                <strong>+34 674 354 930</strong>
              </span>
            </p>
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
