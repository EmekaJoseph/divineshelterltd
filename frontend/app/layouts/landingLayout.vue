<template>
    <landing-navbar-component />
    <div class="min-vh-100 pb-5 overflow-hidden">
        <slot />
        <landing-cta-component />
    </div>
    <landing-footer-component />

    <landing-whats-app-floating-button />
</template>

<script setup lang="ts">
const route = useRoute()

const title = computed(() => {
    const path = route.path.replace(/^\/+|\/+$/g, '')

    if (!path) return 'Divine Shelter LTD | Home'

    const formattedPath = path
        .split(/[-\/]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')

    return `Divine Shelter LTD | ${formattedPath}`
})

useSeoMeta({
    title
})
</script>