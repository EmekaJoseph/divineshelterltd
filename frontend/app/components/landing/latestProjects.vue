<template>
    <div data-aos="fade-up" class="container py-5">
        <div class="text-center mb-5">
            <h6 class="text-theme fw-bold text-uppercase ls-2 mb-2">Portfolio</h6>
            <h2 class="display-5 fw-bold text-dark">LATEST PROJECTS</h2>
            <div class="title-underline mx-auto"></div>
            <p class="text-muted mt-3">
                Our portfolio reflects both our construction expertise and our role as a trusted supplier of quality
                building materials.
            </p>
        </div>

        <div class="row g-4">
            <div v-for="project in latestProjects" :key="project.id" class="col-md-6 col-lg-4" data-aos="fade-up"
                :data-aos-delay="project.id * 100">
                <div class="project-card h-100 overflow-hidden">
                    <div class="project-img-container">
                        <NuxtImg format="webp" loading="lazy" class="project-img w-100 h-100" :src="project.image"
                            :alt="project.title" />
                        <div class="project-overlay">
                            <span class="location-tag px-3 py-1 rounded-pill">
                                <i class="bi bi-geo-alt-fill me-1"></i> {{ project.location }}
                            </span>
                        </div>
                    </div>
                    <div class="project-info p-4 text-center">
                        <h5 class="fw-bold text-dark mb-0">{{ project.title }}</h5>
                    </div>
                </div>
            </div>

            <div class="col-12 text-center mt-5">
                <nuxt-link to="/projects" class="btn btn-theme px-5 py-3 rounded-pill fw-bold transition-all hover-up">
                    Explore Full Portfolio <i class="bi bi-arrow-right ms-2 font-bold"></i>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { projects } = useProjects()

const latestProjects = computed(() => {
    return projects.value.slice(0, 3)
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

.project-card {
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.02);
    transition: all 0.4s ease;
}

.project-img-container {
    height: 300px;
    position: relative;
    overflow: hidden;
}

.project-img {
    object-fit: cover;
    transition: transform 0.8s ease;
}

.project-overlay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 2;
}

.location-tag {
    background: rgba(255, 255, 255, 0.9);
    color: #20546f;
    font-size: 0.8rem;
    font-weight: 600;
    backdrop-filter: blur(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(32, 84, 111, 0.1);
}

.project-card:hover .project-img {
    transform: scale(1.1);
}

.hover-up:hover {
    box-shadow: 0 10px 20px rgba(32, 84, 111, 0.2);
}

.transition-all {
    transition: all 0.3s ease;
}
</style>
