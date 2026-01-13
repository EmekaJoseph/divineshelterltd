<template>
    <nuxt-layout name="landing-layout">
        <landing-hero-component />

        <section>
            <landing-about-us-component />
        </section>

        <section>
            <landing-services-component />
        </section>


    </nuxt-layout>
</template>

<style scoped>
section {
    padding-block: 50px;
}
</style>