<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header/>
    <app-page-treatments-menu/>
    <app-page-treatments-dental-content/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsDentalContent from "~/components/Pages/Treatments/SectionDental";

  export default {
    name: "app-page-treatments-natural-medicine",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsDentalContent,
    },
    data() {
      return {
        backgroundColor: '#ddd8e5',
      };
    },
    mounted() {
      paintCommon();
      this.$store.commit('background/set', this.backgroundColor);
    },
    layout: 'default',
    head: {
      title: 'Natural Medicine Category',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your next web design and development team'
        }
      ]
    }
  }
</script>

<style scoped>

</style>
