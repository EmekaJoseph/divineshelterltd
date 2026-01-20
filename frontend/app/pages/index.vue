<template>
    <nuxt-layout name="landing-layout">

        <landing-hero-component />

        <section>
            <landing-about-us />
        </section>

        <section class="bg-light-subtle">
            <landing-aims-and-objectives />
        </section>

        <section>
            <landing-our-services />
        </section>

        <section class="bg-light-subtle">
            <landing-latest-projects />
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