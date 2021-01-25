<template>
  <div class="wrapper">
      <h1 class="wrapper_h1">Guitars</h1>
      <div class="main">
      <p class="main_p">Выбери гитару на свой вкус...</p>

      <carousel class="main_carousel" :per-page="1"  :mouse-drag="false" :autoplay=true paginationColor="transparent" paginationActiveColor="transparent">
        <slide class="carousel_slide"> 
          Хочешь научиться играть на гитаре, но не знаешь какую гитару выбрать?
        </slide>
        <slide class="carousel_slide">
          Гитары, на которых играли твои любимые музыканты!
        </slide>
        <slide class="carousel_slide">
          Гитары и бас-гитары от мировых брендов!
        </slide>

        <slide class="carousel_slide">
          Разнообразный звук и стиль музыки!
        </slide>
  
      </carousel>

      <router-link class="main_link" to="/shop">Начать</router-link>
      </div>
      


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/home.scss';

@media (max-width: 380px) {
    .navbar {
        position: absolute;
        top: -9999px;
        left: -9999px;

    
}
}

</style>