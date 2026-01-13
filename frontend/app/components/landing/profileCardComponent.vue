<template>

    <div @click="landingModalStore.advisoryInfoSwitch(member)" class="card h-100 border-0 cursor-pointer hover-tiltY">
        <div class="card-header border-0 pb-0 bg-transparent">
            <span>&nbsp;</span>
            <span class="text-theme float-end">
                <div class="small text-theme read-more-icon">
                    read more <i class="bi bi-chevron-right"></i>
                </div>
            </span>
        </div>

        <div class="card-body">
            <div class="text-center my-3">
                <NuxtImg :src="member.image" alt="image" width="60" />
            </div>
            <div class="text-center fw-bold">
                {{ member.name }}
            </div>
            <div class="text-center">
                {{ member.title }}
            </div>
        </div>
    </div>



</template>

<script setup lang="ts">
import { useLandingModalStore } from '~/components/landing/modal/useLandingModalStore'

const landingModalStore = useLandingModalStore()


defineProps({
    member: {
        type: Object,
        default: {
            image: '',
            name: '',
            title: ''
        }
    },

})

</script>

<style scoped>
.card {
    background-color: var(--bs-light);
}

.read-more-icon {
    display: none;
}

.card:hover .read-more-icon {
    display: block;
}

.card:hover {
    background-color: var(--bs-secondary-bg-subtle);
}
</style>