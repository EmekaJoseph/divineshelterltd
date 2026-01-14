<template>
    <div class="bg-light">
        <div class="container py-5">
            <div class="row g-3">
                <div class="col-md-8">
                    <NuxtLink class="navbar-brand" to="/">
                        <NuxtImg src="/images/divine-shelter-logo.webp" width="70" alt="site_logo" />
                    </NuxtLink>

                    <ul class="list-group list-group-flush">

                        <strong>
                            {{ companyProfile.name }}
                        </strong>
                        <small> {{ companyProfile.slogan }}</small>
                        <li class="list-group-item ">
                            <strong>Address:</strong>
                            <div>
                                {{ companyProfile.address }}
                            </div>
                        </li>

                        <li class="list-group-item ">
                            <strong>Contact:</strong>
                            <div> {{ companyProfile.phone }}</div>
                            <div> {{ companyProfile.email }}</div>
                        </li>
                    </ul>


                    <span class="d-flex gap-2">
                        <i class="bi bi-facebook cursor-pointer"></i>
                        <i class="bi bi-instagram cursor-pointer"></i>
                        <i class="bi bi-linkedin cursor-pointer"></i>
                    </span>

                </div>


                <div class="col-lg-4 d-none d-lg-block">
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
                    © {{ new Date().getFullYear() }} DIVINE SHELTER LTD. All Rights Reserved
                </div>

                <div class="float-lg-end text-muted mt-3 mt-lg-0" style="font-size: 7px;">
                    Designed By Proffictech (08139590011)
                </div>
            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>

const templateStore = useTemplateStore()

const companyProfile = useCompanyProfileStore()

</script>

<style scoped>
.list-group-item {
    background: transparent;
    border: none;
    padding-left: 0px;
}
</style>