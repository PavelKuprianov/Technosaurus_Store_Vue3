<script setup>
import {computed} from 'vue'

const props = defineProps({
    modelValue: {
        type: Number
    },
    count: {
        type: Number
    },
    perPage: {
        type: Number
    }
})
const pages = computed(() => Math.ceil(props.count / props.perPage))

const emit = defineEmits(['paginate'])

function paginate(page) {
    emit('update:modelValue', page)
}

function paginatePlus(page) {
    if (page !== pages.value) {
        paginate(page + 1);
    }
}
function paginateMinus(page) {
    if (page !== 1) {
        paginate(page - 1);
    }
}
</script>

<template>
    <ul class="catalog__pagination pagination">
        <li class="pagination__item">
            <a
                class="pagination__link pagination__link--arrow"
                :class="{'pagination__link--disabled' : props.modelValue === 1}"
                aria-label="Предыдущая страница"
                @click.prevent="paginateMinus(props.modelValue)"
            >
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-left"></use>
                </svg>
            </a>
        </li>
        <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
            <a
                href="#"
                class="pagination__link"
                :class="{'pagination__link--current' : pageNumber === props.modelValue}"
                @click.prevent="paginate(pageNumber)"
            >
                {{ pageNumber }}
            </a>
        </li>
        <li class="pagination__item">
            <a
                class="pagination__link pagination__link--arrow"
                :class="{'pagination__link--disabled' : props.modelValue === pages}"
                href="#"
                aria-label="Следующая страница"
                @click.prevent="paginatePlus(props.modelValue)"
            >
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </a>
        </li>
    </ul>
</template>

<style scoped>
.pagination__link {
    cursor: pointer;
}
.pagination__link--disabled {
    cursor: not-allowed;
}
.pagination__link:hover {
    background-color: #f8f8f8;
    transform: scale(1.1);
}
.pagination__link--current {
    color: #9eff00;
    font-weight: 700;
}
</style>