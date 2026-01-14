<template>
    <div class="fixed-bottom-btn animate__animated animate__heartBeat animate__delay-2s">
        <div class="justify-content-end floatPanel">
            <div @click="openWhatsapp" class="card btnCard shadow border-0 shadow-sm">
                <div><i class="bi bi-whatsapp"></i></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

function openWhatsapp() {
    const phone = '+2348062138803';
    const text = encodeURIComponent('Hello');
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
}

</script>

<style scoped>
.fixed-bottom-btn {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;
}


.floatPanel {
    margin-bottom: 60px;
    padding-right: 24px;
    display: flex;
    z-index: 999;
    position: relative;
    transition: all ease-in-out 0.4s;
    font-size: 11px;
}

.btnCard {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.43rem;
    color: #fff;
    /* background-color: var(--theme-color); */
    background-color: #25D366;
    cursor: pointer;
}

@media (min-width: 979px) {
    /* .floatPanel {
        margin-bottom: 250px;
    } */
}
</style>