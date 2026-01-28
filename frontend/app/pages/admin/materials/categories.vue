<template>
    <div class="admin-page-container">
        <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center gap-3 mb-4">
            <div>
                <h4 class="fw-bold text-dark d-lg-none mb-1">Categories</h4>
                <NuxtLink to="/admin/materials" class="text-decoration-none small text-theme">
                    <i class="bi bi-arrow-left"></i> Back to Materials
                </NuxtLink>
                <p class="text-muted mb-0">Organize building materials into meaningful groups</p>
            </div>
            <button @click="openModal()" class="btn btn-theme rounded-pill px-4">
                <i class="bi bi-plus-lg me-2"></i> Add Category
            </button>
        </div>

        <!-- Category Grid -->
        <div class="row g-4">
            <div v-if="isLoading" v-for="n in 6" :key="'loader-' + n" class="col-md-6 col-lg-4">
                <div class="skeleton-card rounded-4 p-4">
                    <div class="skeleton-text w-75 mb-3"></div>
                    <div class="skeleton-text w-50"></div>
                </div>
            </div>

            <div v-else-if="categories.length === 0" class="col-12 text-center py-5">
                <i class="bi bi-tags display-3 text-light-emphasis"></i>
                <h5 class="mt-3 fw-bold text-muted">No categories created yet</h5>
            </div>

            <div v-for="cat in categories" :key="cat.id" class="col-md-6 col-lg-4">
                <div class="category-card rounded-4 p-4 shadow-sm border-0 position-relative overflow-hidden">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="cat-icon-bg shadow-sm">
                            <i class="bi bi-tag text-primary"></i>
                        </div>
                        <div class="d-flex gap-2">
                            <button @click="openModal(cat)" class="btn btn-sm btn-light rounded-circle shadow-sm">
                                <i class="bi bi-pencil text-muted"></i>
                            </button>
                            <button @click="confirmDelete(cat)" class="btn btn-sm btn-light rounded-circle shadow-sm">
                                <i class="bi bi-trash text-danger"></i>
                            </button>
                        </div>
                    </div>
                    <h5 class="fw-bold mb-1 text-dark">{{ cat.name }}</h5>
                    <p class="small text-muted mb-0">Slug: <span class="badge bg-light text-muted fw-normal">{{ cat.slug
                            }}</span></p>
                </div>
            </div>
        </div>

        <!-- Category Modal -->
        <div v-if="showModal" class="modal-overlay" @click="showModal = false">
            <div class="modal-content-custom p-4 rounded-4 shadow-lg border-0" @click.stop>
                <div class="d-flex justify-content-between mb-4">
                    <h5 class="fw-bold mb-0">{{ activeCat ? 'Edit Category' : 'New Category' }}</h5>
                    <button @click="showModal = false" class="btn-close"></button>
                </div>

                <form @submit.prevent="saveCategory">
                    <div class="mb-4">
                        <label class="form-label small fw-bold text-muted text-uppercase mb-2">Category Name</label>
                        <input v-model="modalForm.name" type="text"
                            class="form-control form-control-lg rounded-3 border-light shadow-none bg-light"
                            placeholder="e.g., Security Doors" required>
                    </div>

                    <div class="d-flex gap-2 justify-content-end">
                        <button type="button" @click="showModal = false"
                            class="btn btn-light rounded-pill px-4">Cancel</button>
                        <button type="submit" class="btn btn-theme rounded-pill px-4" :disabled="isSaving">
                            <span v-if="isSaving" class="spinner-border spinner-border-sm me-2"></span>
                            {{ activeCat ? 'Update' : 'Create' }}
                        </button>
                    </div>
                </form>
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

const { categories, isLoading, fetchCategories } = useBuildingMaterials();
const showModal = ref(false);
const isSaving = ref(false);
const activeCat = ref<any>(null);
const modalForm = ref({ name: '' });

const openModal = (cat: any = null) => {
    activeCat.value = cat;
    modalForm.value.name = cat ? cat.name : '';
    showModal.value = true;
};

const saveCategory = async () => {
    isSaving.value = true;
    try {
        if (activeCat.value) {
            await api.updateCategory(activeCat.value.id, { name: modalForm.value.name });
        } else {
            await api.createCategory({ name: modalForm.value.name });
        }
        await fetchCategories();
        showModal.value = false;
    } catch (err: any) {
        alert('Failed to save category: ' + (err.response?.data?.message || err.message));
    } finally {
        isSaving.value = false;
    }
};

const confirmDelete = async (cat: any) => {
    if (confirm(`Delete "${cat.name}"? This might affect materials linked to it.`)) {
        try {
            await api.deleteCategory(cat.id);
            await fetchCategories();
        } catch (err: any) {
            alert('Delete failed: ' + (err.response?.data?.message || err.message));
        }
    }
};
</script>

<style scoped>
.category-card {
    background: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08) !important;
}

.cat-icon-bg {
    width: 48px;
    height: 48px;
    background: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
}

.skeleton-card {
    background: #fff;
    height: 150px;
}

.skeleton-text {
    height: 1rem;
    background: #f1f5f9;
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.modal-content-custom {
    background: #fff;
    width: 90%;
    max-width: 450px;
}

.form-control:focus {
    background-color: #fff;
    border-color: #20546f;
}
</style>
