<template>
    <div class="admin-page-container">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <p class="text-muted mb-0">Manage your construction project portfolio</p>
            </div>
            <NuxtLink to="/admin/projects/manage" class="btn btn-theme rounded-pill px-4">
                <i class="bi bi-plus-lg me-2"></i> Add New Project
            </NuxtLink>
        </div>

        <!-- Error State -->
        <div v-if="error" class="alert alert-danger rounded-4 border-0 shadow-sm d-flex align-items-center mb-4">
            <i class="bi bi-exclamation-triangle-fill fs-4 me-3"></i>
            <div>
                <strong>Error:</strong> {{ error }}
                <button @click="fetchProjects" class="btn btn-sm btn-link text-danger p-0 ms-2 fw-bold">Try
                    Again</button>
            </div>
        </div>

        <!-- Projects Table -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="ps-4 py-3">Project</th>
                                <th class="py-3">Location</th>
                                <th class="py-3">Created</th>
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
                            <tr v-else-if="projects.length === 0">
                                <td colspan="4" class="text-center text-muted py-5">
                                    <div class="empty-state-icon mb-3">
                                        <i class="bi bi-folder-x display-4"></i>
                                    </div>
                                    <h5 class="fw-bold">No projects found</h5>
                                    <p class="small">Start by clicking "Add New Project" to populate your portfolio.</p>
                                </td>
                            </tr>

                            <!-- Project List -->
                            <tr v-else v-for="project in projects" :key="project.id">
                                <td class="ps-4">
                                    <div class="d-flex align-items-center py-2">
                                        <div class="project-img-thumb me-3 rounded-3 shadow-sm overflow-hidden">
                                            <NuxtImg v-if="project.image" :src="project.image"
                                                class="w-100 h-100 object-fit-cover" />
                                            <div v-else class="img-placeholder">
                                                <i class="bi bi-image"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="fw-bold mb-0 text-dark">{{ project.title }}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="text-muted"><i class="bi bi-geo-alt me-1"></i> {{ project.location
                                    }}</span>
                                </td>
                                <td>
                                    <span class="text-muted small">{{ formatDate(project.created_at) }}</span>
                                </td>
                                <td class="text-center pe-4">
                                    <div class="d-flex justify-content-center gap-2">
                                        <NuxtLink :to="`/admin/projects/manage?id=${project.id}`"
                                            class="btn btn-sm btn-outline-primary rounded-pill px-3">
                                            <i class="bi bi-pencil me-1"></i> Edit
                                        </NuxtLink>
                                        <button @click="confirmDelete(project)"
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

const { projects, isLoading, fetchProjects } = useProjects();
const error = ref('');

const formatDate = (dateString: string) => {
    if (!dateString) return '--';
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};

const confirmDelete = async (project: any) => {
    if (confirm(`Are you sure you want to delete "${project.title}"?`)) {
        try {
            await api.deleteProject(project.id);
            await fetchProjects();
            // Success handled by hook or local update
        } catch (err: any) {
            alert('Failed to delete project: ' + (err.response?.data?.message || err.message));
        }
    }
};

onMounted(() => {
    fetchProjects();
});
</script>

<style scoped>
.project-img-thumb {
    width: 60px;
    height: 60px;
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
    font-size: 1.25rem;
}

.skeleton {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 8px;
}

.skeleton-img {
    width: 60px;
    height: 60px;
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
    border-top: none;
}

.empty-state-icon {
    color: #cbd5e1;
}

.object-fit-cover {
    object-fit: cover;
}
</style>
