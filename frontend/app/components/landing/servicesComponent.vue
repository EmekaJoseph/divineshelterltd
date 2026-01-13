<template>
    <div data-aos="fade-up" class="container">
        <div class="row g-3 justify-content-lg-center align-items-center">
            <div class="text-center fs-5 fw-semibold text-theme text-between-lines mb-3">
                Our Services 👷🏽‍♂️👷🏽‍♀️
            </div>
            <div v-for="service in servicesList" class="col-md-6 col-lg-4">
                <div class="card shadow hover-tiltY cursor-pointer">
                    <img class="card-img-top" :src="service.image" alt="">
                    <div class="card-body py-4">
                        <div class="fw-bold text-center">
                            {{ service.title }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>

const templateStore = useTemplateStore()

const servicesList = computed(() => {
    const services = templateStore.navBarMenus.find((x) => x.title == 'Services')
    const items = services?.dropdownItems ?? []
    return items.map((x) => ({ title: x.title, route: x.routePath, image: '/images/hero1.webp' }))
})


</script>


<style scoped>
.info-text {
    font-size: 25px;
    font-weight: 600;
    line-height: 1.3;
}


@media (max-width: 767px) {

    .info-text {
        font-size: 20px;
    }


}
</style>