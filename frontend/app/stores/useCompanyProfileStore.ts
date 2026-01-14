export const useCompanyProfileStore = defineStore('CompanyProfileStore', () => {


    const name = ref('Divine Shelter Construction Services Ltd')
    const slogan = ref('Leaders in Alternative Building Technology')
    const phone = ref('+2348062138803')
    const email = ref('divineshelterltd@gmail.com')
    const whatsapp = ref('+2348062138803')
    const address = ref('120 Epe/Ijebu-Ode Expressway, Odomola, Epe, Lagos State')
    const facebook = ref('')
    const twitter = ref('')
    const linkedin = ref('')
    const instagram = ref('')



    return {
        name, slogan,
        phone, email, whatsapp,
        address, facebook, twitter,
        linkedin, instagram
    }
})