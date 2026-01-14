<template>

    <div class="image-bg" :style="{ background: `url(${props.image}) center/cover no-repeat` }">
        <div class="bg-overlay"></div>
        <span class="title-bold">
            <slot />
        </span>
    </div>

</template>

<script setup lang="ts">


const props = defineProps({
    image: { type: String, default: '/images/about-us-brief.jpg' },

});

</script>


<style scoped>
.image-bg {
    /* background: url('/images/about-us-brief.jpg') center/cover no-repeat; */
    background-position: center top !important;
    overflow: hidden;
    min-height: 180px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;
}

.title-bold {
    color: white;
    font-weight: 700;
    font-size: 2rem;

    position: relative;
    z-index: 2;
}
</style>