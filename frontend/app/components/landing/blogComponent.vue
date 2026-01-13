<template>
    <div data-aos="fade-up" class="main-page container">
        <div class="row g-3 justify-content-lg-between">
            <div class="col-lg-4 col-md-12">
                <div class="text-after-line text-muted2">
                    Blogs
                </div>
                <div class="header">Lastest blog posts</div>

            </div>

            <div class="col-lg-6">
                <nuxt-link to="/" class="btn btn-theme mt-3 hover-tiltX float-end">
                    view all blogs
                </nuxt-link>

            </div>
        </div>

        <div class="row g-3 mt-3">
            <div v-for="({ image, date, title, text }, index) in blogs" class="col-lg-4 col-md-6">
                <div class="card cursor-pointer hover-tiltY">
                    <NuxtImg class="card-img-top" :src="image" />
                    <div class="card-body">
                        <div class="card-titl fw-bold small">
                            {{ useDateFormat(new Date(date), 'DD MMM, YYYY') }}
                        </div>
                        <div class="card-title fw-bold fs-5">
                            {{ title }}
                        </div>
                        <p class="card-text">
                            {{ text }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'


interface BlogInterface {
    image: string,
    date: Date,
    title: string,
    text: string
}

const blogs = ref<BlogInterface[]>([
    {
        image: `/images/landing/blog-img1.png`,
        date: new Date('2025-10-09'),
        title: `UX review presentations`,
        text: `How do you create compelling presentations that wow your colleagues and impress your managers?`
    },
    {
        image: `/images/landing/blog-img2.png`,
        date: new Date('2025-10-09'),
        title: `UX review presentations`,
        text: `How do you create compelling presentations that wow your colleagues and impress your managers?`
    },
    {
        image: `/images/landing/blog-img3.png`,
        date: new Date('2025-10-09'),
        title: `UX review presentations`,
        text: `How do you create compelling presentations that wow your colleagues and impress your managers?`
    },
])

</script>


<style scoped>
.main-page {
    padding-block: 60px;
    min-height: 100vh;
}

.header {
    font-size: 40px;
    color: #333;
}

@media (max-width: 767px) {
    .header {
        font-size: 24px;
    }
}
</style>