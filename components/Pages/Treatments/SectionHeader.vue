<template>
  <section class="header" :style="{background: backgroundColor}">
    <div class="container h-100 position-relative">
      <div class="v-middle_wrap">
        <div class="headline v-middle">
          <h1 v-if="title==='All Dentals'">
            {{$t('treatments.dental.all')}}</h1>
          <h1 v-else-if="title==='All Esthetics'">
            {{$t('treatments.esthetics.all')}}</h1>
          <h1 v-else-if="title==='All Natural Medicines'">
            {{$t('treatments.natural.all')}}</h1>
          <h1 v-else>{{title}}</h1>
        </div>
      </div>
    </div>
    <div class="header-bottom_back"></div>
  </section>
</template>

<script>
  export default {
    name: "app-page-treatments-header",
    props: {
      title: {
        type: String,
        default: 'All Treatments'
      },
    },
    data() {
      return {}
    },
    computed: {
      backgroundColor() {
        if (this.$store.state.background.color) {
          return this.$store.state.background.color;
        }
        return '#c0e4da';
      }
    }
  }
</script>

<style scoped>

</style>
