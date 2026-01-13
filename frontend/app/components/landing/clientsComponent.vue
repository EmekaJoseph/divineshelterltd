<template>
    <div class="main-page">
        <div class="container">
            <div data-aos="fade-up" class="row g-3 justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="header">What Our Client Say</div>
                </div>

                <div class="col-12">


                    <Carousel v-bind="carouselConfig">
                        <Slide v-for="(client, index) in clientsSay" :key="index">
                            <div class="card bg-secondary-subtle border-0 h-100" style="max-width: 358px;">
                                <div class="card-body">
                                    <div class="card-header fw-bold border-0 bg-transparent">
                                        {{ client.name }}

                                    </div>
                                    <div class="card-body">
                                        <div>
                                            {{ client.quote }}
                                        </div>


                                        <div class="float-end">
                                            <RatingStar class="me-1" v-for="i in 5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        <template #addons>
                            <!-- <Pagination /> -->
                            <Navigation />
                        </template>
                    </Carousel>




                </div>
            </div>


        </div>


    </div>
</template>


<script lang="ts" setup>

const screenWidth = useWindowSize()
const itemsPerScreenSize = computed(() => { return screenWidth.width.value > 988 ? 3 : 1; })


const carouselConfig = {
    itemsToShow: itemsPerScreenSize.value,
    wrapAround: true,
    autoplay: 5000
}


const clientsSay = ref<{ name: string, quote: string }[]>([
    {
        name: 'GRC Consultant, InnovateCorp',
        quote: `This initiative inspired me to take on leadership roles within my organization. The mentorship program truly empowers women to excel in governance an...`,
    },
    {
        name: 'Fraud Analyst, SecureTech',
        quote: `Being part of this community has opened doors I never thought possible. The events and networking opportunities have connected me with like-minded pr...`,
    },
    {
        name: 'Risk Manager, SafeBank',
        quote: `The resource library is a game-changer. The blogs and case studies provide actionable insights that I’ve used to enhance my organization's governance...`,
    },
    {
        name: 'Compliance Officer, FinanceCorp',
        quote: `Joining this initiative has been a transformative experience. The mentorship program helped me connect with inspiring leaders in GRC and financial cr...`,
    },
    {
        name: 'Director, RiskPro',
        quote: `This platform not only provides resources but also inspires women like me to lead change within our organizations. It's a must-join for anyone in the...`,
    }, {
        name: 'Compliance Specialist, ProSecure',
        quote: `The community forum is my go-to place for staying updated on trends in governance and financial crime prevention. The discussions are always engaging...`,
    },
    {
        name: 'Fraud Investigator, InsightGroup',
        quote: `I've connected with mentors and peers who have challenged me to grow both personally and professionally. This initiative is a beacon of empowerment f..`,
    },
    {
        name: 'Head of Compliance, FinSafe',
        quote: `The recognition awards inspired me to push boundaries in my career. This platform celebrates and uplifts women in remarkable ways.`,
    },
    {
        name: 'Senior Analyst, TrustBank',
        quote: `I've attended webinars and training sessions that were incredibly insightful and practical. They've improved my understanding of financial crime prev...`,
    },
    {
        name: 'Policy Advisor, GlobalEthics',
        quote: `The diversity and inclusion initiatives showcased here give hope for a balanced future in boardrooms and executive teams worldwide.`,
    },

])


</script>




<style scoped>
.main-page {
    padding-block: 60px;
    /* min-height: 20vh; */
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
    background-color: var(--theme-bg-subtle) !important;
}
</style>