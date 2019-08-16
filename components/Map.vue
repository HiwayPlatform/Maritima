<template>
  <div id="map"></div>
</template>

<script>
  import gmapsInit from '~/plugins/gmaps';

  export default {
    name: "app-google-map",

    async mounted() {
      try {
        let google;

        if (window['gmapsCallback']) {
          google = window.google;
        } else {
          google = await gmapsInit();
        }

        const uluru = {lat: 28.3650314, lng: -16.3643976};
        const map = new google.maps.Map(this.$el, {zoom: 17, center: uluru});
        const marker = new google.maps.Marker({position: uluru, map: map});

      } catch (error) {
        console.error(error);
      }
    },
  }
</script>

<style scoped>

</style>
