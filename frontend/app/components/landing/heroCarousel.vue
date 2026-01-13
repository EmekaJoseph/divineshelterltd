<template>
    <Carousel class="col-lg-6" :slide-effect="'fade'" v-bind="carouselConfig">
        <Slide v-for="({ header, info, image }, index) in slideItems" :key="index">
            <div :style="{ background: `url(${image}) center/cover no-repeat` }" class="w-100 hero min-vh-100">

                <div class="container d-lg-none">
                    <div class="text-white text-center fs-4 fw-bold">
                        Empowering Women in Governance, Risk , Compliance & Financial crime Prevention

                    </div>
                    <div class="small text-white text-center">
                        Shaping the future of diversity, excellence and inclusion, foostering leadership, innovation
                        in governance, risk and compliance and building a global network for women in GRCFP
                    </div>
                    <div class="text-center mt-3">
                        <nuxt-link class="btn btn-theme hover-tiltX mx-auto" to="/auth/register">
                            Register With Us
                        </nuxt-link>
                    </div>
                </div>
            </div>


        </Slide>
        <template #addons>
            <!-- <Pagination /> -->
            <!-- <Navigation /> -->
        </template>
    </Carousel>
</template>

<script setup lang="ts">

const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    autoplay: 5000,
    transition: 1500,
}


const slideItems: { header: string, info: string, image: string }[] = [
    {
        header: ``,
        info: ``,
        image: `/images//landing/hero1.webp`
    },

    {
        header: ``,
        info: ``,
        image: `/images/landing/hero2.webp`
    },

    {
        header: ``,
        info: `Oysterchecks addresses these shortcomings by performing KYC checks on people, ID documents and companies in a more effective way.`,
        image: `/images/landing/hero3.webp`
    },


]

</script>

<style scoped>
.side-img {
    width: 70%;
}



.hero {
    /* This will make the image start from the top */
    background-position: center top !important;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 40px;
}
</style>