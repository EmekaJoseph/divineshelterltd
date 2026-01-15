import { $instance } from '../instances'

export default {
    // Record visitor (public endpoint)
    recordVisitor(data: any) {
        return $instance.post(`visitors`, data)
    },

    // Get all visitors (protected)
    getVisitors() {
        return $instance.get(`visitors`)
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
