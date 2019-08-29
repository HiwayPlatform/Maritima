<template>
  <div class="app-header_navigation"
       :style="{background: backgroundColor}">
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand
          href="/">
          <img src="~/assets/images/logo.svg" alt="Logo">
        </b-navbar-brand>
        <b-navbar-toggle
          target="nav-collapse"></b-navbar-toggle>
        <b-collapse
          id="nav-collapse"
          :style="{background: backgroundColor}"
          is-nav>
          <b-navbar-nav class="ml-auto navbar-content">
            <li class="nav-item">
              <nuxt-link
                active-class="active"
                to="/home"
                class="nav-link">{{$t('menu.home')}}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                active-class="active"
                to="/treatments"
                class="nav-link">{{$t('menu.treatments')}}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                active-class="active"
                to="/news"
                class="nav-link">{{$t('menu.news')}}</nuxt-link>
            </li>
            <li class="nav-item">
              <a href="https://webshop.dentalesthetics.es/"
                 class="nav-link">{{$t('menu.webshop')}}</a>
            </li>
            <li class="nav-item">
              <nuxt-link active-class="active"
                         to="/contact"
                         class="nav-link">{{$t('menu.contact')}}</nuxt-link>
            </li>
          </b-navbar-nav>
          <b-navbar-nav class="appointment ml-auto">
            <a href="https://online.clinic-cloud.com/dentalesthetics/"
               class="button-small-round">{{$t('menu.book')}}</a>
          </b-navbar-nav>
          <app-lang/>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  import AppLang from "../Lang";
  export default {
    name: "app-header-navigation",
    components: {AppLang},
    data() {
      return {
      }
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
