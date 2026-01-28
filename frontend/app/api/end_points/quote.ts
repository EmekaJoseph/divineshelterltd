import { $instance, $instanceForm } from '../instances'

export default {
    // Submit quote request (public)
    submitQuote(data: FormData) {
        return $instanceForm.post(`quotes`, data)
    },

    // Get all quotes (protected - admin)
    getQuotes() {
        return $instance.get(`quotes`)
    },

    // Get specific quote (protected - admin)
    getQuote(id: string) {
        return $instance.get(`quotes/${id}`)
    },

    // Delete quote (protected - admin)
    deleteQuote(id: string) {
        return $instance.delete(`quotes/${id}`)
    },
}
