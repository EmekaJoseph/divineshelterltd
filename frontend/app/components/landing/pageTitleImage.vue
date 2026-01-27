<template>
    <div class="page-header pt-5 position-relative overflow-hidden">
        <!-- Background Decoration -->
        <div class="header-bg-decoration">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
        </div>

        <div class="container position-relative z-1 text-center py-4">
            <h1 class="display-4 fw-bold text-white mb-0 animate-fade-in">
                <slot />
            </h1>
            <div class="title-accent mx-auto mt-3"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Images prop is no longer used, but kept for compatibility with existing components
const props = defineProps({
    image: { type: String, default: '' },
});
</script>

<style scoped>
.page-header {
    background: linear-gradient(135deg, #20546f 0%, #1a4258 100%);
    min-height: 250px;
    display: flex;
    align-items: center;
    border-bottom: 4px solid var(--bs-warning);
}

.header-bg-decoration {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
}

.shape-2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: 10%;
}

.title-accent {
    width: 80px;
    height: 4px;
    background: var(--bs-warning);
    border-radius: 2px;
}

.animate-fade-in {
    animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 767px) {
    .page-header {
        min-height: 200px;
    }

    .display-4 {
        font-size: 2rem;
    }
}
</style>