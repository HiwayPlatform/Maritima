<template>
  <section class="treatments-content">
    <div class="container">
      <b-row v-if="treatments.length > 0">
        <b-col lg="3" md="6"
               v-for="(treatment, index) in treatments"
               :key="index">
          <div class="treatments-content-item">
            <div class="item-image">
              <img src="~/assets/images/treatments/esthetics.svg" alt="Esthetics"/>
            </div>
            <div class="item-description">
              <h5>{{treatment['contents'][$i18n.locale]['title']}}</h5>
              <h6>{{treatment['contents'][$i18n.locale]['sub_title']}}</h6>
              <div v-html="treatment['contents'][$i18n.locale]['short_description']"></div>
            </div>
            <div class="item-button">
              <nuxt-link active-class="active"
                         class="button-extend-normal-round"
                         :to="'/treatments/treat?id=' + treatment['id']">{{$t('common.readMore')}}
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
    name: "app-page-treatments-esthetics-content",
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
