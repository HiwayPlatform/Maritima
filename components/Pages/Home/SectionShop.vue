<template>
  <section class="shop">
    <div class="container">
      <div class="shop-title">
        <h2>{{$t('home.shop.title')}}</h2>
      </div>
      <b-row v-if="products.length > 0">
        <b-col lg="3" md="6"
               v-for="(product, index) of products"
               :key="index">
          <div class="shop-content-item">
            <div class="item-image">
              <img :src="product['image']" alt="Product Image"/>
            </div>
            <div class="item-description">
              <div v-html="product['contents'][$i18n.locale]['description']"></div>
            </div>
            <div class="item-price">
              <p>
                <span>{{product['price']}}</span>&nbsp;&nbsp;&nbsp;<strong>{{product['discount_price']}}</strong>
              </p>
            </div>
            <div class="item-button">
              <a :href="product['purchase_link']"
                 class="button-normal-round">{{$t('home.shop.buy')}}</a>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col lg="3" md="6"><loading-spinner/></b-col>
        <b-col lg="3" md="6"><loading-spinner/></b-col>
        <b-col lg="3" md="6"><loading-spinner/></b-col>
        <b-col lg="3" md="6"><loading-spinner/></b-col>
      </b-row>
      <div class="shop-more">
        <a href="https://shop.maritimadental.com/"
           class="button-extend-normal-round">{{$t('home.shop.shopMore')}}</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-home-shop",
    props: {
      products: {
        type: Array,
        default: () => []
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
