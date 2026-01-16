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
                                            <input type="text" class="form-control" placeholder="Enter your full name"
                                                required />
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-label fw-semibold">Email Address:</div>
                                            <input type="email" class="form-control" placeholder="name@example.com"
                                                required />
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-label fw-semibold">Phone Number:</div>
                                            <input type="tel" class="form-control" placeholder="Your phone number"
                                                required />
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-label fw-semibold">Project Details:</div>
                                            <textarea class="form-control"
                                                placeholder="Describe your project requirements here..."
                                                style="height: 150px;" required></textarea>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-label fw-semibold">Upload Image / Plan (Optional):</div>
                                            <input type="file" class="form-control" accept="image/*,.pdf" />
                                            <div class="form-text small">Supported formats: JPG, PNG, PDF. Max size:
                                                5MB.</div>
                                        </div>

                                        <div class="col-md-12 mt-4">
                                            <button type="submit"
                                                class="btn btn-theme w-100 py-2 fw-bold text-uppercase">
                                                Submit Request
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
const submitQuote = () => {
    // Placeholder for submission logic
    alert("Quote request submitted! (This is a design demo)");
}
</script>

<style scoped>
.form-control:focus {
    border-color: var(--bs-primary);
    /* Assuming theme color matches primary or customized */
    box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}
</style>