<template>
    <div class="container py-5" data-aos="fade-up">
        <div class="text-center mb-5">
            <h6 class="text-theme fw-bold text-uppercase letter-spacing-2 mb-2">Why Divine Shelter?</h6>
            <h2 class="display-5 fw-bold text-dark">WHY CHOOSE US</h2>
            <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4 mt-2">
            <div v-for="(item, index) in reasons" :key="index" class="col-md-6 col-lg-4" data-aos="zoom-in"
                :data-aos-delay="index * 100">
                <div class="feature-card h-100 p-4 transition-all">
                    <div class="icon-box mb-3 d-flex align-items-center justify-content-center">
                        <i :class="['bi', item.icon, 'fs-3', 'text-theme']"></i>
                    </div>
                    <h5 class="fw-bold mb-3">{{ item.title }}</h5>
                    <p class="text-muted mb-0">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const reasons = [
    {
        title: 'Proven Experience',
        description: 'Years of expertise in Hydraform construction and interlocking brick systems across Nigeria.',
        icon: 'bi-patch-check-fill'
    },
    {
        title: 'Cost-Efficient',
        description: 'Durable building solutions designed to maximize value and minimize long-term expenses.',
        icon: 'bi-piggy-bank-fill'
    },
    {
        title: 'Quality Supply',
        description: 'Reliable supply of premium doors and materials for residential and commercial buildings.',
        icon: 'bi-door-open-fill'
    },
    {
        title: 'Local Understanding',
        description: 'Deep knowledge of Nigerian building conditions and environmental requirements.',
        icon: 'bi-geo-alt-fill'
    },
    {
        title: 'Timely Delivery',
        description: 'Reliable supervision ensuring projects are completed on schedule and within budget.',
        icon: 'bi-alarm-fill'
    },
    {
        title: 'Client Satisfaction',
        description: 'Total commitment to quality and exceeding expectations on every project.',
        icon: 'bi-emoji-smile-fill'
    }
]
</script>

<style scoped>
.letter-spacing-2 {
    letter-spacing: 2px;
}

.title-underline {
    width: 60px;
    height: 4px;
    background: var(--bs-warning);
    border-radius: 2px;
}

.feature-card {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: var(--bs-warning);
}

.icon-box {
    width: 60px;
    height: 60px;
    background: rgba(var(--bs-warning-rgb), 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.feature-card:hover .icon-box {
    background: var(--bs-warning);
}

.feature-card:hover .icon-box i {
    color: #fff !important;
}

.transition-all {
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.text-theme {
    color: #20546f;
}
</style>
