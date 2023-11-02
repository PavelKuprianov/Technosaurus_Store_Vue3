<script setup>
import ProductItem from '@/components/ProductItem.vue'

defineProps({
    products: {
        type: Array
    }
})
</script>

<template>
    <ul class="catalog__list">
        <ProductItem
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </ul>
</template>



<style scoped>

</style>