<template>
    <div class="admin-page-container">
        <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center gap-3 mb-4">
            <div>
                <h4 class="fw-bold text-dark d-lg-none mb-1">Visitor Analytics</h4>
                <p class="text-muted mb-0">Track website traffic and visitor information</p>
            </div>
        </div>

        <!-- Visitors Table -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="ps-4">IP Address</th>
                                <th>Location / Device</th>
                                <th>Browser</th>
                                <th>Platform</th>
                                <th>Time</th>
                                <th class="text-center pe-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Loading State -->
                            <tr v-if="isLoading" v-for="n in 5" :key="'loader-' + n">
                                <td colspan="6" class="py-3">
                                    <div class="skeleton-text w-75 mx-3"></div>
                                </td>
                            </tr>

                            <!-- Empty State -->
                            <tr v-else-if="visitors.length === 0">
                                <td colspan="6" class="text-center text-muted py-5">
                                    <i class="bi bi-people display-4 d-block mb-3 opacity-20"></i>
                                    <h5 class="fw-bold">No visitor data yet</h5>
                                </td>
                            </tr>

                            <!-- Visitors List -->
                            <tr v-else v-for="visitor in visitors" :key="visitor.id">
                                <td class="ps-4">
                                    <span class="fw-bold text-dark">{{ visitor.ip_address }}</span>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="bi" :class="getDeviceIcon(visitor.device_type)"></i>
                                        <span class="small">{{ visitor.city || 'Unknown' }}, {{ visitor.country || 'NG'
                                        }}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge bg-info-subtle text-info border border-info-subtle">
                                        {{ visitor.browser }}
                                    </span>
                                </td>
                                <td>
                                    <span class="small text-muted">{{ visitor.operating_system }}</span>
                                </td>
                                <td>
                                    <span class="small text-muted">{{ formatDate(visitor.created_at) }}</span>
                                </td>
                                <td class="text-center pe-4">
                                    <button @click="confirmDelete(visitor.id)"
                                        class="btn btn-sm btn-light rounded-circle shadow-sm">
                                        <i class="bi bi-trash-fill text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Pagination (If many visitors) -->
        <div v-if="totalPages > 1" class="mt-4 d-flex justify-content-center">
            <nav>
                <ul class="pagination pagination-pill">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <button class="page-link" @click="fetchPage(currentPage - 1)">Previous</button>
                    </li>
                    <li v-for="p in totalPages" :key="p" class="page-item" :class="{ active: p === currentPage }">
                        <button class="page-link" @click="fetchPage(p)">{{ p }}</button>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <button class="page-link" @click="fetchPage(currentPage + 1)">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import api from '~/api';

definePageMeta({
    layout: 'admin',
    middleware: 'auth'
});

const visitors = ref<any[]>([]);
const isLoading = ref(false);
const currentPage = ref(1);
const totalPages = ref(1);

const fetchPage = async (page: number) => {
    if (page < 1 || (totalPages.value > 0 && page > totalPages.value)) return;

    isLoading.value = true;
    try {
        const { data } = await api.getVisitors(page);
        // Based on backend paginate(50), Laravel returns data object
        visitors.value = data.data || [];
        currentPage.value = data.current_page || 1;
        totalPages.value = data.last_page || 1;
    } catch (error) {
        console.error('Failed to load visitors:', error);
    } finally {
        isLoading.value = false;
    }
};

const confirmDelete = async (id: number) => {
    if (confirm('Delete this visitor log?')) {
        try {
            await api.deleteVisitor(id);
            fetchPage(currentPage.value);
        } catch (error) {
            alert('Failed to delete');
        }
    }
};

const getDeviceIcon = (type: string) => {
    switch (type?.toLowerCase()) {
        case 'mobile': return 'bi-phone';
        case 'tablet': return 'bi-tablet';
        default: return 'bi-pc-display';
    }
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

onMounted(() => {
    fetchPage(1);
});
</script>

<style scoped>
.table th {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    padding: 15px;
}

.skeleton-text {
    height: 1rem;
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

.pagination-pill .page-link {
    border-radius: 50px;
    margin: 0 5px;
    border: none;
    color: #20546f;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.pagination-pill .active .page-link {
    background-color: #20546f;
    color: #fff;
}
</style>
