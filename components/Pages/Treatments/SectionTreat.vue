<template>
  <section class="treatments-content">
    <div class="container">
      <template v-if="treatment.id">
        <b-row>
          <b-col md="12">
            <div id="slider">
              <no-ssr>
                <slick-slide
                  ref="slick"
                  :options="slickOptions"
                  @afterChange="handleAfterChange"
                  v-if="slickTreatments.length > 0">
                  <div class="slider-item"
                       v-for="(item, index) in slickTreatments"
                       :key="index">
                    <div class="slider-item-image">
                      <img v-if="treatment['category'] === 'dental'"
                           src="~/assets/images/treatments/dental.svg"
                           alt="treatment image">
                      <img v-if="treatment['category'] === 'esthetics'"
                           src="~/assets/images/treatments/esthetics.svg"
                           alt="treatment image">
                      <img v-if="treatment['category'] === 'natural-medicine'"
                           src="~/assets/images/treatments/natural-medicine.svg"
                           alt="treatment image">
                    </div>
                    <div class="slider-item-description"
                         v-html="item['contents'][$i18n.locale]['long_description']">
                    </div>
                    <div class="slider-item-specs"
                         v-if="item['contents'][$i18n.locale]['specs'].length > 0">
                      <div class="slider-item-specs-item"
                           v-for="(spec, i) in item['contents'][$i18n.locale]['specs']"
                           :key="i">
                        <div class="slider-item-specs-item-image">
                          <img v-if="i===0" src="~/assets/images/icons/clock.svg"/>
                          <img v-if="i===1" src="~/assets/images/icons/kassa.svg"/>
                          <img v-if="i===2" src="~/assets/images/icons/extra.svg"/>
                        </div>
                        <div class="slider-item-specs-item-description"
                             v-html="spec">
                        </div>
                      </div>
                    </div>
                  </div>
                </slick-slide>
              </no-ssr>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <h3>{{$t('treatments.others')}}</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="3" md="6"
                 v-for="(item, index) in relatedTreatments"
                 :key="index">
            <div class="treatments-content-item">
              <div class="item-image">
                <img v-if="treatment['category'] === 'dental'"
                     src="~/assets/images/treatments/dental.svg"
                     alt="treatment image">
                <img v-if="treatment['category'] === 'esthetics'"
                     src="~/assets/images/treatments/esthetics.svg"
                     alt="treatment image">
                <img v-if="treatment['category'] === 'natural-medicine'"
                     src="~/assets/images/treatments/natural-medicine.svg"
                     alt="treatment image">
              </div>
              <div class="item-description">
                <h5>{{item['contents'][$i18n.locale]['title']}}</h5>
                <h6>{{item['contents'][$i18n.locale]['sub_title']}}</h6>
                <div v-html="item['contents'][$i18n.locale]['short_description']"></div>
              </div>
              <div class="item-button">
                <nuxt-link active-class="active"
                           class="button-extend-normal-round"
                           :to="'/treatments/treat?id=' + item['id']">{{$t('common.readMore')}}
                </nuxt-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <loading-spinner/>
      </template>
    </div>
  </section>
</template>

<script>

  export default {
    name: "app-page-treatments-treat-content",
    props: {
      treatment: {
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
        relatedTreatments: [],
        slickTreatments: [],
      };
    },
    methods: {
      handleAfterChange(event, slick, currentSlide) {
        this.$bus.$emit('set:active-slide', this.slickTreatments[currentSlide].contents)
      }
    },
    watch: {
      treatment() {
        this.relatedTreatments = [];
        this.slickTreatments = [];
        if (this.treatment && this.treatment['id']) {
          this.relatedTreatments = this.treatment['related'];
          this.slickTreatments.push(this.treatment);
          this.slickTreatments.push(...this.relatedTreatments);
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
