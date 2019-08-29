<template>
  <div id="page_contact" class="main">
    <app-page-contact-form/>
    <app-page-contact-appointment/>
  </div>
</template>

<script>
  // import {paintCommon} from "~/assets/js/animate";
  import AppPageContactForm from "~/components/Pages/Contact/SectionForm";
  import AppPageContactAppointment from "~/components/Pages/Contact/SectionAppointment";

  export default {
    name: "app-page-contact",
    components: {
      AppPageContactForm,
      AppPageContactAppointment
    },
    data() {
      return {
        backgroundColor: '#cde8f0'
      };
    },
    mounted() {
      // paintCommon();
      this.$store.commit('background/set', this.backgroundColor);
    },
    layout: 'default',
    head: {
      title: 'Contact',
      meta: [
        {
          hid: 'Maritima',
          name: 'Maritima',
          content: 'Maritima Dental & Esthetics'
        }
      ]
    }
  }
</script>

<style scoped>

</style>
