<template>
    <section class="services-section py-5 position-relative overflow-hidden" data-aos="fade-up">
        <!-- Background Decor (Optional) -->
        <div class="bg-decoration"></div>

        <div class="container position-relative z-1">
            <!-- Section Header -->
            <div class="row justify-content-center text-center mb-5">
                <div class="col-lg-8">
                    <span
                        class="d-inline-block py-1 px-3 rounded-pill bg-light text-primary fw-bold text-uppercase small mb-3 letter-spacing-2">
                        What We Do
                    </span>
                    <h2 class="display-4 fw-800 text-dark mb-3">Our Premium Services</h2>
                    <p class="lead text-muted mx-auto" style="max-width: 600px;">
                        Providing top-tier real estate and construction solutions tailored to your unique needs.
                    </p>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="row g-4">
                <div v-for="(service, index) in servicesList" :key="service.id"
                    class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up"
                    :data-aos-delay="index * 100">
                    <nuxt-link :to="service.route" class="card service-card border-0 w-100 text-decoration-none">
                        <div class="card-img-wrapper overflow-hidden position-relative">
                            <NuxtImg :src="service.image" :alt="service.title"
                                class="service-img w-100 h-100 object-fit-cover" loading="lazy" />
                            <div class="overlay d-flex align-items-center justify-content-center">
                                <div class="btn btn-light rounded-circle shadow-sm p-3">
                                    <i class="bi bi-arrow-up-right fs-4 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4 bg-white position-relative">
                            <div class="service-icon mb-3 text-primary">
                                <!-- Determine icon based on title or use generic -->
                                <i class="bi bi-layers fs-2"></i>
                            </div>
                            <h4 class="card-title fw-bold text-dark mb-3 service-title">{{ service.title }}</h4>
                            <p class="card-text text-muted mb-4 line-clamp-3">
                                Experience excellence with our {{ service.title.toLowerCase() }} services. We are
                                dedicated to delivering quality results.
                            </p>
                            <div class="d-flex align-items-center text-primary fw-semibold mt-auto read-more-text">
                                <span>Learn More</span>
                                <i class="bi bi-arrow-right ms-2 transition-icon"></i>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const templateStore = useTemplateStore()

const servicesList = computed(() => {
    const services = templateStore.navBarMenus.find((x) => x.title == 'Services')
    const items = services?.dropdownItems ?? []
    return items.map((x, index) => ({
        title: x.title,
        route: x.routePath,
        image: x.image ? `${x.image}` : '/images/placeholder-service.jpg', // Fallback image
        id: index
    }))
})
</script>

<style scoped>
.letter-spacing-2 {
    letter-spacing: 2px;
}

.fw-800 {
    font-weight: 800;
}

.text-primary {
    color: #20546f !important;
    /* Divine Shelter Theme Color */
}

.bg-light {
    background-color: #f8f9fa !important;
}

/* Card Styling */
.service-card {
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow: hidden;
    backface-visibility: hidden;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(32, 84, 111, 0.15);
}

/* Image Wrapper & Overlay */
.card-img-wrapper {
    height: 240px;
    border-radius: 16px 16px 0 0;
    /* Keep top rounded, bottom flush with body */
}

.service-img {
    transition: transform 0.8s ease;
}

.service-card:hover .service-img {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(32, 84, 111, 0.4);
    opacity: 0;
    transition: all 0.3s ease;
}

.service-card:hover .overlay {
    opacity: 1;
}

/* Typography & Content */
.service-title {
    transition: color 0.3s ease;
}

.service-card:hover .service-title {
    color: #20546f;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Interactions */
.read-more-text span {
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
}

.service-card:hover .read-more-text span {
    border-bottom-color: #20546f;
}

.transition-icon {
    transition: transform 0.3s ease;
}

.service-card:hover .transition-icon {
    transform: translateX(5px);
}

/* Background Decoration (Optional subtle blob) */
.bg-decoration {
    position: absolute;
    top: -50%;
    left: -20%;
    width: 80%;
    height: 200%;
    background: radial-gradient(circle, rgba(32, 84, 111, 0.03) 0%, rgba(255, 255, 255, 0) 70%);
    z-index: 0;
    pointer-events: none;
}
</style>