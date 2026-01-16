<template>
    <nuxt-layout name="landing-layout">
        <!-- Minimal Header -->
        <div class="bg-dark py-5 text-white">
            <div class="container py-5 text-center">
                <span class="badge bg-warning text-dark mb-3">{{ blog.category }}</span>
                <h1 class="fw-bold display-5 mb-3">{{ blog.title }}</h1>
                <div class="text-white-50">
                    <span class="me-3"><i class="bi bi-person-circle"></i> By {{ blog.author }}</span>
                    <span><i class="bi bi-calendar3"></i> {{ blog.date }}</span>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <!-- Featured Image -->
                    <div class="rounded-4 overflow-hidden mb-5 shadow">
                        <NuxtImg :src="blog.image" class="w-100 object-fit-cover" style="height: 400px;"
                            :alt="blog.title" />
                    </div>

                    <!-- Content -->
                    <article class="blog-content">
                        <p class="lead">
                            Construction is more than just erecting structures; it's about building dreams and securing
                            futures.
                            In this post, we explore the critical aspects of modern building practices and how they
                            influence
                            the longevity and value of your property.
                        </p>

                        <h3>The Importance of Quality Foundations</h3>
                        <p>
                            Every great structure starts with a solid foundation. At Divine Shelter, we prioritize soil
                            testing
                            and structural analysis before a single brick is laid. This ensures that regardless of the
                            environmental challenges, your building remains safe and secure for generations.
                        </p>

                        <div class="alert alert-light border-start border-4 border-warning my-4 p-4 fst-italic">
                            "Quality means doing it right when no one is looking." - Henry Ford. This philosophy guides
                            every step of our construction process.
                        </div>

                        <h3>Sustainable Building Materials</h3>
                        <p>
                            We are big advocates for using sustainable materials like Hydraform blocks. Not only are
                            they
                            environmentally friendly, but they also offer superior thermal insulation, keeping your home
                            cool in the Nigerian heat while reducing energy costs.
                        </p>

                        <h3>Conclusion</h3>
                        <p>
                            Whether you are planning a residential home or a commercial complex, choosing the right
                            partner
                            is the first step towards success. Contact us today to discuss how we can bring your vision
                            to life.
                        </p>
                    </article>

                    <!-- Author Box -->
                    <div class="bg-light p-4 rounded-3 mt-5 d-flex align-items-center gap-3">
                        <div class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white"
                            style="width: 60px; height: 60px; font-size: 1.5rem;">
                            <i class="bi bi-person"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 fw-bold">About {{ blog.author }}</h6>
                            <p class="mb-0 text-muted small">Senior Editor and Construction Specialist at Divine Shelter
                                Ltd.</p>
                        </div>
                    </div>

                    <!-- Back Button -->
                    <div class="mt-5 text-center">
                        <NuxtLink to="/blog" class="btn btn-outline-dark rounded-pill px-4">
                            <i class="bi bi-arrow-left"></i> Back to Blog
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </div>
        <div class="mb-5"></div>

    </nuxt-layout>
</template>

<script lang="ts" setup>
const route = useRoute()
const id = route.params.id

// Mock Data for single blog
const blog = computed(() => ({
    id: id,
    title: "The Future of Sustainable Construction in Nigeria",
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    author: 'Admin',
    category: 'Construction',
    image: `/images/service-1.webp`
}))
</script>

<style scoped>
.blog-content {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
}

.blog-content h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #2d3748;
    font-weight: 700;
}
</style>
