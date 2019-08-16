<template>
  <section class="treatments-content">
    <div class="container">
      <b-row v-if="treatments.length > 0">
        <b-col lg="3" md="6" v-for="(treatment, index) in treatments" :key="index">
          <div class="treatments-content-item">
            <div class="item-image">
              <img src="~/assets/images/treatments/dental.svg"/>
            </div>
            <div class="item-description">
              <h5>{{treatment.title}}</h5>
              <h6>{{treatment.sub_title}}</h6>
              <div v-html="treatment.short_description"></div>
            </div>
            <div class="item-button">
              <nuxt-link active-class="active"
                         class="button-extend-normal-round"
                         :to="'/treatments/treat?id=' + treatment.id">Read More
              </nuxt-link>
            </div>
          </div>
        </b-col>
      </b-row>
      <template v-else>
        <loading-spinner/>
      </template>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-treatments-dental-content",
    props: {
      treatments: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
