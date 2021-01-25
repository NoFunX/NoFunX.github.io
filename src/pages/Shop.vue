<template>
  <div class="wrapper">
      <h1>Электрогитары</h1>

        <ul class="wrapper_item">
          <router-link class="wrapper_link_item" tag="li" :to="`/shop/${product.id}`" v-for="product in getProducts" :key="product.id">
            <img :src="product.img">
            <h2> {{ product.guitar }}</h2>
            <span> {{ product.price }}</span>

          </router-link>
        </ul>



  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      console.log(this.$route.params)
      return this.$store.getters.getProducts
    }
  }
}
</script>

<style lang="scss" scoped>

@import 'src/assets/scss/shop.scss'

</style>