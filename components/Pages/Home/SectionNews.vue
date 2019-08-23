<template>
  <section class="news">
    <div class="container">
      <div class="news-title">
        <h2>{{$t('home.news.title')}}</h2>
      </div>
      <b-row v-if="news.length > 0">
        <b-col lg="4"
               v-for="(item, index) of news"
               :key="index">
          <nuxt-link active-class="active"
                     :to="'/news/item?id=' + item['id']">
            <div class="news-content-item">
              <div class="item-image"
                   :style="[item['image'] ?
                   {backgroundImage: 'url('+item['image']+')'} : '']">
              </div>
              <div class="item-description">
                <h5>{{item['contents'][$i18n.locale]['title']}}</h5>
                <div
                  v-html="item['contents'][$i18n.locale]['short_description']"></div>
                <small>
                  {{item['published_at']}}
                  -
                  {{item['author']}}
                </small>
              </div>
            </div>
          </nuxt-link>
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
        <nuxt-link active-class="active"
                   to="/news"
                   class="button-extend-normal-round">{{$t('home.news.moreNews')}}
        </nuxt-link>
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
