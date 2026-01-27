<template>
    <div data-aos="fade-up" class="container py-5">
        <div class="text-center mb-5">
            <h6 class="text-theme fw-bold text-uppercase ls-2 mb-2">Inventory</h6>
            <h2 class="display-5 fw-bold text-dark">BUILDING MATERIALS</h2>
            <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4">
            <div v-for="material in featuredMaterials" :key="material.id" class="col-md-6 col-lg-4" data-aos="fade-up"
                :data-aos-delay="material.id * 100">
                <div class="material-card h-100 overflow-hidden border-0">
                    <div class="material-img-container position-relative">
                        <NuxtImg format="webp" loading="lazy" class="material-img w-100 h-100" :src="material.image"
                            :alt="material.name" />
                        <div class="category-badge">
                            {{ material.category }}
                        </div>
                    </div>

                    <div class="material-body p-4 text-center">
                        <h5 class="fw-bold text-dark mb-2 material-name">{{ material.name }}</h5>
                        <p class="text-muted small mb-0 line-clamp-2">
                            {{ material.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12 text-center mt-5">
                <nuxt-link to="/building-materials"
                    class="btn btn-theme px-5 py-3 rounded-pill fw-bold transition-all hover-up">
                    Browse All Materials <i class="bi bi-shop ms-2"></i>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { materials } = useBuildingMaterials()

const featuredMaterials = computed(() => {
    return materials.value.slice(0, 3)
})
</script>

<style scoped>
.ls-2 {
    letter-spacing: 2px;
}

.text-theme {
    color: #20546f;
}

.btn-theme {
    background: #20546f;
    color: #fff;
    border: none;
}

.btn-theme:hover {
    background: #184157;
    color: #fff;
    transform: translateY(-5px);
}

.title-underline {
    width: 60px;
    height: 4px;
    background: var(--bs-warning);
    border-radius: 2px;
}

.material-card {
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
}

.material-img-container {
    height: 280px;
    overflow: hidden;
}

.material-img {
    object-fit: cover;
    transition: transform 0.6s ease;
}

.category-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #20546f;
    color: #fff;
    padding: 6px 16px;
    border-radius: 30px;
    font-size: 0.75rem;
    font-weight: 600;
    box-shadow: 0 5px 15px rgba(32, 84, 111, 0.3);
}

.material-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(32, 84, 111, 0.12);
}

.material-card:hover .material-img {
    transform: scale(1.08);
}

.material-name {
    transition: color 0.3s ease;
}

.material-card:hover .material-name {
    color: #20546f !important;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.hover-up:hover {
    box-shadow: 0 10px 20px rgba(32, 84, 111, 0.2);
}

.transition-all {
    transition: all 0.3s ease;
}
</style>
