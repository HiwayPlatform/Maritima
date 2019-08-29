<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header :title="title"/>
    <app-page-treatments-menu/>
    <app-page-treatments-dental-content :treatments="treatments"/>
  </div>
</template>

<script>
  // import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsDentalContent from "~/components/Pages/Treatments/SectionDental";

  export default {
    name: "app-page-treatments-dental",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsDentalContent,
    },
    data() {
      return {
        title: 'All Dentals',
        backgroundColor: '#cde8f0',
        treatments: []
      };
    },
    methods: {
      async loadData() {
        const result  = await this.$axios.$get('/treatments?page=1&size=-1&category=dental');
        this.treatments = result.data;
      }
    },
    mounted() {
     // paintCommon();
      this.loadData();
      this.$store.commit('background/set', this.backgroundColor);
    },
    layout: 'default',
    head: {
      title: 'Dental Category',
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
