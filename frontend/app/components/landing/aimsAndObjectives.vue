<template>
    <div class="container py-5" data-aos="fade-up">
        <div class="row g-5 align-items-center">
            <!-- Left Side: Vision/Aim Card -->
            <div class="col-lg-6" data-aos="fade-right">
                <div class="vision-card p-5 h-100 position-relative">
                    <div class="vision-icon-overlay">
                        <i class="bi bi-bullseye"></i>
                    </div>
                    <div class="content-wrapper position-relative">
                        <h3 class="fw-bold mb-4 display-6">Our Vision & Aim</h3>
                        <p class="lead text-muted mb-4">
                            To provide high-quality construction, building materials, and real estate solutions
                            that deliver long-term value, structural reliability, and cost efficiency for our clients.
                        </p>
                        <p class="text-secondary">
                            We seek to become a trusted partner in the development of residential, commercial, and
                            public
                            infrastructure by combining technical expertise and modern building systems.
                        </p>
                        <nuxt-link to="/about-us" class="btn btn-outline-theme mt-3 px-4 rounded-pill">
                            Discover More <i class="bi bi-arrow-right ms-2"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <!-- Right Side: Objectives List -->
            <div class="col-lg-6" data-aos="fade-left">
                <div class="objectives-section ps-lg-4">
                    <h3 class="fw-bold mb-5">Strategic Objectives</h3>

                    <div class="objective-item d-flex mb-4">
                        <div class="obj-icon me-4">
                            <i class="bi bi-check-circle-fill text-warning"></i>
                        </div>
                        <div>
                            <h5 class="fw-bold mb-1">Quality Control</h5>
                            <p class="text-muted small mb-0">Delivering projects through sound planning, supervision,
                                and quality control from foundation to handover.</p>
                        </div>
                    </div>

                    <div class="objective-item d-flex mb-4">
                        <div class="obj-icon me-4">
                            <i class="bi bi-check-circle-fill text-warning"></i>
                        </div>
                        <div>
                            <h5 class="fw-bold mb-1">Sustainable Growth</h5>
                            <p class="text-muted small mb-0">Contributing to sustainable housing and infrastructure
                                development across Nigeria with eco-friendly solutions.</p>
                        </div>
                    </div>

                    <div class="objective-item d-flex mb-4">
                        <div class="obj-icon me-4">
                            <i class="bi bi-check-circle-fill text-warning"></i>
                        </div>
                        <div>
                            <h5 class="fw-bold mb-1">Interlocking Brick Systems</h5>
                            <p class="text-muted small mb-0">Promoting Hydraform Bricks as cost-effective and
                                environmentally responsible construction solutions.</p>
                        </div>
                    </div>

                    <div class="objective-item d-flex">
                        <div class="obj-icon me-4">
                            <i class="bi bi-check-circle-fill text-warning"></i>
                        </div>
                        <div>
                            <h5 class="fw-bold mb-1">Diverse Construction</h5>
                            <p class="text-muted small mb-0">Designing and constructing durable residential, commercial
                                and institutional buildings that meet global standards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// No extra logic needed for this structure currently
</script>

<style scoped>
.vision-card {
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.02);
}

.vision-icon-overlay {
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 150px;
    color: rgba(var(--bs-warning-rgb), 0.05);
    transform: rotate(-15deg);
    pointer-events: none;
}

.obj-icon i {
    font-size: 1.5rem;
}

.btn-outline-theme {
    border-color: #20546f;
    color: #20546f;
    transition: all 0.3s;
}

.btn-outline-theme:hover {
    background: #20546f;
    color: #fff;
    transform: translateX(5px);
}

.objective-item {
    padding: 15px;
    border-radius: 12px;
    transition: background 0.3s;
}

.objective-item:hover {
    background: rgba(var(--bs-warning-rgb), 0.05);
}

.display-6 {
    color: #20546f;
}

.text-theme {
    color: #20546f;
}
</style>