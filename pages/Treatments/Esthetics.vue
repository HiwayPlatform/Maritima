<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header :title="title"/>
    <app-page-treatments-menu/>
    <app-page-treatments-esthetics-content :treatments="treatments"/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsEstheticsContent from "~/components/Pages/Treatments/SectionEsthetics";

  export default {
    name: "app-page-treatments-esthetics",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsEstheticsContent,
    },
    data() {
      return {
        title: 'All Esthetics',
        backgroundColor: '#c0e4da',
        treatments: []
      };
    },
    methods: {
      async loadData() {
        const result = await this.$axios.$get('/treatments?page=1&size=-1&category=esthetics');
        this.treatments = result.data;
      }
    },
    mounted() {
      paintCommon();
      this.loadData();
      this.$store.commit('background/set', this.backgroundColor);
    },
    layout: 'default',
    head: {
      title: 'Esthetics Category',
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
