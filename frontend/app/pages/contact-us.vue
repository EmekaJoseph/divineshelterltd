<template>
    <nuxt-layout name="landing-layout">

        <div class="">
            <landing-page-title-image image="/images/service-0.webp">
                Contact Us
            </landing-page-title-image>
        </div>

        <div class="container">
            <section class=" mt-3">
                <div class="card bg-light">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=120 Epe/Ijebu-Ode Expressway, Odomola, Epe, Lagos State&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <!-- <a href="https://embed-googlemap.com">google maps embed</a> -->
                        </div>

                    </div>
                </div>

            </section>

            <div class="row g-3 mt-3">

                <div class="col-md-4">
                    <div class="card h-100 bg-light-subtle shadow-sm">
                        <div class="card-body">
                            <div class="text-cente fw-bold">Address:</div>
                            <div class="mt-3 text-cente small">
                                {{ companyProfile.address }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 bg-light-subtle shadow-sm">
                        <div class="card-body">
                            <div class="text-cente fw-bold">Phone:</div>
                            <div class="mt-3 text-cente small">
                                {{ companyProfile.phone }}
                            </div>

                            <div>
                                <a class="text-theme fw-semibold" :href="`tel:${companyProfile.phone}`">
                                    <i class=" bi bi-telephone me-1"></i>
                                    Tap to Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 bg-light-subtle shadow-sm">
                        <div class="card-body">
                            <div class="text-cente fw-bold">Email:</div>
                            <div class="mt-3 text-cente small">
                                {{ companyProfile.email }}
                            </div>

                            <div>
                                <a class="text-theme fw-semibold" :href="`mailto:${companyProfile.email}`">
                                    <i class="bi bi-envelope me-1"></i>
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>



            <section class="mt-5">
                <h3 class="text-center fw-bold">
                    Contact Us
                </h3>
                <div class="text-muted text-center">
                    Send us a message
                </div>




                <div class="row mt-3 justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-label">First Name:</div>
                                        <custom-input-text placeholder="first name" />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-label">Last Name:</div>
                                        <custom-input-text placeholder="last name" />
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-label">Email:</div>
                                        <custom-input-text type="email" placeholder="email" />
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-label">Phone Number:</div>
                                        <custom-input-text type="text" placeholder="phone number" />
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-label">Message:</div>
                                        <textarea class="form-control" placeholder="enter message"
                                            style="height: 130px;"></textarea>
                                    </div>

                                    <!-- <div class="col-md-12 cursor-pointer">
                                        <i class="bi bi-square me-2"></i>
                                        You agree to our friendly
                                        <a href="#" class="text-theme">privacy policy</a>.
                                    </div> -->

                                    <div class="col-md-12">
                                        <button disabled class="btn btn-theme w-100">
                                            Send Message
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>


            </section>


        </div>




    </nuxt-layout>


</template>

<script setup lang="ts">

const companyProfile = useCompanyProfileStore()

const addressDetails = [
    { title: "Address", info: "85 Great Portland Street First Floor London W1W, 7LT, United Kingdom.", footer: "support@WGRCP.com" },
    { title: "Email", info: "Questions or queries? Get in touch!", footer: "support@WGRCP.com" },
    { title: "Phone", info: "Mon-Fri from 8am to 5pm.", footer: "+234 806 2435 267" },
]


</script>

<style scoped>
.hero-header {
    font-size: 50px;
    font-weight: 600;
    line-height: 1;
}

@media (max-width: 767px) {
    .hero-header {
        font-size: 34px;
    }
}
</style>

<style>
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 400px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 500px;
}

.gmap_iframe {
    height: 400px !important;
}
</style>
