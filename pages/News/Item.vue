<template>
  <div id="page_news" class="main">
    <app-page-news-header
      :title="activeSlide ? activeSlide[$i18n.locale].title : ''"/>
    <app-page-news-item-content :news="news"/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageNewsHeader from "~/components/Pages/News/SectionHeader";
  import AppPageNewsItemContent from "~/components/Pages/News/SectionItem";

  export default {
    name: "app-page-news-item",
    components: {
      AppPageNewsHeader,
      AppPageNewsItemContent
    },
    data() {
      return {
        activeSlide: null,
        news: {}
      };
    },
    methods: {
      async loadData() {
        if (this.$route.query.id) {
          const result = await this.$axios.$get(`/news/?id=${this.$route.query.id}`);
          this.news = result.data;
          this.activeSlide = this.news.contents;
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
      this.$store.commit('background/default');
      this.$bus.$on('set:active-slide', (contents) => {
        this.activeSlide = contents;
      });
    },
    beforeDestroy() {
      this.$bus.$off('set:active-slide');
    },
  }
</script>

<style scoped>

</style>
