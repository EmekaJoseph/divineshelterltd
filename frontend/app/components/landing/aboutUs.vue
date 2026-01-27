<template>
    <div class="container py-5" data-aos="fade-up">
        <div class="row g-5 align-items-center">
            <!-- Image Side with Overlap Effect -->
            <div class="col-lg-6 position-relative d-none d-lg-block" data-aos="fade-right">
                <div class="image-wrapper p-3">
                    <NuxtImg src="/images/about-us-brief.jpg" class="img-fluid rounded-4 shadow-lg main-img"
                        alt="Divine Shelter Construction" />
                    <div class="experience-badge d-none d-md-flex">
                        <span class="fs-1 fw-bold">10+</span>
                        <span class="ms-2 small text-uppercase fw-semibold">Years of<br>Excellence</span>
                    </div>
                </div>
            </div>

            <!-- Content Side -->
            <div class="col-lg-6" data-aos="fade-left">
                <div class="ps-lg-4">
                    <h6 class="text-theme fw-bold text-uppercase ls-2 mb-3">Who We Are</h6>
                    <h2 class="display-6 fw-bold text-dark mb-4">Leading the Way in Durable & Cost-Efficient
                        Construction</h2>

                    <p class="text-muted mb-4 lead">
                        <span class="fw-bold text-dark">Divine Shelter Construction Services Ltd</span> is a Nigerian
                        firm dedicated to delivering
                        building solutions that stand the test of time. We bridge the gap between traditional practice
                        and
                        alternative technology.
                    </p>

                    <div class="features-list mb-5">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center mb-2">
                                    <i class="bi bi-gear-fill text-theme me-2 fs-5"></i>
                                    <span class="fw-semibold">Hydraform Systems</span>
                                </div>
                                <p class="small text-muted">Specialists in interlocking brick technology for smarter
                                    builds.</p>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center mb-2">
                                    <i class="bi bi-house-door-fill text-theme me-2 fs-5"></i>
                                    <span class="fw-semibold">Diverse Projects</span>
                                </div>
                                <p class="small text-muted">From residential estates to major commercial markets.</p>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-4">
                        <nuxt-link to="/about-us"
                            class="btn btn-theme px-4 py-2 rounded-pill fw-bold transition-all hover-up">
                            Learn Our Story
                        </nuxt-link>
                        <nuxt-link to="/projects"
                            class="text-dark fw-bold text-decoration-none d-flex align-items-center arrow-link">
                            View Our Work <i class="bi bi-arrow-right ms-2 transition-all"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// No data fetching needed, content is static and updated
</script>

<style scoped>
.ls-2 {
    letter-spacing: 2px;
}

.text-theme {
    color: #20546f;
}

.btn-theme {
    background: #20546f;
    color: #fff;
    border: none;
}

.btn-theme:hover {
    background: #184157;
    color: #fff;
    transform: translateY(-3px);
}

.image-wrapper {
    position: relative;
    z-index: 1;
}

.main-img {
    transition: transform 0.5s ease;
}

.image-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 80%;
    background: rgba(var(--bs-warning-rgb), 0.1);
    border-radius: 24px;
    z-index: -1;
    transform: translate(-20px, -20px);
}

.experience-badge {
    position: absolute;
    bottom: 20px;
    right: -10px;
    background: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    align-items: center;
    border-bottom: 5px solid var(--bs-warning transition-all);
}

.arrow-link i {
    transition: transform 0.3s ease;
}

.arrow-link:hover i {
    transform: translateX(8px);
}

.transition-all {
    transition: all 0.3s ease;
}

.hover-up:hover {
    box-shadow: 0 10px 20px rgba(32, 84, 111, 0.2);
}

@media (max-width: 991px) {
    .image-wrapper::before {
        display: none;
    }
}
</style>