import api from "~/api"

export const useProjects = () => {
    const projects = ref<any[]>([])
    const isLoading = ref(false)

    const fetchProjects = async () => {
        isLoading.value = true
        try {
            const { data } = await api.getProjects()
            projects.value = data
        } catch (error) {
            console.error('Failed to fetch projects:', error)
        } finally {
            isLoading.value = false
        }
    }

    onMounted(() => {
        fetchProjects()
    })

    return {
        projects,
        isLoading,
        fetchProjects
    }
}
