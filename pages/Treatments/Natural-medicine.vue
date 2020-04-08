<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header :title="title"/>
    <app-page-treatments-menu/>
    <app-page-treatments-natural-content :treatments="treatments"/>
  </div>
</template>

<script>
  // import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsNaturalContent from "~/components/Pages/Treatments/SectionNaturalMedicine";

  export default {
    name: "app-page-treatments-natural-medicine",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsNaturalContent,
    },
    data() {
      return {
        title: 'All Natural Medicines',
        backgroundColor: '#ddd8e5',
        treatments: []
      };
    },
    methods: {
      async loadData() {
        const result = await this.$axios.$get('/treatments?page=1&size=-1&category=wellness');
        this.treatments = result.data;
      }
    },
    mounted() {
      //  paintCommon();
      this.loadData();
      this.$store.commit('background/set', this.backgroundColor);
    },
    layout: 'default',
    head: {
      title: 'Natural Medicine Category',
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
