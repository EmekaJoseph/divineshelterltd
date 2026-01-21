export const useBuildingMaterials = () => {
    const materials = computed(() => {
        const categories = [
            'Doors and Windows',
            'Hydraform Bricks',
            'PVC Ceilings',
            'Tiles',
            'Roofing Materials',
            'Finishing Materials'
        ]

        return Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            name: `Material Name ${i + 1}`,
            description: `High-quality building material for your construction needs. This product is durable and reliable.`,
            category: categories[i % categories.length],
            image: `/images/service-${(i % 4 + 1)}.webp` // Reusing existing service images
        }))
    })

    const groupedMaterials = computed(() => {
        const grouped: Record<string, any[]> = {}
        materials.value.forEach(material => {
            const cat = material.category || 'Uncategorized'
            if (!grouped[cat]) {
                grouped[cat] = []
            }
            grouped[cat].push(material)
        })
        return grouped
    })

    return {
        materials,
        groupedMaterials
    }
}
