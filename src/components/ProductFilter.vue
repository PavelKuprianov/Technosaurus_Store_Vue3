<script setup>
import categories from '@/data/categories'
import colors from "@/data/colors";
import {ref, watch} from 'vue'
import ProductColor from '@/components/ProductColor.vue'


const props = defineProps({
    priceFrom: {
        type: Number
    },
    priceTo: {
        type: Number
    },
    categoryId: {
        type: Number
    },
    categoryColor: {
        type: Number
    }
})

const currentPriceFrom = ref(0)
const currentPriceTo = ref(0)
const currentCategoryId = ref(0)
const currentCategoryColor = ref(0)

watch(() => currentPriceFrom.value,() => {})
watch(() => currentPriceTo.value,() => {})
watch(() => currentCategoryId.value,() => {})
watch(() => currentCategoryColor.value,() => {})

watch(() => props.priceFrom, (value) => currentPriceFrom.value = value)
watch(() => props.priceTo, (value) => currentPriceTo.value = value)
watch(() => props.categoryId, (value) => currentCategoryId.value = value)
watch(() => props.categoryColor, (value) => currentCategoryColor.value = value)

const emit = defineEmits(['currentPriceFrom', 'currentPriceTo', 'currentCategoryId', 'currentCategoryColor'])
function submit() {
    emit('update:priceFrom', currentPriceFrom.value)
    emit('update:priceTo', currentPriceTo.value)
    emit('update:categoryId', currentCategoryId.value)
    emit('update:categoryColor', currentCategoryColor.value)
}
function reset() {
    emit('update:priceFrom', 0)
    emit('update:priceTo', 0)
    emit('update:categoryId', 0)
    emit('update:categoryColor', 0)
}

//
// currentPriceFrom = computed({
//     get() {
//       return props.priceFrom
//     },
//     set(value) {
//       emit('update:priceFrom', value)
//     }
// })
// currentPriceTo = computed({
//     get() {
//       return props.priceTo
//     },
//     set(value) {
//       emit('update:priceTo', value)
//     }
// })
</script>

<template>
    <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
            <fieldset class="form__block">
                <legend class="form__legend">Цена</legend>
                <label class="form__label form__label--price">
                    <input
                            class="form__input"
                            type="text"
                            name="min-price"

                            v-model.number="currentPriceFrom"
                    >
                    <span class="form__value">От</span>
                </label>
                <label class="form__label form__label--price">
                    <input
                          class="form__input"
                          type="text"
                          name="max-price"
                         v-model.number="currentPriceTo"
                     >
                    <span class="form__value">До</span>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Категория</legend>
                <label class="form__label form__label--select">
                    <select class="form__select" type="text" name="category" v-model.number="currentCategoryId">
                        <option value="0">Все категории</option>
                        <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.title }}</option>
                    </select>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ProductColor
                  class="product-color--filter"
                  :product-colors="colors"
                  v-model="currentCategoryColor"
                />
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Объемб в ГБ</legend>
                <ul class="check-list">
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="8" checked="">
                            <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="16">
                            <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="32">
                            <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="64">
                            <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="128">
                            <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="264">
                            <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
                        </label>
                    </li>
                </ul>
            </fieldset>

            <button class="filter__submit button button--primery" type="submit">
                Применить
            </button>
            <button class="filter__reset button button--second" type="button" @click.prevent="reset">
                Сбросить
            </button>
        </form>
    </aside>
</template>

<style scoped>
.colors--black {
    --border-color: #fff;
}
</style>