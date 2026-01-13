<template>
    <div data-aos="fade-up" class="main-page container">
        <div class="row g-3 justify-content-lg-between">
            <div class="col-lg-3 col-md-12">
                <div class="text-after-line text-muted2">
                    About Us
                </div>
                <div class="header">About Us</div>

                <nuxt-link to="/about" class="btn btn-theme mt-3 hover-tiltX">Learn More</nuxt-link>
            </div>

            <div class="col-lg-6" style="font-size: 18px; text-align: justify;">
                {{ pageContents.regularText }}
            </div>

            <div class="col-12 mt-5">
                <NuxtImg src="/images/landing/about.webp" style="width: 100%;" />
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import pageContents from '~/stores/pageContents/about.json'

</script>


<style scoped>
.main-page {
    padding-block: 60px;
    min-height: 100vh;
}

.header {
    font-size: 40px;
    color: #333;
}

@media (max-width: 767px) {
    .header {
        font-size: 24px;
    }
}
</style>