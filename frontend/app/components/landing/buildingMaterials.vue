<template>
    <div data-aos="fade-up" class="container">
        <div class="row g-3 justify-content-lg-center">
            <div class="text-center fs-5 fw-semibold text-muted text-between-lines mb-3">
                Building Materials 🧱
            </div>

            <div v-for="material in featuredMaterials" :key="material.id" class="col-md-6 col-lg-4">
                <div class="card shadow hover-tiltY cursor-pointer h-100 position-relative border-0 overflow-hidden">
                    <div class="position-absolute top-0 end-0 m-3 z-1">
                        <span class="badge bg-white text-dark small fw-normal">
                            {{ material.category }}
                        </span>
                    </div>

                    <NuxtImg format="webp" loading="lazy" class="card-img-top object-fit-cover transition-transform"
                        style="height: 280px;" :src="material.image" :alt="material.name" />

                    <div class="card-body d-flex flex-column bg-white border-top">
                        <div class="fw-bold text-center fs-5 text-theme py-2">
                            {{ material.name }}
                        </div>
                        <div class="text-center text-muted small line-clamp-2">
                            {{ material.description }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 text-center mt-4">
                <nuxt-link to="/building-materials" class="btn btn-theme px-4 py-2">
                    View All Materials <i class="bi bi-arrow-right-circle ms-2"></i>
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
.object-fit-cover {
    object-fit: cover;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.bg-theme-subtle {
    background-color: var(--bs-primary-bg-subtle, #e7f1ff);
}
</style>
