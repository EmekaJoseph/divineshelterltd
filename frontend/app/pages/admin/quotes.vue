<template>
    <div>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <p class="text-muted mb-0">Manage quote requests from customers</p>
            </div>
        </div>

        <!-- Quotes Table -->
        <div class="card border-0 shadow-sm">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Project Details</th>
                                <th>Attachment</th>
                                <th>Date</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="quotes.length === 0">
                                <td colspan="7" class="text-center text-muted py-5">
                                    <i class="bi bi-inbox fs-1 d-block mb-2"></i>
                                    No quote requests yet
                                </td>
                            </tr>
                            <tr v-for="quote in quotes" :key="quote.id">
                                <td class="fw-semibold">{{ quote.name }}</td>
                                <td>{{ quote.email }}</td>
                                <td>{{ quote.phone }}</td>
                                <td>
                                    <span class="text-truncate d-inline-block" style="max-width: 200px;">
                                        {{ quote.project_details }}
                                    </span>
                                </td>
                                <td>
                                    <span v-if="quote.image_path" class="badge bg-success">
                                        <i class="bi bi-paperclip"></i> Yes
                                    </span>
                                    <span v-else class="badge bg-secondary">No</span>
                                </td>
                                <td class="text-muted small">{{ formatDate(quote.created_at) }}</td>
                                <td class="text-center">
                                    <button @click="viewQuote(quote)" class="btn btn-sm btn-outline-primary me-2">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                    <button @click="deleteQuote(quote.id)" class="btn btn-sm btn-outline-danger">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- View Quote Modal -->
        <div v-if="selectedQuote" class="modal-overlay" @click="selectedQuote = null">
            <div class="modal-content" @click.stop>
                <div class="modal-header">
                    <h5 class="modal-title">Quote Request Details</h5>
                    <button @click="selectedQuote = null" class="btn-close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Name</label>
                            <p>{{ selectedQuote.name }}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Email</label>
                            <p>{{ selectedQuote.email }}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Phone</label>
                            <p>{{ selectedQuote.phone }}</p>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Submitted</label>
                            <p>{{ formatDate(selectedQuote.created_at) }}</p>
                        </div>
                        <div class="col-12">
                            <label class="form-label fw-semibold">Project Details</label>
                            <p class="bg-light p-3 rounded">{{ selectedQuote.project_details }}</p>
                        </div>
                        <div class="col-12" v-if="selectedQuote.image_path">
                            <label class="form-label fw-semibold">Attachment</label>
                            <p><i class="bi bi-paperclip"></i> File uploaded</p>
                        </div>
                    </div>
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
const selectedQuote = ref<any>(null);

const loadQuotes = async () => {
    try {
        const { data } = await api.getQuotes();
        quotes.value = data.quotes || [];
    } catch (error) {
        console.error('Failed to load quotes:', error);
    }
};

const viewQuote = (quote: any) => {
    selectedQuote.value = quote;
};

const deleteQuote = async (id: number) => {
    if (!confirm('Are you sure you want to delete this quote request?')) return;

    try {
        await api.deleteQuote(id);
        quotes.value = quotes.value.filter(q => q.id !== id);
        alert('Quote deleted successfully');
    } catch (error) {
        console.error('Failed to delete quote:', error);
        alert('Failed to delete quote');
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
.card {
    border-radius: 16px;
}

.table th {
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1050;
}

.modal-content {
    background: #fff;
    border-radius: 16px;
    max-width: 600px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-title {
    font-weight: 700;
    margin: 0;
}

.btn-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #64748b;
}

.modal-body {
    padding: 24px;
}
</style>
