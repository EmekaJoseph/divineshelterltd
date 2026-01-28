import { $instance } from '../instances'

export default {
    // Get all companies (protected)
    getCompany() {
        return $instance.get(`company`)
    },

    // Update company (protected)
    updateCompany(data: any) {
        return $instance.put(`company`, data)
    },


}
