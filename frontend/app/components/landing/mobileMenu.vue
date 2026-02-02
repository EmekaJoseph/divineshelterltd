<template>
    <div class="offcanvas offcanvas-start border-0" tabindex="-1" id="menuOffcanvas"
        aria-labelledby="offcanvasExampleLabel">
        <!-- Header -->
        <div class="offcanvas-header justify-content-between align-items-center p-4">
            <div class="d-flex align-items-center">
                <NuxtImg src="/images/divine-shelter-logo.webp" :width="50" alt="site_logo" />
                <div class="d-flex flex-column ms-2 lh-1 text-start">
                    <span class="fw-bold text-dark text-uppercase small ls-1">Divine Shelter Ltd.</span>
                    <span class="text-muted" style="font-size: 0.6rem; font-weight: 500;">Leaders in Alternative
                        Building Technology</span>
                </div>
            </div>
            <button ref="btnX" type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="offcanvas-body p-0 d-flex flex-column">
            <div class="flex-grow-1 overflow-auto py-2">
                <ul class="nav flex-column px-3">
                    <li v-for="({ title, routePath, hasDropDown, dropdownItems, relatedRoutes }, i) in templateStore.navBarMenus"
                        :key="i" class="nav-item mb-2">

                        <!-- Dropdown Menu Item -->
                        <div v-if="hasDropDown">
                            <div class="d-flex align-items-center justify-content-between nav-link-custom p-3 rounded-3 collapsed"
                                data-bs-toggle="collapse" :data-bs-target="'#collapseMenu' + i" aria-expanded="false">
                                <span class="fw-semibold">{{ title }}</span>
                                <i class="bi bi-chevron-down fs-6 transition-icon"></i>
                            </div>

                            <div class="collapse" :id="'collapseMenu' + i">
                                <ul class="list-unstyled ps-3 pe-2 py-2 bg-light rounded-3 mt-1">
                                    <li v-for="(child, index) in dropdownItems" :key="index" class="mb-1">
                                        <nuxt-link :to="child.routePath"
                                            class="d-block p-2 text-decoration-none text-muted rounded-2 hover-bg-white dismiss-on-click">
                                            {{ child.title }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Regular Menu Item -->
                        <nuxt-link v-else :to="routePath"
                            class="nav-link-custom d-block p-3 rounded-3 text-decoration-none dismiss-on-click"
                            :class="{ 'active-link': route.path === routePath }">
                            <span class="fw-semibold">{{ title }}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <div class="offcanvas-footer p-4 bg-light mt-auto">
                <p class="small text-muted mb-3 fw-bold text-uppercase ls-1">Connect with us</p>
                <div class="d-flex gap-3 mb-4">
                    <a href="#"
                        class="social-icon-btn rounded-circle d-flex align-items-center justify-content-center text-dark text-decoration-none bg-white shadow-sm">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#"
                        class="social-icon-btn rounded-circle d-flex align-items-center justify-content-center text-dark text-decoration-none bg-white shadow-sm">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#"
                        class="social-icon-btn rounded-circle d-flex align-items-center justify-content-center text-dark text-decoration-none bg-white shadow-sm">
                        <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="#"
                        class="social-icon-btn rounded-circle d-flex align-items-center justify-content-center text-dark text-decoration-none bg-white shadow-sm">
                        <i class="bi bi-whatsapp"></i>
                    </a>
                </div>
                <nuxt-link to="/contact-us"
                    class="btn btn-theme w-100 py-2 rounded-3 text-white fw-medium dismiss-on-click">
                    Get a Quote
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';

const templateStore = useTemplateStore()
const route = useRoute()
const btnX = ref<any>(null)

// Close menu on route change
onBeforeRouteLeave(() => {
    btnX.value?.click()
})

onMounted(() => {
    // Add click event listener to all dismiss-on-click elements
    // We use event delegation or re-query if needed, but simple querySelectorAll works for static/v-for rendered items
    // Re-attach listener logic if needed, but data-bs-dismiss should handle it mostly.
    // However, for NuxtLinks, we might need manual closing if data-bs-dismiss interferes with navigation or vice versa.
    // Here we use the native bootstrap data-bs-dismiss="offcanvas" attribute on the links themselves if possible, 
    // or simulate click on close button.

    // Using a simpler approach: Watch for route changes in a global middleware or layout is cleaner, 
    // but locally we can just ensure links close the menu.
    const links = document.querySelectorAll('.dismiss-on-click');
    links.forEach(link => {
        link.addEventListener('click', () => {
            btnX.value?.click();
        });
    });
})

</script>

<style scoped>
.offcanvas {
    width: 300px;
    /* Slightly narrower for a cleaner look */
    background-color: #fff;
}

.ls-1 {
    letter-spacing: 1px;
}

.text-theme {
    color: #20546f;
}

.btn-theme {
    background-color: #20546f;
    border-color: #20546f;
}

.btn-theme:hover {
    background-color: #1a455b;
    border-color: #1a455b;
}

/* Nav Item Styling */
.nav-link-custom {
    color: #333;
    transition: all 0.2s ease;
    cursor: pointer;
}

.nav-link-custom:hover {
    background-color: #f8f9fa;
    color: #20546f;
}

.nav-link-custom.active-link {
    background-color: #eef5f9;
    /* Light theme color bg */
    color: #20546f;
}

/* Accordion Icon Rotation */
.nav-link-custom[aria-expanded="true"] .transition-icon {
    transform: rotate(180deg);
}

.transition-icon {
    transition: transform 0.3s ease;
}

/* Submenu Styling */
.hover-bg-white:hover {
    background-color: #fff;
    color: #20546f !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

/* Social Icons */
.social-icon-btn {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-icon-btn:hover {
    transform: translateY(-3px);
    background-color: #20546f !important;
    color: #fff !important;
}

/* Scrollbar styling for list container */
.overflow-auto::-webkit-scrollbar {
    width: 4px;
}

.overflow-auto::-webkit-scrollbar-track {
    background: transparent;
}

.overflow-auto::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 4px;
}
</style>