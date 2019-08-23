<template>
  <footer>
    <div class="app-footer">
      <div class="container">
        <b-row>
          <b-col md="12">
            <div class="footer-logo">
              <img src="~/assets/images/logo.svg">
              <div class="footer-title">
                <h5>{{$t('footer.logo.title')}}</h5>
                <p>{{$t('footer.logo.subTitle')}}</p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="footer-content">
          <b-col sm="6" class="footer-left d-flex">
            <div class="footer-left-about">
              <h5>{{$t('footer.about.title')}}</h5>
              <p>
                <nuxt-link
                  active-class="active"
                  to="/home"
                  class="nav-link">{{$t('footer.about.aboutUs')}}</nuxt-link>
              </p>
              <p>
                <nuxt-link
                  active-class="active"
                  to="/treatments"
                  class="nav-link">{{$t('footer.about.treatments')}}</nuxt-link>
              </p>
              <p>
                <nuxt-link
                  active-class="active"
                  to="/news"
                  class="nav-link">{{$t('footer.about.news')}}</nuxt-link>
              </p>
              <p>
                <a href="https://webshop.dentalesthetics.es/"
                   class="nav-link">{{$t('footer.about.webshop')}}</a></p>
              <p>
                <nuxt-link
                  active-class="active"
                  to="/contact"
                  class="nav-link">{{$t('footer.about.contact')}}</nuxt-link>
              </p>
            </div>
            <div class="footer-left-contact">
              <h5>{{$t('footer.contact.title')}}</h5>
              <p>
                <a href="mailto:citas@dentalesthetics.es">
                  citas@dentalesthetics.es</a><br/>+34 674354930</p>
              <p>
                {{$t('footer.contact.address1')}}<br/>
                {{$t('footer.contact.address2')}}<br/>
                {{$t('footer.contact.address3')}}<br/>
                {{$t('footer.contact.address4')}}<br/>
                38530</p>
            </div>
          </b-col>
          <b-col offset-sm="4" sm="2" class="footer-right">
            <div class="footer-right-content">
              <h5>{{$t('footer.social.title')}}</h5>
              <a href="https://www.facebook.com/Dentalestheticstenerife/" target="_blank">
                <div class="footer-facebook-content">
                  <img src="~/assets/images/icons/facebook-image.png">
                  <span>Facebook</span>
                </div>
              </a>
              <a href="https://www.instagram.com/dentalestheticstenerife/" target="_blank">
                <div class="footer-instagram-content mt-2">
                  <img src="~/assets/images/icons/instagram-image.png">
                  <span>Instagram</span>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </footer>
</template>

<script>
  import Pagination from "bootstrap-vue/src/mixins/pagination";

  export default {
    name: "app-footer",
    components: {Pagination}
  }
</script>

<style scoped>

</style>
