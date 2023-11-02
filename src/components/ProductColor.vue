<script setup>
import {computed} from "vue";

const props = defineProps({
    productColors: {
        type: Array
    },
    modelValue: {
        type: Number
    },
})

const emit = defineEmits(['computedColor'])

const computedColor = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
})

</script>

<template>
    <ul class="colors colors--black">
        <li class="colors__item" v-for="color in props.productColors" :key="color.id" >
            <label class="colors__label">
                <input
                    class="colors__radio sr-only"
                   type="radio"
                   :value="color.id"
                   v-model="computedColor"
                >
                <span class="colors__value" :style="{background: color.code}">
                </span>
            </label>
        </li>
    </ul>
</template>

<style scoped>

</style>