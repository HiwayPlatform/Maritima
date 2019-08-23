<template>
  <div class="app-lang">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs"
              :key="`Lang${i}`"
              :value="lang.value">{{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "app-lang",
    data() {
      return {
        langs: [
          {'value': 'en', 'label': 'ENG'},
          {'value': 'es', 'label': 'ES'}
        ]
      }
    },
  }
</script>

<style scoped>
</style>
