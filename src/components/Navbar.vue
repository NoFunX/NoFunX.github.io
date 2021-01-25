<template>
    <div class="navbar">
        <div class="logo">Guitars</div>
        <div class="links">
            <router-link :title="link.title" class="links_item" :to="link.url" v-for="(link, index) in links" :key="index"> {{ link.title }}</router-link>
        </div>

        </div>

        
        
</template>

<script>
export default {
    data(){
        return {
            links: [
                {title: 'Главная', url: '/'}, 
                {title: 'Магазин', url: '/shop'}, 
            ]
        }
    }
}
</script>