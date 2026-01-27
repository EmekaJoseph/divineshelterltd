<template>
    <nuxt-layout name="landing-layout">

        <landing-hero-component />

        <section>
            <landing-about-us />
        </section>

        <section class="bg-light">
            <landing-why-choose-us />
        </section>

        <section>
            <landing-aims-and-objectives />
        </section>

        <section class="bg-light">
            <landing-our-services />
        </section>

        <section>
            <landing-latest-projects />
        </section>

        <section class="bg-light">
            <landing-building-materials />
        </section>

        <section>
            <landing-faqs-component />
        </section>


    </nuxt-layout>
</template>

<style scoped>
section {
    padding-block: 50px;
}
</style>