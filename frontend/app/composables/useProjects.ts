export const useProjects = () => {
    const projects = computed(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            title: `Project Title ${i + 1}`,
            location: ['Lagos, Nigeria', 'Abuja, FCT', 'Port Harcourt', 'Enugu', 'Kano'][i % 5],
            image: `/images/service-${(i % 4 + 1)}.webp` // Cycling through existing images, starting from 1
        }))
    })

    return {
        projects
    }
}
