import { $instance } from '../instances'

export default {
    // Record visitor (public endpoint)
    recordVisitor(data: any) {
        return $instance.post(`visitors`, data)
    },

    // Get all visitors (protected)
    getVisitors(page: number = 1) {
        return $instance.get(`visitors?page=${page}`)
    },

    // Get specific visitor (protected)
    getVisitor(id: number) {
        return $instance.get(`visitors/${id}`)
    },

    // Update visitor (protected)
    updateVisitor(id: number, data: any) {
        return $instance.put(`visitors/${id}`, data)
    },

    // Delete visitor (protected)
    deleteVisitor(id: number) {
        return $instance.delete(`visitors/${id}`)
    },
}
