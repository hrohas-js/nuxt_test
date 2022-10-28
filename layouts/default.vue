<template>
  <div>
    <HeaderTop></HeaderTop>
    <Nuxt />
  </div>
</template>

<script>
import HeaderTop from '~/components/HeaderTop'
export default {
  components: {
    HeaderTop
  },
  created() {
    this.$store.dispatch('mainStore/fetchCoins')
  }
}
</script>

<style lang='scss'>
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

ul {
  list-style-image: url("~/assets/svg/circle.svg");
  list-style-position: inside;
}

html {
  font-size: 12px;
}

body {
  @apply font-roboto text-text-main;
  font-size: 1.4rem;
  overflow-x: hidden;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

</style>
