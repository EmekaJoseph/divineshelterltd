<template>
    <div class="admin-page-container">
        <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center gap-3 mb-4">
            <div>
                <h4 class="fw-bold text-dark d-lg-none mb-1">Blog Management</h4>
                <p class="text-muted mb-0">Manage news updates and educational articles</p>
            </div>
            <NuxtLink to="/admin/blogs/manage" class="btn btn-theme rounded-pill px-4">
                <i class="bi bi-plus-lg me-2"></i> New Blog Post
            </NuxtLink>
        </div>

        <!-- Blogs Table -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="ps-4 py-3">Article</th>
                                <th class="py-3">Created</th>
                                <th class="text-center pe-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Loading State -->
                            <tr v-if="isLoading" v-for="n in 3" :key="'loader-' + n">
                                <td colspan="3" class="py-4">
                                    <div class="skeleton skeleton-text w-50 ms-4"></div>
                                </td>
                            </tr>

                            <!-- Empty State -->
                            <tr v-else-if="blogs.length === 0">
                                <td colspan="3" class="text-center text-muted py-5">
                                    <i class="bi bi-journal-x display-4 d-block mb-3 opacity-20"></i>
                                    <h5 class="fw-bold">No blog posts found</h5>
                                    <p class="small">Share your first news update or article today.</p>
                                </td>
                            </tr>

                            <!-- Blog List -->
                            <tr v-else v-for="blog in blogs" :key="blog.id">
                                <td class="ps-4">
                                    <div class="d-flex align-items-center py-2">
                                        <div class="blog-thumb me-3 rounded-3 shadow-sm overflow-hidden bg-light">
                                            <NuxtImg v-if="blog.image" :src="blog.image"
                                                class="w-100 h-100 object-fit-cover" />
                                            <div v-else
                                                class="h-100 w-100 d-flex align-items-center justify-content-center text-muted">
                                                <i class="bi bi-image"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="fw-bold mb-0 text-dark">{{ blog.title }}</h6>
                                            <p class="small text-muted mb-0 text-truncate" style="max-width: 300px;">{{
                                                blog.summary || 'No summary provided' }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="text-muted small">{{ formatDate(blog.created_at) }}</span>
                                </td>
                                <td class="text-center pe-4">
                                    <div class="d-flex justify-content-center gap-2">
                                        <NuxtLink :to="`/admin/blogs/manage?id=${blog.id}`"
                                            class="btn btn-sm btn-outline-primary rounded-pill px-3">
                                            <i class="bi bi-pencil me-1"></i> Edit
                                        </NuxtLink>
                                        <button @click="confirmDelete(blog)"
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

const blogs = ref<any[]>([]);
const isLoading = ref(false);

const fetchBlogs = async () => {
    isLoading.value = true;
    try {
        const { data } = await api.getBlogs();
        blogs.value = data || [];
    } catch (error) {
        console.error('Failed to load blogs:', error);
    } finally {
        isLoading.value = false;
    }
}

const confirmDelete = async (blog: any) => {
    if (confirm(`Are you sure you want to delete "${blog.title}"?`)) {
        try {
            await api.deleteBlog(blog.id);
            await fetchBlogs();
        } catch (err) {
            alert('Failed to delete blog');
        }
    }
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
};

onMounted(() => {
    fetchBlogs();
});
</script>

<style scoped>
.blog-thumb {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
}

.object-fit-cover {
    object-fit: cover;
}

.table th {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
}

.skeleton {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 8px;
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
</style>
