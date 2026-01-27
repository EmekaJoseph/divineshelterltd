<template>
    <div class="container py-5" data-aos="fade-up">
        <div class="text-center mb-5">
            <h6 class="text-theme fw-bold text-uppercase ls-2 mb-2">Expertise</h6>
            <h2 class="display-5 fw-bold text-dark">OUR SERVICES</h2>
            <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4">
            <div v-for="service in servicesList" :key="service.id" class="col-md-6 col-lg-4" data-aos="zoom-in"
                :data-aos-delay="service.id * 100">
                <nuxt-link :to="service.route" class="text-decoration-none">
                    <div class="service-card h-100 overflow-hidden">
                        <div class="image-container position-relative">
                            <NuxtImg :src="service.image" class="service-img w-100" />
                            <div class="image-overlay d-flex align-items-center justify-content-center">
                                <i class="bi bi-plus-circle fs-1 text-white transition-all"></i>
                            </div>
                        </div>
                        <div class="card-content p-4 text-center">
                            <h5 class="fw-bold mb-0 text-dark transition-all service-title">{{ service.title }}</h5>
                            <div class="service-arrow mt-3">
                                <i class="bi bi-arrow-right fs-4 text-theme"></i>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const templateStore = useTemplateStore()

const servicesList = computed(() => {
    const services = templateStore.navBarMenus.find((x) => x.title == 'Services')
    const items = services?.dropdownItems ?? []
    return items.map((x, index) => ({ title: x.title, route: x.routePath, image: `${x.image}`, id: index }))
})
</script>

<style scoped>
.ls-2 {
    letter-spacing: 2px;
}

.text-theme {
    color: #20546f;
}

.title-underline {
    width: 60px;
    height: 4px;
    background: var(--bs-warning);
    border-radius: 2px;
}

.service-card {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.03);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.image-container {
    height: 240px;
    overflow: hidden;
}

.service-img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.image-overlay {
    position: absolute;
    inset: 0;
    background: rgba(32, 84, 111, 0.7);
    opacity: 0;
    transition: all 0.4s ease;
}

.image-overlay i {
    transform: scale(0.5);
    opacity: 0;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(32, 84, 111, 0.15);
    border-color: rgba(32, 84, 111, 0.2);
}

.service-card:hover .service-img {
    transform: scale(1.1);
}

.service-card:hover .image-overlay {
    opacity: 1;
}

.service-card:hover .image-overlay i {
    opacity: 1;
    transform: scale(1);
}

.service-card:hover .service-title {
    color: #20546f !important;
}

.service-arrow {
    opacity: 0.3;
    transition: all 0.3s ease;
}

.service-card:hover .service-arrow {
    opacity: 1;
    transform: translateX(10px);
}

.transition-all {
    transition: all 0.3s ease;
}
</style>