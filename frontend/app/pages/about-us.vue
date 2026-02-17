<template>
    <nuxt-layout name="landing-layout">
        <landing-page-title-image>
            About Us
        </landing-page-title-image>

        <div class="container py-5 overflow-hidden">
            <!-- Intro Section -->
            <div class="row g-5 align-items-center mb-5">
                <div class="col-lg-6" data-aos="fade-right">
                    <h6 class="text-theme fw-bold text-uppercase ls-2 mb-3">Who We Are</h6>
                    <h2 class="display-5 fw-bold text-dark mb-4">Building Durable & Cost-Efficient Solutions</h2>
                    <p class="text-muted lead mb-4">
                        <span class="fw-bold text-theme">Divine Shelter Construction Services Ltd</span>
                        is a Nigerian construction company focused on delivering durable, practical, and cost-efficient
                        building solutions.
                    </p>
                    <p class="text-muted mb-3">
                        Our work combines sound construction practice with alternative building technology suited to the
                        Nigerian environment.
                        We specialize in building construction, Hydraform interlocking brick systems, and the supply of
                        quality building materials.
                    </p>
                    <p class="text-muted">
                        Beyond construction, we operate a dedicated doors and building materials supply arm, supported
                        by a physical warehouse and retail outlet in Epe, Lagos State.
                    </p>
                </div>
                <div class="col-lg-6 position-relative" data-aos="fade-left">
                    <div class="image-wrapper">
                        <NuxtImg src="/images/about-us-brief.jpg"
                            class="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                            style="min-height: 400px; object-position: center;" alt="About Divine Shelter" />
                        <div class="experience-badge bounce-slow d-none d-md-block">
                            <div class="d-flex align-items-center gap-3">
                                <div class="bg-warning rounded-circle p-3 d-flex align-items-center justify-content-center"
                                    style="width: 60px; height: 60px;">
                                    <i class="bi bi-building-check fs-3 text-dark"></i>
                                </div>
                                <div>
                                    <span class="fw-bold text-theme d-block fs-5">Trusted</span>
                                    <span class="small text-muted text-uppercase fw-bold">Construction
                                        Partner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- History Section -->
            <div class="row my-5 py-5 bg-light rounded-4 g-4 align-items-center position-relative overflow-hidden"
                data-aos="fade-up">
                <!-- Background Decoration -->
                <!-- <div class="position-absolute top-0 end-0 opacity-10 pe-none">
                    <i class="bi bi-clock-history" style="font-size: 15rem; transform: translate(30%, -30%);"></i>
                </div> -->

                <div class="col-lg-5 order-lg-2 position-relative z-1">
                    <NuxtImg src="/images/service-building-construction.webp" class="img-fluid rounded-4 shadow w-100"
                        alt="Our History" />
                </div>
                <div class="col-lg-7 order-lg-1 ps-lg-5 position-relative z-1">
                    <h5 class="text-theme fw-bold mb-3 ls-2 text-uppercase">Brief History</h5>
                    <h3 class="fw-bold mb-4">Our Journey of Growth</h3>
                    <p class="text-muted">
                        <span class="text-theme fw-bold">Divine Shelter Construction Services Ltd.</span> was
                        established to deliver durable, cost-effective, and well-managed building solutions.
                        The company was founded to respond to the growing demand for quality housing, reliable building
                        materials, and structured real estate development across Nigeria.
                    </p>
                    <p class="text-muted">
                        From its early operations in residential and small commercial projects, Divine Shelter has grown
                        into a multidisciplinary firm combining conventional construction with Hydraform bricks and
                        alternative building technologies.
                    </p>
                    <p class="text-muted mb-0">
                        This integrated approach allows the company to reduce construction costs, shorten delivery
                        timelines, and improve building performance while maintaining strict quality control.
                    </p>
                </div>
            </div>

            <!-- Why Choose Us -->
            <div class="my-5 py-4">
                <div class="text-center mb-5" data-aos="fade-up">
                    <h6 class="text-theme fw-bold text-uppercase ls-2 mb-2">Why Choose Us</h6>
                    <h2 class="fw-bold display-6">The Divine Shelter Advantage</h2>
                    <div class="mx-auto mt-3"
                        style="width: 60px; height: 4px; background: var(--bs-warning); border-radius: 2px;"></div>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4" v-for="(reason, index) in reasons" :key="index" data-aos="fade-up"
                        :data-aos-delay="index * 100">
                        <div class="card h-100 border-0 shadow-sm hover-card p-4">
                            <div
                                class="icon-box bg-warning-subtle text-theme rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                                <i :class="['bi fs-3', reason.icon]"></i>
                            </div>
                            <h5 class="fw-bold mb-3">{{ reason.title }}</h5>
                            <p class="text-muted small mb-0 lh-lg">{{ reason.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Aim & Objectives -->
            <div class="row g-5 my-5 align-items-stretch">
                <div class="col-lg-5" data-aos="fade-right">
                    <div class="p-5 text-white rounded-4 bg-theme h-100 position-relative overflow-hidden shadow">
                        <div class="position-relative z-1">
                            <h3 class="fw-bold mb-4">Our Aim</h3>
                            <p class="lead opacity-90">
                                Our aim is to provide high-quality construction, building materials, and real estate
                                solutions that deliver long-term value, structural reliability, and cost efficiency for
                                our clients.
                            </p>
                            <hr class="border-white opacity-25 my-4">
                            <p class="mb-0 opacity-90">
                                We seek to become a trusted partner in the development of residential, commercial, and
                                public infrastructure by combining technical expertise, modern building systems, and
                                disciplined execution.
                            </p>
                        </div>
                        <i class="bi bi-crosshair position-absolute bottom-0 end-0 text-white opacity-25"
                            style="font-size: 10rem; transform: translate(20%, 20%);"></i>
                    </div>
                </div>
                <div class="col-lg-7" data-aos="fade-left">
                    <div class="ps-lg-4">
                        <h3 class="fw-bold mb-4 text-theme">Our Objectives</h3>
                        <div class="vstack gap-3">
                            <div class="d-flex gap-3 align-items-start p-3 rounded-3 hover-bg-light transition-all"
                                v-for="(obj, i) in objectives" :key="i">
                                <div class="mt-1 d-flex align-items-center justify-content-center flex-shrink-0 bg-theme text-white rounded-circle shadow-sm"
                                    style="width: 28px; height: 28px;">
                                    <i class="bi bi-check fw-bold small"></i>
                                </div>
                                <p class="mb-0 text-muted">{{ obj }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </nuxt-layout>
</template>

<script setup lang="ts">
const reasons = [
    { title: 'Proven Experience', desc: 'Proven experience in Hydraform construction and modern building systems.', icon: 'bi-briefcase-fill' },
    { title: 'Cost-Efficient', desc: 'Cost-efficient and durable building solutions that maximize value.', icon: 'bi-piggy-bank-fill' },
    { title: 'Reliable Supply', desc: 'Reliable supply of quality doors for residential and hotel buildings.', icon: 'bi-door-open-fill' },
    { title: 'Local Expertise', desc: 'Strong understanding of local building conditions and environment.', icon: 'bi-geo-alt-fill' },
    { title: 'Reliable Supervision', desc: 'Reliable supervision and timely delivery of all projects.', icon: 'bi-clipboard-check-fill' },
    { title: 'Quality Commitment', desc: 'Unwavering commitment to quality and client satisfaction.', icon: 'bi-star-fill' },
];

const objectives = [
    'To design and construct durable residential, commercial and institutional buildings that meet approved standards and client requirements.',
    'To promote Hydraform Bricks and alternative building systems as cost-effective and environmentally responsible construction solutions.',
    'To supply quality building materials that meet site and structural performance standards.',
    'To develop and sell land and housing projects with proper documentation and transparent processes.',
    'To deliver projects through sound planning, supervision, and quality control from foundation to handover.',
    'To contribute to sustainable housing and infrastructure development across Nigeria.'
];
</script>

<style scoped>
.text-theme {
    color: #20546f;
}

.bg-theme {
    background-color: #20546f;
}

.ls-2 {
    letter-spacing: 2px;
}

.hover-card {
    transition: all 0.3s ease;
}

.hover-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .1) !important;
}

.icon-box {
    width: 70px;
    height: 70px;
}

.hover-bg-light:hover {
    background-color: #f8f9fa;
}

.transition-all {
    transition: all 0.2s ease;
}

.experience-badge {
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border-left: 5px solid var(--bs-warning);
}

@media (max-width: 991px) {
    .experience-badge {
        bottom: 10px;
        right: 10px;
        left: 10px;
        text-align: center;
    }
}
</style>