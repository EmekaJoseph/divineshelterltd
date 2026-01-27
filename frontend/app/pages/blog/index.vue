<template>
    <nuxt-layout name="landing-layout">
        <landing-page-title-image>
            Our Latest News
        </landing-page-title-image>

        <div class="container mt-5">
            <div class="row g-4 justify-content-center">
                <!-- Blog Grid -->
                <div v-for="blog in blogs" :key="blog.id" class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm border-0 blog-card">
                        <div class="card-img-wrapper">
                            <NuxtImg :src="blog.image" class="card-img-top" :alt="blog.title" loading="lazy" />
                            <div class="category-badge">{{ blog.category }}</div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <div class="text-muted small mb-2">
                                <i class="bi bi-calendar3 me-1"></i> {{ blog.date }}
                            </div>
                            <h5 class="card-title fw-bold text-theme mb-3">
                                <NuxtLink :to="`/blog/${blog.id}`"
                                    class="text-decoration-none text-reset stretched-link">
                                    {{ blog.title }}
                                </NuxtLink>
                            </h5>
                            <p class="card-text text-muted flex-grow-1 clamp-text">
                                {{ blog.excerpt }}
                            </p>
                            <div class="mt-3 pt-3 border-top d-flex align-items-center justify-content-between">
                                <span class="text-muted small">By {{ blog.author }}</span>
                                <span class="text-primary small fw-semibold">Read More <i
                                        class="bi bi-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </nuxt-layout>
</template>

<script lang="ts" setup>
const blogs = computed(() => {
    return Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        title: [
            "The Future of Sustainable Construction in Nigeria",
            "Why Hydraform Bricks are the Best Choice for Your Home",
            "5 Tips for Managing a Construction Project Efficiently",
            "Understanding Real Estate Investment Trends in 2026",
            "Safety First: Essential Protocols on Construction Sites",
            "Renovation vs. New Build: Which is Right for You?",
            "The Impact of Modern Architecture on Urban Living",
            "Choosing the Right Building Materials for Durability",
            "How We Deliver Quality Housing at Affordable Prices"
        ][i],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
        date: new Date(Date.now() - i * 86400000 * 3).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
        author: 'Admin',
        category: ['Construction', 'Real Estate', 'Tips', 'News'][i % 4],
        image: `/images/service-${(i % 4)}.webp`
    }))
})
</script>

<style scoped>
.blog-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.card-img-wrapper {
    position: relative;
    height: 220px;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.blog-card:hover .card-img-top {
    transform: scale(1.05);
}

.category-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.clamp-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
