<template>
    <div class="min-vh-100 justify-content-center align-items-center">
        <Carousel :slide-effect="'fade'" v-bind="carouselConfig">
            <Slide v-for="({ header, info, image }, index) in slideItems" :key="index">
                <div :style="{ background: `url(${image}) center/cover no-repeat` }" class="w-100 hero min-vh-100">

                    <div class="bg-overlay"></div>
                    <div class="container">
                        <div class="col-md-4">
                            <div class="card border-0 animate__animated">
                                <div class="card-body info-text">
                                    {{ info }}
                                </div>

                                <div class="card-footer bg-transparent border-0">
                                    <nuxt-link to="/about-us" class="btn btn-theme">
                                        Read More <i class="bi bi-arrow-right"></i>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Slide>
            <template #addons>
                <Pagination />
                <!-- <Navigation /> -->
            </template>
        </Carousel>
    </div>
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
        info: `We build structures and develop talent in the construction industry`,
        image: `/images/hero1.webp`
    },

    {
        header: ``,
        info: `Comprehensive project handling for residential and commercial builds`,
        image: `/images/hero2.webp`
    },

    {
        header: ``,
        info: `Premium materials engineered for lasting strength and performance`,
        image: `/images/hero3.webp`
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
    /* justify-content: center; */
    align-items: center;
    /* align-items: flex-end; */
    padding-bottom: 40px;
}

.bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
    z-index: 1;
}

.container {
    position: relative;
    z-index: 2;
}

.info-text {
    font-size: 40px;
    font-weight: 600;
    line-height: 1;
}




@media (max-width: 767px) {
    .info-text {
        font-size: 35px;
    }

    .hero {
        align-items: flex-end;
        padding-bottom: 100px;
    }

    .card {
        background: transparent;
        color: #fff;
        text-align: center;
    }



    .bg-overlay {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
    }

}
</style>