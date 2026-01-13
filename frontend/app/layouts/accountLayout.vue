<template>
    <AccountNavBar />
    <div class="content-slot bg-account">
        <slot />
    </div>
    <AccountFooter />
</template>

<script setup lang="ts">
const route = useRoute()

const title = computed(() => {
    const path = route.path.replace(/^\/+|\/+$/g, '')

    if (!path) return 'Women in GRCFP | Home'

    const formattedPath = path
        .split(/[-\/]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')

    return `Women in GRCFP | ${formattedPath}`
})

useSeoMeta({
    title
})

const templateStore = useTemplateStore()
</script>

<style scoped>
.content-slot {
    /* background-color: v-bind('templateStore.themeColors.accountBg'); */
    min-height: 100vh;
    overflow: hidden;
    padding-top: 110px;
    /* padding-bottom: 200px; */
}
</style>