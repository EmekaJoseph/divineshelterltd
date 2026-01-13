<template>
    <div class="bg-light">
        <div class="container py-5">
            <div class="row g-3">
                <div class="col-md-8">
                    <NuxtLink class="navbar-brand" to="/">
                        <NuxtImg src="/images/WGRC-logo.png" width="35" alt="site_logo" />
                    </NuxtLink>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ">
                            <strong>Address:</strong>
                            <div>
                                85 Great Portland Street First Floor London W1W 7LT, United Kingdom.
                            </div>
                        </li>

                        <li class="list-group-item ">
                            21 Gillabbey Terrace, Gillabbey Street, Cork,
                            T12 KPN4, Republic of Ireland
                        </li>

                        <li class="list-group-item ">
                            <strong>Contact:</strong>
                            <div> +353877123968, +442078560149 </div>
                            <div>enquiries@wgrcfp.org</div>
                        </li>
                    </ul>


                    <span class="d-flex gap-2">
                        <i class="bi bi-facebook cursor-pointer"></i>
                        <i class="bi bi-instagram cursor-pointer"></i>
                        <i class="bi bi-linkedin cursor-pointer"></i>
                    </span>

                </div>


                <div class="col-lg-4 d-none d-lg-block">
                    <!-- Some borders are removed -->
                    <ul class="list-group list-group-flush">
                        <li v-for="menu in templateStore.navBarMenus" class="list-group-item hover-tiltX">
                            <NuxtLink class=" text-decoration-none text-dark " :to="menu.routePath">
                                {{ menu.title }}
                            </NuxtLink>
                        </li>
                    </ul>

                </div>



            </div>

            <hr>

            <div class="d-lg-flex g-3 justify-content-lg-between">
                <div class="d-lg-flex gap-lg-3">
                    <div>
                        <nuxt-link class="text-decoration-none text-theme" to="/">Privacy Policy</nuxt-link>
                    </div>
                    <div>
                        <nuxt-link class="text-decoration-none text-theme" to="/">Terms of Service</nuxt-link>
                    </div>
                    <div>
                        <nuxt-link class="text-decoration-none text-theme" to="/">Cookies Settings</nuxt-link>
                    </div>
                </div>
                <div class="float-lg-end text-muted mt-3 mt-lg-0">
                    © {{ new Date().getFullYear() }} WGRCFP. All rights reserved.
                </div>
            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>

const templateStore = useTemplateStore()

</script>

<style scoped>
.list-group-item {
    background: transparent;
    border: none;
    padding-left: 0px;
}
</style>