import api from "~/api"

export const useBuildingMaterials = () => {
    const materials = ref<any[]>([])
    const categories = ref<any[]>([])
    const isLoading = ref(false)

    const fetchMaterials = async () => {
        isLoading.value = true
        try {
            const { data } = await api.getBuildingMaterials()
            materials.value = data
        } catch (error) {
            console.error('Failed to fetch materials:', error)
        } finally {
            isLoading.value = false
        }
    }

    const fetchCategories = async () => {
        try {
            const { data } = await api.getCategories()
            categories.value = data
        } catch (error) {
            console.error('Failed to fetch categories:', error)
        }
    }

    onMounted(() => {
        fetchMaterials()
        fetchCategories()
    })

    return {
        materials,
        categories,
        isLoading,
        fetchMaterials,
        fetchCategories
    }
}
