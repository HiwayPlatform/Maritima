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
                  <div class="slider-item"
                       v-for="(item, index) in slickNews"
                       :key="index">
                    <div class="slider-item-image"
                         :style="[item['image'] ?
                         {backgroundImage: 'url('+item['image']+')'} : '']">
                    </div>
                    <div class="slider-item-description">
                      <div v-html="item['contents'][$i18n.locale]['long_description']"></div>
                      <small>
                        {{item['published_at']}}
                        -
                        {{item['author']}}
                      </small>
                    </div>
                  </div>
                </slick-slide>
              </no-ssr>
            </div>
          </b-col>
        </b-row>
        <div class="news-list">
          <h2>{{$t('news.moreNews')}}</h2>
          <b-row>
            <b-col md="4"
                   v-for="(item, index) in relatedNews"
                   :key="index">
              <nuxt-link active-class="active"
                         :to="'/news/item?id=' + item['id']">
                <div class="news-item">
                  <div class="news-image"
                       :style="[item['image'] ?
                       {backgroundImage: 'url('+item['image']+')'} : '']">
                  </div>
                  <div class="news-content">
                    <div class="news-content-title">
                      <h5>{{item['contents'][$i18n.locale]['title']}}</h5>
                    </div>
                    <div class="news-content-description">
                      <div v-html="item['contents'][$i18n.locale]['short_description']"></div>
                      <small>
                        {{item['published_at']}}
                        -
                        {{item['author']}}
                      </small>
                    </div>
                  </div>
                </div>
              </nuxt-link>
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
        this.$bus.$emit('set:active-slide', this.slickNews[currentSlide]['contents'])
      }
    },
    watch: {
      news() {
        this.relatedNews = [];
        this.slickNews = [];
        if (this.news && this.news['id']) {
          this.relatedNews = this.news['related'];
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
