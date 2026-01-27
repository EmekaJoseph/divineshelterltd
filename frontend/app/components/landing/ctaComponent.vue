<template>
    <section class="cta-section py-5 my-5" data-aos="zoom-in">
        <div class="container">
            <div class="cta-wrapper p-5 rounded-4 shadow-lg text-center position-relative overflow-hidden">
                <!-- Background Decoration -->
                <div class="cta-bg-shape"></div>

                <div class="content-relative position-relative z-1">
                    <h2 class="display-5 fw-bold text-white mb-3">Ready to start your project or need quality building
                        materials or doors?</h2>
                    <p class="lead text-light opacity-85 mb-5 mx-auto max-w-700">
                        Speak with our team today and let's bring your vision to life with professional expertise and
                        durable materials.
                    </p>

                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <nuxt-link to="/request-a-quote"
                            class="btn btn-warning px-4 py-3 rounded-pill fw-bold hover-up transition-all">
                            Request a Quote
                        </nuxt-link>
                        <nuxt-link to="/contact-us"
                            class="btn btn-outline-light px-4 py-3 rounded-pill fw-bold hover-up transition-all">
                            Contact Us
                        </nuxt-link>
                        <nuxt-link to="/contact-us"
                            class="btn btn-light text-theme px-4 py-3 rounded-pill fw-bold hover-up transition-all">
                            Visit Our Epe Warehouse
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// No logic needed for static display, but links can be updated if necessary
</script>

<style scoped>
.cta-section {
    background-color: transparent;
}

.cta-wrapper {
    background: linear-gradient(135deg, #20546f 0%, #1a4258 100%);
    color: white;
}

.cta-bg-shape {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    z-index: 0;
}

.max-w-700 {
    max-width: 700px;
}

.ls-3 {
    letter-spacing: 3px;
}

.text-theme {
    color: #20546f;
}

.transition-all {
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hover-up:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-warning {
    background-color: var(--bs-warning);
    border-color: var(--bs-warning);
    color: #000;
}

.btn-warning:hover {
    background-color: #ffca2c;
    border-color: #ffc720;
    color: #000;
}
</style>
