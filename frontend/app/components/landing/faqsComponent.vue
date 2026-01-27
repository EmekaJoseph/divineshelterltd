<template>
    <div class="faq-section py-5" data-aos="fade-up">
        <div class="container">
            <div class="text-center mb-5">
                <h6 class="text-theme fw-bold text-uppercase ls-2 mb-2">Support</h6>
                <h2 class="display-5 fw-bold text-dark">FREQUENTLY ASKED QUESTIONS</h2>
                <div class="title-underline mx-auto"></div>
                <p class="text-muted mt-3">Find clear answers to common questions about our services and technology.</p>
            </div>

            <div class="row">
                <!-- FAQ Categories Navigation (Desktop) / Dropdown (Mobile) -->
                <div class="col-lg-12 mb-4">
                    <div class="category-tabs d-flex flex-wrap justify-content-center gap-2">
                        <button v-for="(section, sIndex) in groupedFaqs" :key="sIndex" @click="activeSection = sIndex"
                            class="btn category-btn transition-all"
                            :class="activeSection === sIndex ? 'active-category' : 'inactive-category'">
                            {{ section.title }}
                        </button>
                    </div>
                </div>

                <!-- FAQ Accordion -->
                <div class="col-lg-10 mx-auto">
                    <div class="accordion accordion-custom" id="faqAccordion">
                        <div v-for="(item, iIndex) in groupedFaqs[activeSection]?.items" :key="iIndex"
                            class="accordion-item mb-3 border-0">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold p-4 bg-white rounded-3 shadow-sm"
                                    type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#collapse' + activeSection + iIndex" aria-expanded="false">
                                    <span class="me-3 text-theme">Q.</span> {{ item.question }}
                                </button>
                            </h2>
                            <div :id="'collapse' + activeSection + iIndex" class="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion">
                                <div class="accordion-body bg-white p-4 pt-0 text-muted rounded-bottom-3">
                                    <hr class="mt-0 opacity-10">
                                    <div class="d-flex">
                                        <span class="me-3 fw-bold text-warning">A.</span>
                                        <div>{{ item.answer }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Still Have Questions ? -->
            <div class="support-card mt-5 p-5 rounded-4 text-center shadow-lg" data-aos="zoom-in">
                <div class="icon-circle mb-3 mx-auto">
                    <i class="bi bi-chat-dots-fill text-white fs-2"></i>
                </div>
                <h3 class="fw-bold text-white mb-2">Still have questions?</h3>
                <p class="text-light opacity-75 mb-4 max-w-500 mx-auto">
                    Can’t find the answer you’re looking for? Our friendly team is ready to help you with any specific
                    inquiries.
                </p>
                <nuxt-link to="/contact-us"
                    class="btn btn-light text-theme fw-bold px-5 py-3 rounded-pill hover-up transition-all">
                    GET IN TOUCH
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const activeSection = ref(0)

const groupedFaqs = [
    {
        title: 'General',
        items: [
            {
                question: 'Where is Divine Shelter Construction Services Ltd located?',
                answer: 'We operate across Nigeria and maintain a head office in Lagos, physical doors and building materials warehouse and retail outlet in Epe, Lagos State.'
            },
            {
                question: 'Do you handle projects outside Lagos State?',
                answer: 'Yes. We execute projects in Abuja, Ogun, Akure, Port Harcourt, Enugu, Jos, Ebonyi, and other locations depending on project scope.'
            }
        ]
    },
    {
        title: 'Construction',
        items: [
            {
                question: 'Do you handle complete building construction?',
                answer: 'Yes. We provide full construction services from Designing, planning and supervision to construction and finishing.'
            },
            {
                question: 'Can you manage projects for clients living outside Nigeria?',
                answer: 'Yes. We provide structured supervision and regular progress updates for remote clients.'
            },
            {
                question: 'Do you work with approved drawings and standards?',
                answer: 'Yes. All projects are executed using approved drawings and recognized building standards.'
            }
        ]
    },
    {
        title: 'Hydraform',
        items: [
            {
                question: 'What is Hydraform technology?',
                answer: 'Hydraform is an interlocking brick system that reduces cement use, speeds up construction, and improves durability.'
            },
            {
                question: 'Is Hydraform suitable for Nigerian conditions?',
                answer: 'Yes. When properly produced and installed, it performs well in Nigerian soil and weather conditions.'
            },
            {
                question: 'Can Hydraform be used for multi-storey buildings?',
                answer: 'Yes. With proper design and supervision, Hydraform can be used for multi-storey construction.'
            }
        ]
    },
    {
        title: 'Training',
        items: [
            {
                question: 'Do you offer Hydraform training?',
                answer: 'Yes. We offer practical training on Hydraform brick production and construction.'
            },
            {
                question: 'Who can attend the training?',
                answer: 'Our training is open to builders, artisans, engineers, developers, students, and organisations.'
            }
        ]
    },
    {
        title: 'Doors & Materials',
        items: [
            {
                question: 'Can I buy doors directly from you?',
                answer: 'Yes. We sell and install doors, including security, wooden, hotel, and apartment doors.'
            },
            {
                question: 'Can I visit your warehouse?',
                answer: 'Yes. Clients can visit our Epe, Lagos warehouse to inspect products before purchase.'
            },
            {
                question: 'Do you handle bulk supply?',
                answer: 'Yes. We supply doors and building materials in bulk for estates, hotels, and institutions.'
            }
        ]
    },
    {
        title: 'Pricing',
        items: [
            {
                question: 'How do you determine project cost?',
                answer: 'Costs are based on design, materials, size, site conditions, and project duration.'
            },
            {
                question: 'Do you provide written quotations?',
                answer: 'Yes. All quotations are issued in writing after review of project details.'
            }
        ]
    },
    {
        title: 'Contact',
        items: [
            {
                question: 'How do I request a quote?',
                answer: 'You can request a quote through our website, WhatsApp, phone call, or by visiting our warehouse.'
            },
            {
                question: 'Do you provide support after project completion?',
                answer: 'Yes. We remain available for guidance and support after project delivery.'
            }
        ]
    }
]
</script>

<style scoped>
.ls-2 {
    letter-spacing: 2px;
}

.text-theme {
    color: #20546f;
}

.title-underline {
    width: 60px;
    height: 4px;
    background: var(--bs-warning);
    border-radius: 2px;
}

.category-tabs {
    padding-bottom: 20px;
}

.category-btn {
    padding: 10px 25px;
    border-radius: 50px;
    font-weight: 600;
    border: 2px solid transparent;
}

.active-category {
    background: #20546f;
    color: #fff;
    box-shadow: 0 5px 15px rgba(32, 84, 111, 0.3);
}

.inactive-category {
    background: #fff;
    color: #20546f;
    border-color: #f0f0f0;
}

.inactive-category:hover {
    background: #f8f9fa;
    border-color: #20546f;
}

.accordion-button {
    color: #333;
    transition: all 0.3s ease;
}

.accordion-button:not(.collapsed) {
    color: #20546f;
    background-color: #fff !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05) !important;
}

.accordion-button:focus {
    box-shadow: none;
}

.accordion-button::after {
    background-size: 1rem;
    background-position: center;
}

.support-card {
    background: linear-gradient(135deg, #20546f 0%, #184157 100%);
}

.icon-circle {
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.max-w-500 {
    max-width: 500px;
}

.hover-up:hover {
    transform: translateY(-5px);
}

.transition-all {
    transition: all 0.3s ease;
}

@media (max-width: 767px) {
    .display-5 {
        font-size: 2rem;
    }
}
</style>
