<template>
    <div data-bs-scroll="true" class="offcanvas offcanvas-start" tabindex="-1" id="menuOffcanvas"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">MENU</h5>
            <button ref="btnX" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-group list-group-flush">
                <li v-for="({ title, routePath, hasDropDown, dropdownItems }, i) in templateStore.navBarMenus" :key="i"
                    class="list-group-item list-group-item-main border- dismiss-on-click">
                    <nuxt-link :to="routePath">{{ title }}</nuxt-link>
                    <!-- <div v-if="hasDropDown" style="border-left: 1px solid var(--bs-border-color)"> -->
                    <div v-if="hasDropDown">
                        <ul class="list-group list-group-flush">
                            <li v-for="dropdownItem in dropdownItems"
                                class="list-group-item list-group-item-sub border- small">
                                <i class="bi bi-dot"></i>
                                <nuxt-link :to="dropdownItem.routePath">
                                    {{ dropdownItem.title }}
                                </nuxt-link>
                            </li>
                        </ul>

                    </div>
                </li>


                <hr style="color: var(--bs-border-color);">


            </ul>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';


const templateStore = useTemplateStore()
const btnX = ref<any>(null)

onBeforeRouteLeave(() => {
    btnX.value?.click()
})

onMounted(() => {
    const divs = document.querySelectorAll('.dismiss-on-click');
    // const targetDiv = document.querySelector('[aria-current="page"]');
    divs.forEach((div) => {
        div.setAttribute('data-bs-dismiss', 'offcanvas');
    });
})

</script>

<style scoped>
.offcanvas {
    width: 320px;
}

.list-group-item-main {
    margin-bottom: 10px;
}

.list-group-item a {
    text-decoration: none;
    color: var(--vt-c-black-soft);
}


.list-group-item .router-link-active,
.list-group-item .router-link-exact-active {
    font-weight: bolder;
    color: var(--theme-color);
    /* border-bottom: 1px solid var(--theme-color) !important; */
}
</style>