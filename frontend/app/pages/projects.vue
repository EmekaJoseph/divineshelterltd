<template>
    <nuxt-layout name="landing-layout">
        <landing-page-title-image image="/images/service-2.webp">
            Our Latest Projects
        </landing-page-title-image>

        <div class="container mt-5">
            <div data-aos="fade-up" class="row g-3 justify-content-center">
                <div class="text-center fs-5 fw-semibold text-muted text-between-lines mb-3">
                    Recent Completed Projects 🏗️
                </div>

                <div v-for="project in projects" :key="project.id" class="col-md-6 col-lg-4">
                    <div class="card shadow hover-tiltY cursor-pointer h-100">
                        <NuxtImg format="webp" loading="lazy" class="card-img-top object-fit-cover"
                            style="height: 250px;" :src="project.image" :alt="project.title" />
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
            </div>
        </div>

    </nuxt-layout>
</template>

<script lang="ts" setup>
const { projects } = useProjects()
</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}
</style>