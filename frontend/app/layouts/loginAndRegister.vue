<template>
    <div class="row g-0">
        <div class="col-lg-6 sideImage d-none d-lg-flex">
            <div class="container">
                <div class="card text-white sideCard">
                    <div class="card-body">
                        <div class="fw-bold fs-3 mb-3">
                            Join the Women in GRFCP Community
                        </div>
                        <div>
                            Whether you’re here to learn, lead, or support — this is where your journey begins.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6 " style="height: 100vh; overflow: auto;">
            <div class="container">
                <div class="min-vh-100 d-flex justify-content-center align-items-center">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.sideImage {
    background: url('/images/auth/auth-img.webp') center/cover no-repeat;
    background-position: center top !important;
    overflow: hidden;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;
}

.sideCard {
    background-color: #000000a0;
}
</style>