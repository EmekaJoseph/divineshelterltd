<template>
    <div class="main-page">
        <div class="container">
            <div data-aos="fade-up" class="row g-3 justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="text-center d-flex justify-content-center">
                        <div style="min-width: 300px;" class="text-after-line text-muted2 ms-lg-5 ">
                            FAQ
                        </div>
                    </div>
                    <div class="header">Frequently asked questions</div>
                    <div class="text-center text-muted">
                        Find fast answers to common questions regarding governance, risk management, and compliance.
                        Review our FAQs for helpful information.
                    </div>
                </div>

                <div class="col-12">
                    <div class="accordion accordion-flush" id="accordionFaqs">
                        <div v-for="({ question, answer }, index) in pageContents.faqs"
                            class="accordion-item bg-transparent">
                            <h2 class="accordion-header" :id="'flush-headingOne' + index">
                                <button class="accordion-button fw-bold py-3 bg-transparent"
                                    :class="{ 'collapsed': index !== 0 }" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#flush-collapseOne' + index"
                                    :aria-expanded="index === 0 ? 'true' : 'false'"
                                    :aria-controls="'flush-collapseOne' + index">
                                    {{ question }}
                                </button>
                            </h2>
                            <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse"
                                :class="{ 'show': index === 0 }" :aria-labelledby="'flush-headingOne' + index"
                                data-bs-parent="#accordionFaqs">
                                <div class="accordion-body text-muted pt-0">
                                    {{ answer }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="min-height: 200px;" class="bg-light d-flex justify-content-center align-items-center">
                <div class="text-center">
                    <h4 class="fw-bold text-center">
                        Still have questions?
                    </h4>
                    <div>
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </div>
                    <nuxt-link to="/contact-us" class="btn btn-theme mt-4">Get in touch</nuxt-link>
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
    min-height: 100vh;
}

.header {
    font-size: 36px;
    color: #333;
    text-align: center;
}

@media (max-width: 767px) {
    .header {
        font-size: 24px;
    }
}

.accordion-button:not(.collapsed) {
    color: var(--theme-color) !important;
    /* background-color: var(--theme-bg-subtle) !important; */
}
</style>