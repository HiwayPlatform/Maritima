<template>
  <div id="page_news" class="main">
    <app-page-news-header/>
    <app-page-news-list :newsList="newsList"/>
  </div>
</template>

<script>
  // import {paintCommon} from "~/assets/js/animate";
  import AppPageNewsHeader from "~/components/Pages/News/SectionHeader";
  import AppPageNewsList from "~/components/Pages/News/SectionList";

  export default {
    name: "app-page-news",
    components: {
      AppPageNewsHeader,
      AppPageNewsList
    },
    data() {
      return {
        newsList: []
      };
    },
    methods: {
      async loadData() {
        const result = await this.$axios.$get('/news?page=1&size=6');
        this.newsList = result.data;
      }
    },
    mounted() {
     // paintCommon();
      this.loadData();
      this.$store.commit('background/default');
    },
    layout: 'default',
    head: {
      title: 'News',
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
