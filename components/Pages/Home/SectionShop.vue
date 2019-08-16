<template>
  <section class="shop">
    <div class="container">
      <div class="shop-title">
        <h2>Shop our products</h2>
      </div>
      <b-row v-if="products.length > 0">
        <b-col lg="3" md="6" v-for="(product, index) of products" :key="index">
          <div class="shop-content-item">
            <div class="item-image">
              <img :src="product.image"/>
            </div>
            <div class="item-description">
              <div v-html="product.description"></div>
            </div>
            <div class="item-price">
              <p><span>{{product.price}}</span>&nbsp;&nbsp;&nbsp;<strong>{{product.discount_price}}</strong></p>
            </div>
            <div class="item-button">
              <a :href="product.purchase_link" class="button-normal-round">Buy</a>
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
        <a href="https://webshop.dentalesthetics.es/" class="button-extend-normal-round">Shop more</a>
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
