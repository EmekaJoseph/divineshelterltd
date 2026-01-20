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
                        Find fast answers to common questions regarding our construction services,
                        building materials, and Hydraform technology.
                    </div>
                </div>

                <div class="col-12 mt-4">
                    <div class="accordion accordion-flush" id="accordionFaqs">
                        <div v-for="({ question, answer }, index) in faqs" :key="index"
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

            <div style="min-height: 200px;"
                class="bg-light d-flex justify-content-center align-items-center mt-5 rounded-4">
                <div class="text-center p-4">
                    <h4 class="fw-bold">
                        Still have questions?
                    </h4>
                    <p class="text-muted">
                        Can’t find the answer you’re looking for? Please chat with our friendly team.
                    </p>
                    <nuxt-link to="/contact-us" class="btn btn-theme mt-2 px-4 py-2 fw-bold text-uppercase">Get in
                        touch</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const faqs = [
    {
        question: "What services does Divine Shelter Ltd provide?",
        answer: "Divine Shelter Ltd provides professional building construction, real estate and property sales, project management, training services, and specialized Hydraform/alternative building systems."
    },
    {
        question: "What is Hydraform technology?",
        answer: "Hydraform technology is an innovative building system that uses interlocking soil-cement blocks, reducing the need for mortar and providing cost-efficient, durable structures."
    },
    {
        question: "Can I buy building materials directly from you?",
        answer: "Yes, we supply a wide range of high-quality building materials, including our specialized Hydraform blocks, suitable for various construction needs."
    },
    {
        question: "Do you offer training for using Hydraform bricks?",
        answer: "Yes, we provide expert training for individuals and teams interested in learning how to effectively use Hydraform technology in their construction projects."
    },
    {
        question: "How do I request a quote for my project?",
        answer: "You can easily request a quote by visiting our 'Request a Quote' page and filling out the form with your project details. Our team will get back to you promptly."
    }
]
</script>

<style scoped>
.main-page {
    padding-block: 60px;
}

.header {
    font-size: 36px;
    font-weight: 800;
    color: #1a202c;
    text-align: center;
    margin-bottom: 1rem;
}

@media (max-width: 767px) {
    .header {
        font-size: 28px;
    }
}

.accordion-button:not(.collapsed) {
    color: var(--theme-color) !important;
    background-color: transparent !important;
    box-shadow: none;
}

.accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, .125);
}

.accordion-item {
    border-bottom: 1px solid rgba(0, 0, 0, .125);
}

.accordion-item:last-child {
    border-bottom: none;
}
</style>
