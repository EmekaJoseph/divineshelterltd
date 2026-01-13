<template>
    <div>
        <button ref="modalOpen" type="button" class="d-none" data-bs-toggle="modal" data-bs-target="#advisoryModal">
        </button>

        <div class="modal fade" id="advisoryModal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header border-0 bg-light">
                        <h5 class="modal-title fw-bold" id="modalTitleId">
                            {{ landingModalStore.advisoryInfo.content?.name }}
                        </h5>
                        <!-- <button ref="modalClose" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button> -->
                    </div>
                    <div v-html="landingModalStore.advisoryInfo.content?.info" class="modal-body">

                    </div>
                    <div class="modal-footer border-0">
                        <button ref="modalClose" type="button" class="btn btn-light" data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useLandingModalStore } from '~/components/landing/modal/useLandingModalStore'

const landingModalStore = useLandingModalStore()

const modalOpen = ref<any>(null)
const modalClose = ref<any>(null)

watch(() => landingModalStore.advisoryInfo.modal, () => {
    modalOpen.value?.click()
})

onBeforeRouteLeave(() => {
    modalClose.value?.click()
})


</script>