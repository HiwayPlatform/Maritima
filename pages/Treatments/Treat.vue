<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header :title="title"/>
    <app-page-treatments-treat-content :treatment="treatment"/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsTreatContent from "~/components/Pages/Treatments/SectionTreat";

  export default {
    name: "app-page-treatments-treat",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsTreatContent,
    },
    data() {
      return {
        title: '',
        treatment: {}
      };
    },
    methods: {
      async loadData() {
        if (this.$route.query.id) {
          const result = await this.$axios.$get(`/treatments/?id=${this.$route.query.id}`);
          this.treatment = result.data;
          this.title = this.treatment.title;
        }
      }
    },
    computed: {
      id() {
        if (this.$route.query.id) {
          return this.$route.query.id
        }
        return null;
      }
    },
    watch: {
      id() {
        this.loadData()
      },
    },
    mounted() {
      paintCommon();
      this.loadData();
      this.$bus.$on('set:title', (title) => {
        this.title = title;
      });
    },
    beforeDestroy() {
      this.$bus.$off('set:title');
    },
    layout: 'default',
    head: {
      title: 'Treatment',
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
