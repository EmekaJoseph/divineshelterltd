<template>
    <div class="admin-page-container">
        <div class="mb-4">
            <NuxtLink to="/admin/blogs" class="btn btn-link text-decoration-none p-0 text-muted mb-2">
                <i class="bi bi-arrow-left me-1"></i> Back to Blogs
            </NuxtLink>
            <h4 class="fw-bold text-dark">{{ isEdit ? 'Edit Blog Post' : 'New Blog Post' }}</h4>
        </div>

        <div class="row">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-body p-4">
                        <form @submit.prevent="saveBlog">
                            <div class="row g-4">
                                <!-- Title -->
                                <div class="col-12">
                                    <label class="form-label fw-bold">Title</label>
                                    <input v-model="form.title" type="text"
                                        class="form-control rounded-3 p-3 shadow-none border-light bg-light"
                                        placeholder="Engaging headline..." required>
                                </div>

                                <!-- Content -->
                                <div class="col-12">
                                    <label class="form-label fw-bold">Post Content</label>
                                    <textarea v-model="form.content" rows="10"
                                        class="form-control rounded-3 p-3 shadow-none border-light bg-light"
                                        placeholder="Write your article here..." required></textarea>
                                </div>

                                <!-- Image Upload -->
                                <div class="col-12">
                                    <label class="form-label fw-bold">Featured Image</label>
                                    <div class="upload-zone rounded-4 p-4 text-center border-2 border-dashed position-relative"
                                        :class="{ 'has-file': imagePreview }">
                                        <input type="file"
                                            class="position-absolute inset-0 opacity-0 cursor-pointer w-100 h-100"
                                            accept="image/*" @change="handleImageChange">

                                        <div v-if="!imagePreview" class="py-3">
                                            <i class="bi bi-image display-4 text-primary opacity-50 mb-3 d-block"></i>
                                            <p class="mb-1 fw-bold">Choose a featured image</p>
                                        </div>

                                        <div v-else class="image-preview-container position-relative">
                                            <img :src="imagePreview" class="img-fluid rounded-3 shadow-sm border"
                                                style="max-height: 300px;">
                                            <button @click.prevent="clearImage"
                                                class="btn btn-danger btn-sm rounded-circle position-absolute top-0 end-0 m-2">
                                                <i class="bi bi-x"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Actions -->
                                <div class="col-12 mt-5">
                                    <hr class="opacity-10 mb-4">
                                    <div class="d-flex gap-3 justify-content-end">
                                        <NuxtLink to="/admin/blogs"
                                            class="btn btn-light rounded-pill px-4 py-2 border fw-bold text-muted transition-all">
                                            Cancel
                                        </NuxtLink>
                                        <button type="submit"
                                            class="btn btn-theme rounded-pill px-5 py-2 fw-bold shadow-sm transition-all"
                                            :disabled="isSaving">
                                            <span v-if="isSaving" class="spinner-border spinner-border-sm me-2"></span>
                                            {{ isEdit ? 'Update Post' : 'Publish Post' }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
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

const route = useRoute();
const router = useRouter();
const isEdit = computed(() => !!route.query.id);
const isSaving = ref(false);

const form = ref({
    title: '',
    content: '',
    image: null as File | null
});

const imagePreview = ref('');

const handleImageChange = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        form.value.image = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
};

const clearImage = () => {
    form.value.image = null;
    imagePreview.value = '';
};

const loadBlog = async () => {
    if (!isEdit.value) return;
    try {
        const { data } = await api.getBlog(route.query.id as string);
        form.value.title = data.title;
        form.value.content = data.content;
        imagePreview.value = data.image; // URL from server
    } catch (err) {
        console.error('Failed to load blog:', err);
    }
};

const saveBlog = async () => {
    isSaving.value = true;
    try {
        const formData = new FormData();
        formData.append('title', form.value.title);
        formData.append('content', form.value.content);
        if (form.value.image) {
            formData.append('image', form.value.image);
        }

        if (isEdit.value) {
            await api.updateBlog(route.query.id as string, formData);
        } else {
            await api.createBlog(formData);
        }

        router.push('/admin/blogs');
    } catch (err: any) {
        alert('Failed to save: ' + (err.response?.data?.message || err.message));
    } finally {
        isSaving.value = false;
    }
};

onMounted(() => {
    loadBlog();
});
</script>

<style scoped>
.form-control:focus {
    border-color: #20546f;
    background-color: #fff;
}

.upload-zone {
    border-color: #e2e8f0;
    transition: all 0.3s ease;
    background: #f8fafc;
}

.upload-zone:hover {
    border-color: #20546f;
    background: #f1f5f9;
}

.upload-zone.has-file {
    border-style: solid;
    border-color: #20546f;
}

.cursor-pointer {
    cursor: pointer;
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>
