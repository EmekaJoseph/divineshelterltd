<template>
    <div data-aos="fade-up" class="container">
        <div class="row g-3 justify-content-lg-center">
            <div class="text-center fs-5 fw-semibold text-muted text-between-lines mb-3">
                Our Latest Projects 🏗️
            </div>

            <div v-for="project in latestProjects" :key="project.id" class="col-md-6 col-lg-4">
                <div class="card shadow hover-tiltY cursor-pointer h-100">
                    <NuxtImg format="webp" loading="lazy" class="card-img-top object-fit-cover" style="height: 250px;"
                        :src="project.image" :alt="project.title" />
                    <div class="card-body d-flex flex-column justify-content-center">
                        <div class="fw-bold text-center fs-5 text-theme">
                            {{ project.title }}
                        </div>
                        <div class="text-center text-muted small mt-1">
                            {{ project.location }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 text-center mt-4">
                <nuxt-link to="/projects" class="btn btn-theme px-4 py-2">
                    View More Projects <i class="bi bi-arrow-right-circle ms-2"></i>
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
.object-fit-cover {
    object-fit: cover;
}
</style>
