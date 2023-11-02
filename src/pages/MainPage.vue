<script setup>
import ProductList from '@/components/ProductList.vue'
import products from '@/data/products'
import {computed, ref} from 'vue'
import BasePagination from '@/components/BasePagination.vue'
import ProductFilter from '@/components/ProductFilter.vue'

const filterPriceFrom = ref(0)
const filterPriceTo = ref(0)
const filterCategoryId = ref(0)
const filterCategoryColor = ref(0)


const page = ref(1)
const productsPerPage = 3

const productsPaginat = computed( () => {
    const offset = (page.value - 1) * productsPerPage
    return filteredProducts.value.slice(offset, offset + productsPerPage)
})

const countProducts = computed(() => filteredProducts.value.length)

const filteredProducts = computed(() => {
    let filteredProducts = products

    if(filterPriceFrom.value > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > filterPriceFrom.value)
    }

    if(filterPriceTo.value > 0) {
        filteredProducts = filteredProducts.filter(product => product.price < filterPriceTo.value)
    }

    if(filterCategoryId.value) {
        filteredProducts = filteredProducts.filter(product => product.categoryId === filterCategoryId.value)
    }

    if(filterCategoryColor.value) {
        filteredProducts = filteredProducts.filter((product) => product.colors.find((el) => el.id === filterCategoryColor.value))
    }

    return filteredProducts
})


</script>

<template>
    <main class="content container">
        <div class="content__top content__top--catalog">
            <h1 class="content__title">
                Каталог
            </h1>
            <span class="content__info">
                Общее количество товаров {{ filteredProducts.length }}
            </span>
        </div>

        <div class="content__catalog">
            <ProductFilter
                    v-model:price-from="filterPriceFrom"
                    v-model:price-to="filterPriceTo"
                    v-model:category-id="filterCategoryId"
                    v-model:category-color="filterCategoryColor"
            />
            <section class="catalog">
                <ProductList :products="productsPaginat" />

                <BasePagination
                        v-model="page"
                        :count="countProducts"
                        :per-page="productsPerPage"
                />
            </section>

        </div>
    </main>
</template>

<style scoped>

</style>