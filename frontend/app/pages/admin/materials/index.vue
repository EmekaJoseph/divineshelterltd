<template>
    <div class="admin-page-container">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <p class="text-muted mb-0">Manage building materials inventory and catalog</p>
            </div>
            <NuxtLink to="/admin/materials/manage" class="btn btn-theme rounded-pill px-4">
                <i class="bi bi-plus-lg me-2"></i> Add New Material
            </NuxtLink>
        </div>

        <!-- Materials Table -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="ps-4 py-3">Material</th>
                                <th class="py-3">Category</th>
                                <th class="py-3">Description</th>
                                <th class="text-center pe-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Loading State -->
                            <tr v-if="isLoading" v-for="n in 3" :key="'loader-' + n">
                                <td colspan="4" class="py-4">
                                    <div class="d-flex align-items-center ps-3">
                                        <div class="skeleton skeleton-img me-3"></div>
                                        <div class="skeleton skeleton-text w-50"></div>
                                    </div>
                                </td>
                            </tr>

                            <!-- Empty State -->
                            <tr v-else-if="materials.length === 0">
                                <td colspan="4" class="text-center text-muted py-5">
                                    <i class="bi bi-bricks display-4 d-block mb-3 opacity-20"></i>
                                    <h5 class="fw-bold">No materials found</h5>
                                    <p class="small">Click "Add New Material" to build your catalog.</p>
                                </td>
                            </tr>

                            <!-- Materials List -->
                            <tr v-else v-for="item in materials" :key="item.id">
                                <td class="ps-4">
                                    <div class="d-flex align-items-center py-2">
                                        <div class="material-img-thumb me-3 rounded-3 shadow-sm overflow-hidden">
                                            <NuxtImg v-if="item.image" :src="item.image"
                                                class="w-100 h-100 object-fit-cover" />
                                            <div v-else class="img-placeholder">
                                                <i class="bi bi-box"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="fw-bold mb-0 text-dark">{{ item.name }}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge bg-theme-light text-theme fw-semibold rounded-pill px-3 py-2">
                                        {{ item.category || 'Uncategorized' }}
                                    </span>
                                </td>
                                <td>
                                    <span class="text-muted small text-truncate d-inline-block"
                                        style="max-width: 250px;">
                                        {{ item.description }}
                                    </span>
                                </td>
                                <td class="text-center pe-4">
                                    <div class="d-flex justify-content-center gap-2">
                                        <NuxtLink :to="`/admin/materials/manage?id=${item.id}`"
                                            class="btn btn-sm btn-outline-primary rounded-pill px-3">
                                            <i class="bi bi-pencil me-1"></i> Edit
                                        </NuxtLink>
                                        <button @click="confirmDelete(item)"
                                            class="btn btn-sm btn-outline-danger rounded-pill px-3">
                                            <i class="bi bi-trash me-1"></i> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import api from '~/api';

definePageMeta({
    layout: 'admin',
    middleware: 'auth'
});

const { materials, isLoading, fetchMaterials } = useBuildingMaterials();

const confirmDelete = async (item: any) => {
    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
        try {
            await api.deleteBuildingMaterial(item.id);
            await fetchMaterials();
        } catch (err: any) {
            alert('Failed to delete: ' + (err.response?.data?.message || err.message));
        }
    }
};

onMounted(() => {
    fetchMaterials();
});
</script>

<style scoped>
.material-img-thumb {
    width: 50px;
    height: 50px;
    background-color: #f1f5f9;
    flex-shrink: 0;
}

.img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    font-size: 1.1rem;
}

.bg-theme-light {
    background-color: rgba(32, 84, 111, 0.08);
}

.text-theme {
    color: #20546f;
}

.skeleton {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 8px;
}

.skeleton-img {
    width: 50px;
    height: 50px;
}

.skeleton-text {
    height: 1.25rem;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}

.table th {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
}

.object-fit-cover {
    object-fit: cover;
}
</style>
