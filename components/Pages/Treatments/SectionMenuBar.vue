<template>
  <section class="menu">
    <div class="container">
      <div class="inner-container">
        <div class="menu-description">
          <p>{{$t('treatments.description')}}</p>
        </div>
        <div class="menu-bar">
          <ul class="menubar-content">
            <li class="menubar-item dental">
              <nuxt-link
                active-class="active"
                to="/treatments/dental"
                class="menu-link"> {{$t('treatments.dental.title')}}
              </nuxt-link>
            </li>
            <li class="menubar-item esthetics">
              <nuxt-link
                active-class="active"
                to="/treatments/esthetics"
                class="menu-link">{{$t('treatments.esthetics.title')}}
              </nuxt-link>
            </li>
            <li class="menubar-item natural-medicine">
              <nuxt-link
                active-class="active"
                to="/treatments/natural-medicine"
                class="menu-link">{{$t('treatments.natural.title')}}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-treatments-menu"
  }
</script>

<style scoped>

</style>
