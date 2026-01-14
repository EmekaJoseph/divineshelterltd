<template>
    <div data-aos="fade-up" class="container">
        <div class="row g-3 justify-content-lg-center align-items-center ">
            <div class="text-center fs-5 fw-semibold text-muted text-between-lines">
                Aims & Objectives 🎯 📝
            </div>



            <div class="row gy-5 mt-0 justify-content-center align-items-center">
                <div class="col-md-4 text-center d-none d-md-block">
                    <NuxtImg src="/images/aim.jpg" width="150" />
                </div>
                <div class="col-md-8">
                    <strong> Our Aim </strong>
                    <div>
                        Our aim is to provide high-quality construction, building materials, and real estate solutions
                        that
                        deliver long-term value, structural reliability, and cost efficiency for our clients. We seek to
                        become a trusted partner in the development of...
                        <nuxt-link class="text-theme fw-bold" to="/about-us">read more</nuxt-link>
                        <!-- residential, commercial, and public
                        infrastructure by combining technical expertise, modern building systems, and disciplined
                        project execution. -->
                    </div>
                </div>



                <div class="col-md-7">
                    <strong> Our Objectives </strong>
                    <div>
                        <ul>
                            <!-- <li>
                                To design and construct durable residential, commercial and institutional buildings
                                that meet approved standards and client requirements.
                            </li>
                            <li>
                                To promote Hydraform Bricks and alternative building systems as cost-effective and
                                environmentally responsible construction solutions.
                            </li>
                            <li>
                                To supply quality building materials that meet site and structural performance
                                standards.
                            </li>
                            <li>
                                To develop and sell land and housing projects with proper documentation and transparent
                                processes.
                            </li> -->
                            <li>
                                To deliver projects through sound planning, supervision, and quality control from
                                foundation to handover.
                            </li>
                            <li>
                                To contribute to sustainable housing and infrastructure development across Nigeria.
                            </li>
                            <nuxt-link class="text-theme fw-bold" to="/about-us">read more</nuxt-link>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5 text-center d-none d-md-block">
                    <NuxtImg src="/images/objectives.jpg" width="150" />
                </div>

            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>

const templateStore = useTemplateStore()

const servicesList = computed(() => {
    const services = templateStore.navBarMenus.find((x) => x.title == 'Services')
    const items = services?.dropdownItems ?? []
    return items.map((x, index) => ({ title: x.title, route: x.routePath, image: '/images/hero1.webp' }))
})


</script>


<style scoped>
.info-text {
    font-size: 25px;
    font-weight: 600;
    line-height: 1.3;
}


@media (max-width: 767px) {

    .info-text {
        font-size: 20px;
    }


}
</style>