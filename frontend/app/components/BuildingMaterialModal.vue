<template>
    <div class="modal fade" id="buildingMaterialModal" tabindex="-1" aria-labelledby="buildingMaterialModalLabel"
        aria-hidden="true" ref="modalElement">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title fw-bold text-theme" id="buildingMaterialModalLabel">{{ material?.name }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <NuxtImg v-if="material?.image" format="webp" loading="lazy"
                                class="img-fluid rounded shadow-sm w-100 object-fit-cover" style="max-height: 400px;"
                                :src="material.image" :alt="material.name" />
                        </div>
                        <div class="col-md-6">
                            <h6 class="fw-bold mb-3 text-muted">Description</h6>
                            <p class="lead fs-6">{{ material?.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
    material: any
}>()

// We don't need much logic here as the parent controls the data
// and Bootstrap handles the show/hide via data attributes or JS.
// However, if we wanted to control it programmatically we could expose methods.

</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}
</style>
