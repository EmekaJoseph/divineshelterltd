<template>
    <div class="admin-page-container">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <p class="text-muted mb-0">Manage incoming quote requests from your website</p>
            </div>
        </div>

        <!-- Quotes Table -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="ps-4">Sender</th>
                                <th>Contact Info</th>
                                <th>Project Details</th>
                                <th>Attachment</th>
                                <th>Date</th>
                                <th class="text-center pe-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Loading State -->
                            <tr v-if="isLoading" v-for="n in 3" :key="'loader-' + n">
                                <td colspan="6" class="py-4">
                                    <div class="d-flex align-items-center ps-3">
                                        <div class="skeleton skeleton-avatar me-3"></div>
                                        <div class="skeleton skeleton-text w-50"></div>
                                    </div>
                                </td>
                            </tr>

                            <!-- Empty State -->
                            <tr v-else-if="quotes.length === 0">
                                <td colspan="6" class="text-center text-muted py-5">
                                    <i class="bi bi-chat-quote display-4 d-block mb-3 opacity-20"></i>
                                    <h5 class="fw-bold">No quote requests yet</h5>
                                </td>
                            </tr>

                            <!-- Quotes List -->
                            <tr v-else v-for="quote in quotes" :key="quote.id">
                                <td class="ps-4">
                                    <div class="fw-bold text-dark">{{ quote.name }}</div>
                                </td>
                                <td>
                                    <div class="small text-muted">{{ quote.email }}</div>
                                    <div class="small text-muted">{{ quote.phone }}</div>
                                </td>
                                <td>
                                    <span class="text-truncate d-inline-block" style="max-width: 250px;">
                                        {{ quote.project_details }}
                                    </span>
                                </td>
                                <td>
                                    <a v-if="quote.image_path" :href="quote.image_path" target="_blank" download
                                        class="badge bg-success-subtle text-success text-decoration-none border border-success-subtle px-2 py-1">
                                        <i class="bi bi-file-earmark-arrow-down"></i> Download File
                                    </a>
                                    <span v-else class="badge bg-light text-muted fw-normal">None</span>
                                </td>
                                <td>
                                    <span class="small text-muted">{{ formatDate(quote.created_at) }}</span>
                                </td>
                                <td class="text-center pe-4">
                                    <div class="d-flex justify-content-center gap-2">
                                        <button @click="viewQuote(quote)"
                                            class="btn btn-sm btn-light rounded-circle shadow-sm">
                                            <i class="bi bi-eye-fill text-primary"></i>
                                        </button>
                                        <button @click="confirmDelete(quote.id)"
                                            class="btn btn-sm btn-light rounded-circle shadow-sm">
                                            <i class="bi bi-trash-fill text-danger"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- View Quote Modal -->
        <div v-if="selectedQuote" class="modal-overlay" @click="selectedQuote = null">
            <div class="modal-content-custom p-4 rounded-4 shadow-lg border-0" @click.stop>
                <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                    <h5 class="fw-bold mb-0">Request Details</h5>
                    <button @click="selectedQuote = null" class="btn-close"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="row g-4">
                        <div class="col-sm-6">
                            <label class="small fw-bold text-muted text-uppercase d-block mb-1">Full Name</label>
                            <div class="p-2 bg-light rounded-2 fw-semibold">{{ selectedQuote.name }}</div>
                        </div>
                        <div class="col-sm-6">
                            <label class="small fw-bold text-muted text-uppercase d-block mb-1">Date Received</label>
                            <div class="p-2 bg-light rounded-2">{{ formatDate(selectedQuote.created_at) }}</div>
                        </div>
                        <div class="col-12">
                            <label class="small fw-bold text-muted text-uppercase d-block mb-1">Contact
                                Information</label>
                            <div class="p-2 bg-light rounded-2 d-flex gap-3">
                                <span><i class="bi bi-envelope me-1"></i> {{ selectedQuote.email }}</span>
                                <span><i class="bi bi-telephone me-1"></i> {{ selectedQuote.phone }}</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <label class="small fw-bold text-muted text-uppercase d-block mb-1">Project
                                Requirements</label>
                            <div class="p-3 bg-light rounded-3 shadow-inner whitespace-pre-wrap">{{
                                selectedQuote.project_details }}</div>
                        </div>
                        <!-- <div class="col-12" v-if="selectedQuote.image_path">
                            <label class="small fw-bold text-muted text-uppercase d-block mb-1">Uploaded
                                Attachment</label>
                            <NuxtImg :src="selectedQuote.image_path" class="img-fluid rounded-3 border"
                                style="max-height: 200px;" />
                        </div> -->
                    </div>
                </div>

                <div class="mt-5 d-flex justify-content-end">
                    <button @click="selectedQuote = null" class="btn btn-primary rounded-pill px-5">Close</button>
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

const quotes = ref<any[]>([]);
const isLoading = ref(false);
const selectedQuote = ref<any>(null);

const loadQuotes = async () => {
    isLoading.value = true;
    try {
        const { data } = await api.getQuotes();
        quotes.value = data.quotes || [];
    } catch (error) {
        console.error('Failed to load quotes:', error);
    } finally {
        isLoading.value = false;
    }
};

const viewQuote = (quote: any) => {
    selectedQuote.value = quote;
};

const confirmDelete = async (id: string) => {
    if (confirm('Permanently delete this request?')) {
        try {
            await api.deleteQuote(id);
            quotes.value = quotes.value.filter(q => q.id !== id);
        } catch (error) {
            alert('Failed to delete');
        }
    }
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

onMounted(() => {
    loadQuotes();
});
</script>

<style scoped>
.table th {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    padding-top: 15px;
    padding-bottom: 15px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.modal-content-custom {
    background: #fff;
    width: 90%;
    max-width: 700px;
    max-height: 90vh;
    overflow-y: auto;
}

.whitespace-pre-wrap {
    white-space: pre-wrap;
}

.skeleton {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 8px;
}

.skeleton-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
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
