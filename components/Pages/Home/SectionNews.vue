<template>
  <section class="news">
    <div class="container">
      <div class="news-title">
        <h2>Our news</h2>
      </div>
      <b-row v-if="news.length > 0">
        <b-col lg="4" v-for="(item, index) of news" :key="index">
          <div class="news-content-item">
            <nuxt-link active-class="active" :to="'/news/item?id=' + item.id">
              <div class="item-image"
                   :style="[item.image ? {backgroundImage: 'url('+item.image+')'} : '']">
                <!--<img :src="item.image"/>-->
              </div>
            </nuxt-link>
            <div class="item-description">
              <h5>{{item.title}}</h5>
              <p>{{item.short_description}}</p>
              <small>{{item.published_at}} - {{item.author}}</small>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col lg="4">
          <loading-spinner/>
        </b-col>
        <b-col lg="4">
          <loading-spinner/>
        </b-col>
        <b-col lg="4">
          <loading-spinner/>
        </b-col>
      </b-row>
      <div class="news-more">
        <nuxt-link active-class="active" to="/news" class="button-extend-normal-round">More news</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-home-news",
    props: {
      news: {
        type: Array,
        default: () => []
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>

</style>
