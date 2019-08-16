<template>
  <section class="news-content">
    <div class="container">
      <template v-if="items.length > 0">
        <div class="active-news">
          <b-row>
            <b-col md="8">
              <nuxt-link active-class="active" :to="'/news/item?id=' + items[0].id">
                <div class="news-image"
                     :style="[items[0].image ? {backgroundImage: 'url('+items[0].image+')'} : '']"
                >
                </div>
              </nuxt-link>
            </b-col>
            <b-col md="4">
              <div class="news-content">
                <div class="news-content-title">
                  <h2>{{items[0].title}}</h2>
                </div>
                <div class="news-content-description">
                  <div v-html="items[0].short_description"></div>
                  <small>{{items[0].published_at}} - {{items[0].author}}</small>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="news-list">
          <b-row>
            <b-col md="4" v-for="(news, index) in items" :key="index">
              <nuxt-link active-class="active" :to="'/news/item?id=' + news.id">
                <div class="news-item">
                  <div class="news-image"
                       :style="[news.image ? {backgroundImage: 'url('+news.image+')'} : '']">
                  </div>
                  <div class="news-content">
                    <div class="news-content-title">
                      <h5>{{news.title}}</h5>
                    </div>
                    <div class="news-content-description">
                      <div v-html="news.short_description"></div>
                      <small>{{news.published_at}} - {{news.author}}</small>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </b-col>
          </b-row>
          <b-row v-show="loading">
            <b-col md="12">
              <loading-spinner/>
            </b-col>
          </b-row>
        </div>
        <div class="view-more">
          <a href="#"
             class="button-extend-normal-round"
             :class="{disabled: disableLoadMore}"
             @click="loadMore">View More</a>
        </div>
      </template>
      <div style="margin-top:180px" v-else>
        <loading-spinner/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-news-list",
    props: {
      newsList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        page: 3,
        size: 3,
        loading: false,
        disableLoadMore: false,
        items: []
      }
    },
    methods: {
      async loadMore() {
        if (event) {
          event.preventDefault();
        }
        if (this.disableLoadMore) {
          return false;
        }
        this.loading = true;
        const result = await this.$axios.$get(`/news?page=${this.page}&size=${this.size}`);
        if (result.data.length > 0) {
          this.items.push(...result.data);
          this.page++;
        } else {
          this.disableLoadMore = true;
        }
        this.loading = false;
      }
    },
    watch: {
      newsList() {
        if (this.newsList.length > 0) {
          this.items = this.newsList;
        }
      }
    }
  }
</script>

<style scoped>

</style>
