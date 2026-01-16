import { $instance, $instanceForm } from '../instances'

export default {
    // Get all blogs (public)
    getBlogs() {
        return $instance.get(`blogs`)
    },

    // Get specific blog (public)
    getBlog(id: number) {
        return $instance.get(`blogs/${id}`)
    },

    // Create blog (protected)
    createBlog(data: FormData) {
        return $instanceForm.post(`blogs`, data)
    },

    // Update blog (protected)
    updateBlog(id: number, data: FormData) {
        return $instanceForm.post(`blogs/${id}`, data)
    },

    // Delete blog (protected)
    deleteBlog(id: number) {
        return $instance.delete(`blogs/${id}`)
    },
}
