<template>
    <div class="progress" :class="{ 'rounded-0': !rounded }" :style="{ 'height': height + 'px' }">
        <div class="progress-bar" :class="colorClass" role="progressbar" :style="{ 'width': width + '%' }"
            :aria-valuenow="width" aria-valuemin="0" aria-valuemax="100">
            <slot></slot>
        </div>
    </div>

</template>

<script setup lang="ts">

defineProps({
    height: {
        type: Number,
        default: 10,
    },
    width: {
        type: Number,
        default: 25,
    },
    colorClass: {
        type: String,
        default: ''
    },

    rounded: {
        type: Boolean,
        default: true
    }
})

</script>