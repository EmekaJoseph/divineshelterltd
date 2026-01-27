<template>
    <nav class="navbar navbar-expand-lg fixed-top p-3 px-0 bg-white" :class="customClass">
        <div class="container">
            <NuxtLink to="/" class="navbar-brand d-flex align-items-center text-theme"
                :class="{ 'text-white': route.path == '/' && !headerDropped }">
                <NuxtImg src="/images/divine-shelter-logo.webp" width="53" alt="site_logo" />
                <span class="fw-medium ms-1 text-uppercase small ">Divine Shelter Limited</span>
            </NuxtLink>
            <button class="navbar-toggler border-0" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas"
                aria-controls="menuOffcanvas" type="button">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <i class="bi bi-list fs-2" :class="{ 'text-white': route.path == '/' && !headerDropped, }"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

                    <li v-for="({ title, routePath, hasDropDown, dropdownItems, relatedRoutes }, i) in templateStore.navBarMenus"
                        :key="i" class="nav-item ">
                        <div v-if="hasDropDown" class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button" :id="'triggerId' + i"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :class="{
                                    'text-white': route.path == '/' && !headerDropped,
                                    'router-link-active': (templateStore.getRelatedRoutes(dropdownItems)).includes(route.path)
                                }">
                                {{ title }}
                            </button>

                            <div class="dropdown-menu animate__animated animate__slideInUp animate__faster"
                                :aria-labelledby="'triggerId' + i">

                                <nuxt-link v-for="(child, index) in dropdownItems" :key="index"
                                    class="dropdown-item hover-tiltX cursor-pointer" :to="child.routePath">
                                    {{ child.title }}
                                </nuxt-link>

                            </div>
                        </div>
                        <NuxtLink v-else class="nav-link me-2 " :class="{
                            'text-white': route.path == '/' && !headerDropped,
                            'router-link-active': (relatedRoutes ?? []).includes(route.path)
                        }" :to="routePath">
                            {{ title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <LandingMobileMenu />
</template>

<script setup lang="ts">

const templateStore = useTemplateStore()
const headerDropped = ref<boolean>(false)
const route = useRoute()

const onAboutRoute = computed(() => {
    return ['/about', '/advisory-board'].includes(route.fullPath)
})

const customClass = computed(() => ({
    'bg-dark-faded text-white': !headerDropped.value && route.path == '/',
    'animate__animated animate__slideInDown animate__faster': headerDropped.value && route.path == '/',
    // 'shadow-sm': headerDropped.value || route.path !== '/'
    'shadow-sm': headerDropped.value
}))


onMounted(() => {
    window.addEventListener("scroll", function () {
        const scrollThreshold = 50;
        if (window.scrollY > scrollThreshold)
            headerDropped.value = true;
        else
            headerDropped.value = false;
    })
})

</script>


<style scoped>
.nav-item {
    font-size: 16px;
    margin-left: 6px;
}

.nav-item .router-link-active,
.nav-item .router-link-exact-active {
    font-weight: bolder;
    color: var(--theme-color);
    /* border-bottom: 1px solid var(--theme-color) !important; */
}

.navbar-nav .nav-link {
    transition: all ease-in-out 0.4s;
}

.navbar-nav .nav-link:hover {
    /* color: #000 !important; */
    transform: translateY(-5px);
}


.dropdown-toggle::after {
    content: none !important;
}

.dropdown:hover .dropdown-menu {
    display: block;
    /* transform: translateY(0); */
    /* animation: slideUp 0.3s ease-in-out; */
}

.dropdown-item:hover {
    color: var(--theme-color);
    background: transparent;
}

.bg-dark-faded {
    background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>