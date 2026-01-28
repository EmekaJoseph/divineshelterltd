import api from "~/api"

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

    const fetchCompanyProfile = async () => {
        try {
            const { data } = await api.getCompany()
            if (data) {
                name.value = data.name || name.value
                slogan.value = data.slogan || slogan.value
                phone.value = data.phone || phone.value
                email.value = data.email || email.value
                whatsapp.value = data.whatsapp || whatsapp.value
                address.value = data.address || address.value
                facebook.value = data.facebook || facebook.value
                twitter.value = data.twitter || twitter.value
                linkedin.value = data.linkedin || linkedin.value
                instagram.value = data.instagram || instagram.value
            }
        } catch (error) {
            console.error('Failed to fetch company profile:', error)
        }
    }

    onMounted(() => {
        fetchCompanyProfile()
    })

    return {
        name, slogan,
        phone, email, whatsapp,
        address, facebook, twitter,
        linkedin, instagram,
        fetchCompanyProfile
    }
})