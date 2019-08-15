<template>
  <section class="news-content">
    <div class="container">
      <template v-if="news.id">
        <b-row>
          <b-col md="12">
            <div id="slider">
              <no-ssr>
                <slick-slide
                  ref="slick"
                  :options="slickOptions"
                  @afterChange="handleAfterChange"
                  v-if="slickNews.length > 0">
                  <div class="slider-item" v-for="(item, index) in slickNews" :key="index">
                    <div class="slider-item-image"
                         :style="[item.image ? {backgroundImage: 'url('+item.image+')'} : '']">
                      <!--<img v-show="item.image" :src="item.image" alt="News image">-->
                    </div>
                    <div class="slider-item-description">
                      <p>{{item.long_description}}</p>
                      <small>{{item.published_at}} - {{item.author}}</small>
                    </div>
                  </div>
                </slick-slide>
              </no-ssr>
            </div>
          </b-col>
        </b-row>
        <div class="news-list">
          <h2>More News</h2>
          <b-row>
            <b-col md="4" v-for="(item, index) in relatedNews" :key="index">
              <div class="news-item">
                <nuxt-link active-class="active"
                           :to="'/news/item?id=' + news.id">
                  <div class="news-image"
                       :style="[item.image ? {backgroundImage: 'url('+item.image+')'} : '']">
                    <!--<img :src="item.image"/>-->
                  </div>
                </nuxt-link>
                <div class="news-content">
                  <div class="news-content-title">
                    <h5>{{item.title}}</h5>
                  </div>
                  <div class="news-content-description">
                    <p>{{item.short_description}}</p>
                    <small>{{item.published_at}} - {{item.author}}</small>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </template>
      <template v-else>
        <div style="margin-top: 180px">
          <loading-spinner/>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-news-item-content",
    props: {
      news: {
        type: Object,
        default: () => {
        }
      }
    },
    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="slick-prev slick-arrow"></div>',
          nextArrow: '<div class="slick-next slick-arrow"></div>'
        },
        relatedNews: [],
        slickNews: []
      }
    },
    methods: {
      handleAfterChange(event, slick, currentSlide) {
        this.$bus.$emit('set:title', this.slickNews[currentSlide].title)
      }
    },
    watch: {
      news() {
        this.relatedNews = [];
        this.slickNews = [];
        if (this.news && this.news.id) {
          this.relatedNews = this.news.related;
          this.slickNews.push(this.news);
          this.slickNews.push(...this.relatedNews);
          this.$nextTick(() => {
            this.$refs.slick.reSlick();
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>
