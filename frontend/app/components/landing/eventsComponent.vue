<template>
    <div class="main-page  bg-light">
        <div class="container">
            <div data-aos="fade-up" class="row g-3 justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="text-cente d-flex justify-content-center">
                        <div style="min-width: 300px;" class="text-after-line text-muted2 ms-lg-5 ">
                            Events & Summits
                        </div>
                    </div>
                    <div class="header">Our Upcoming Events</div>
                </div>

                <div class="col-12">
                    <ul class="list-group list-group-flush">
                        <li v-for="({ edition, title, venue, date }, index) in pageContents.events" :key="index"
                            class="list-group-item bg-transparent border-">

                            <div class="row g-3">
                                <div class="col-2 event-number d-none d-lg-block">0{{ (index + 1) }}</div>
                                <div class="col d-flex justify-content-start align-items-center">
                                    <div>
                                        <span class=" fw-medium">{{ edition }}</span>
                                        <div class="event-title">
                                            {{ title }}
                                        </div>
                                        <div class="text-muted">
                                            <div class="text-muted">
                                                <i class="bi bi-clock me-1"></i> {{ date }}
                                            </div>
                                            <div class="text-muted">
                                                <i class="bi bi-geo-alt me-1"></i> {{ venue }}
                                            </div>
                                        </div>
                                        <div class="hover-tiltX mt-2">
                                            <nuxt-link class="text-muted small text-decoration-none" to="/">
                                                Register now <i class="bi bi-arrow-right"></i>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import pageContents from '~/stores/pageContents/home.json'

</script>

<style scoped>
.main-page {
    padding-block: 60px;
    min-height: 50vh;
}

.header {
    font-size: 36px;
    color: #333;
    text-align: center;
}

.event-number {
    font-size: 100px;
    font-weight: 700;
}

.event-title {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.3;
}

@media (max-width: 767px) {
    .event-title {
        font-size: 20px;
    }

    .header {
        font-size: 20px;
    }
}
</style>