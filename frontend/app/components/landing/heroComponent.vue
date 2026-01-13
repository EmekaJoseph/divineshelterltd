<template>
    <div class="min-vh-100 justify-content-center align-items-center bg-light">
        <div class="row g-0 ">
            <div
                class=" d-none d-lg-flex col-lg-6 min-vh-50 justify-content-center align-items-center animate__animated animate__slideInLeft">
                <div class="container ps-5">
                    <div class="hero-title mb-1">
                        Empowering Women in Governance, Risk, Compliance & Financial crime Prevention
                    </div>
                    <div class="text-muted mb-3">
                        Shaping the future of diversity, excellence and inclusion, foostering leadership, innovation in
                        governance, risk and compliance and building a global network for women in GRCFP
                    </div>
                    <nuxt-link class="btn btn-theme hover-tiltX" to="/auth/register">
                        Register With Us
                    </nuxt-link>
                </div>
            </div>
            <LandingHeroCarousel class=" animate__animated animate__slideInRight" />
        </div>
    </div>
</template>


<style scoped>
.hero-title {
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 1.3;
}




.hero-tem::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.358);
    /* Black with 50% opacity */
    backdrop-filter: blur(1px);
    /* Blur effect */
    z-index: 1;
}

.hero-tem>* {
    position: relative;
    z-index: 2;
}
</style>