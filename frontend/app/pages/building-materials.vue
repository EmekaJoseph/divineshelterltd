<template>
    <nuxt-layout name="landing-layout">
        <landing-page-title-image>
            Building Materials
        </landing-page-title-image>

        <div class="container mt-5">
            <div class="row g-4 justify-content-center">

                <section class="col-lg-12">
                    <p class="lead">

                        Supply and installation of security doors, wooden and panel doors, and hotel doors for
                        residential, commercial, hotel, and institutional buildings.

                        <!-- <span class="bg-warning-subtle text-theme px-1 text-nowrap">
                            Divine Shelter Construction Services Ltd.
                        </span>
                        is your reliable source for top-tier building materials. We supply genuine, high-quality
                        products
                        essential for the structural integrity and aesthetic finish of your projects. -->
                    </p>
                </section>

                <div v-for="(materials, category) in groupedMaterials" :key="category" class="col-12 mt-5">
                    <h2 class="text-theme border-bottom pb-2 mb-4">{{ category }}</h2>
                    <div class="row g-4">
                        <div v-for="material in materials" :key="material.id" class="col-md-6 col-lg-4"
                            data-aos="fade-up">
                            <div class="card shadow-sm h-100 hover-tiltY">
                                <NuxtImg format="webp" loading="lazy" class="card-img-top object-fit-cover"
                                    style="height: 200px;" :src="material.image" :alt="material.name" />
                                <div class="card-body">
                                    <h5 class="fw-bold text-theme">{{ material.name }}</h5>
                                    <p class="text-muted small mb-0">{{ material.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </nuxt-layout>
</template>

<script lang="ts" setup>
const { groupedMaterials } = useBuildingMaterials()
</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}
</style>
