<template>
    <div data-aos="fade-up" class="container">
        <div class="row g-3 justify-content-lg-center">
            <div class="text-center fs-5 fw-semibold text-muted text-between-lines mb-3">
                Our Services 👷🏽‍♂️👷🏽‍♀️
            </div>


            <div v-for="service in servicesList" :key="service.id" class="col-md-6 col-lg-4">
                <div class="card shadow hover-tiltY cursor-pointer h-100">
                    <NuxtImg class="card-img-top" style="height: 200px;" :src="service.image" alt="" />
                    <div class="card-body">
                        <div class="fw-bold text-center fs-5 text-theme">
                            {{ service.title }}
                            <i class="bi bi-arrow-up-right-square-fill"></i>
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
    return items.map((x, index) => ({ title: x.title, route: x.routePath, image: `/images/service-${index}.webp`, id: index }))
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