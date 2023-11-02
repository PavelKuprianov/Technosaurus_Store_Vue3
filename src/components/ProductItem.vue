<script setup>
import {ref, watch} from 'vue'
import ProductColor from '@/components/ProductColor.vue'

defineProps({
    product: {
        type: Object
    }
})

const currentCategoryColor = ref(0)

// watch(
//     () => currentCategoryColor.value,
    // (newValue) => {
    //     if (newValue === 1) {
    //         console.log('HELLLL')
    //     } else {
    //         console.log('AAAAAAAAAAAAAAA')
    //     }
    // }
// )

</script>

<template>
    <li class="catalog__item">
        <a class="catalog__pic" href="#">
            <img :src="product.image" :alt="product.title">
        </a>

        <h3 class="catalog__title">
            <a href="#">
                {{ product.title }}
            </a>
        </h3>

        <span class="catalog__price">
              {{ product.price }} ₽
            </span>

            <ProductColor :product-colors="product.colors" v-model="currentCategoryColor" />
    </li>

</template>



<style scoped>

</style>