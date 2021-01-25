<template>
    <div class="wrapper">
        <div class="wrapper_slider">
        <carousel :per-page="1" >
            <slide v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.title">
            </slide> 
        </carousel>
        <span class="wrapper_span"> {{ product.price }} </span>
        </div>
        <div class="description">
            <h1 class="description_h1"> {{ product.guitar }} </h1>
            <p class="description_p"> {{ product.desc }}</p>
            <span class="description_span"><b>Известные гитаристы:</b> {{ product.stars }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            product: null
        }
    },
    created(){
        let id = this.$route.params.id
        this.product = this.$store.getters.getProductsById(id)

    }
}
</script>

<style lang="scss" scoped>

@import 'src/assets/scss/product.scss';
</style>