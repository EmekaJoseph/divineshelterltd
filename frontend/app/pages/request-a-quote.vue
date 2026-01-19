<template>
    <nuxt-layout name="landing-layout">
        <landing-page-title-image image="/images/quotation-image.jpg">
            Request A Quote
        </landing-page-title-image>

        <div class="container py-5">
            <section class="">
                <h3 class="text-center fw-bold">
                    Get a Quote
                </h3>
                <div class="text-muted text-center mb-4">
                    Tell us about your project needs
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6">
                        <div class="card shadow-sm border-0">
                            <div class="card-body p-4">
                                <form @submit.prevent="submitQuote">
                                    <div class="row g-3">
                                        <div class="col-md-12">
                                            <div class="form-label fw-semibold">Full Name:</div>
                                            <input type="text" v-model="form.name" class="form-control"
                                                placeholder="Enter your full name" required />
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-label fw-semibold">Email Address:</div>
                                            <input type="email" v-model="form.email" class="form-control"
                                                placeholder="name@example.com" required />
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-label fw-semibold">Phone Number:</div>
                                            <input type="tel" v-model="form.phone" class="form-control"
                                                placeholder="Your phone number" required />
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-label fw-semibold">Project Details:</div>
                                            <textarea class="form-control" v-model="form.projectDetails"
                                                placeholder="Describe your project requirements here..."
                                                style="height: 150px;" required></textarea>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-label fw-semibold">Upload Image / Plan (Optional):</div>
                                            <input type="file" class="form-control" accept="image/*,.pdf"
                                                @change="handleFileUpload" ref="fileInput" />
                                            <div class="form-text small">Supported formats: JPG, PNG, PDF. Max size:
                                                5MB.</div>
                                        </div>

                                        <div class="col-md-12 mt-4">
                                            <button type="submit" :disabled="loading"
                                                class="btn btn-theme w-100 py-2 fw-bold text-uppercase">
                                                <span v-if="loading"
                                                    class="spinner-border spinner-border-sm me-2"></span>
                                                {{ loading ? 'Submitting...' : 'Submit Request' }}
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>


            </section>
        </div>

    </nuxt-layout>
</template>

<script lang="ts" setup>
import api from '~/api/end_points/quote';
import Swal from 'sweetalert2';

const form = ref({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
    file: null as File | null
});

const loading = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
        // Check file size (5MB max)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
            Swal.fire({
                icon: 'error',
                title: 'File Too Large',
                text: 'Please upload a file smaller than 5MB.'
            });
            target.value = ''; // Clear the input
            return;
        }
        form.value.file = file;
    }
};

const submitQuote = async () => {
    loading.value = true;

    try {
        // Create FormData object
        const formData = new FormData();
        formData.append('name', form.value.name);
        formData.append('email', form.value.email);
        formData.append('phone', form.value.phone);
        formData.append('project_details', form.value.projectDetails);

        // Add file if present
        if (form.value.file) {
            formData.append('file', form.value.file);
        }

        // Submit to API
        await api.submitQuote(formData);

        // Show success message
        await Swal.fire({
            icon: 'success',
            title: 'Quote Submitted!',
            text: 'Thank you for your request. We will get back to you soon.',
            timer: 3000,
            showConfirmButton: true
        });

        // Reset form
        form.value = {
            name: '',
            email: '',
            phone: '',
            projectDetails: '',
            file: null
        };

        // Clear file input
        if (fileInput.value) {
            fileInput.value.value = '';
        }

    } catch (error: any) {
        Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: error.response?.data?.message || 'Something went wrong. Please try again.'
        });
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped></style>