<template>
    <div class="bg-light">
        <div class="container py-5">
            <div class="row g-3">
                <div class="col-md-8">
                    <NuxtLink class="navbar-brand" to="/">
                        <NuxtImg src="/images/divine-shelter-logo.jpg" width="70" alt="site_logo" />
                    </NuxtLink>

                    <ul class="list-group list-group-flush">

                        <strong>
                            {{ companyProfile.name }}
                        </strong>
                        <small v-if="companyProfile.slogan"> {{ companyProfile.slogan }}</small>
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


                    <div class="d-flex gap-3 mt-3">
                        <a v-if="companyProfile.facebook" :href="companyProfile.facebook" target="_blank"
                            class="text-dark">
                            <i class="bi bi-facebook fs-5"></i>
                        </a>
                        <a v-if="companyProfile.instagram" :href="companyProfile.instagram" target="_blank"
                            class="text-dark">
                            <i class="bi bi-instagram fs-5"></i>
                        </a>
                        <a v-if="companyProfile.whatsapp"
                            :href="`https://wa.me/${companyProfile.whatsapp.replace('+', '')}`" target="_blank"
                            class="text-dark">
                            <i class="bi bi-whatsapp fs-5"></i>
                        </a>
                        <a v-if="companyProfile.twitter" :href="companyProfile.twitter" target="_blank"
                            class="text-dark">
                            <i class="bi bi-twitter-x fs-5"></i>
                        </a>
                        <a v-if="companyProfile.linkedin" :href="companyProfile.linkedin" target="_blank"
                            class="text-dark">
                            <i class="bi bi-linkedin fs-5"></i>
                        </a>
                    </div>

                </div>


                <div class="col-lg-4 d-none d-lg-block">
                    <ul class="list-group list-group-flush">
                        <li v-for="menu in templateStore.navBarMenus" class="list-group-item hover-tiltX">
                            <NuxtLink class=" text-decoration-none text-dark " :to="menu.routePath">
                                {{ menu.title }}
                            </NuxtLink>
                        </li>
                        <li class="list-group-item">
                            <NuxtLink class=" text-decoration-none text-dark " to="/admin">
                                Admin
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

                <div class="float-lg-end text-muted mt-3 mt-lg-0" style="font-size: 9px;">
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