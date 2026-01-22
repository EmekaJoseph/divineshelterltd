import { $instance } from '../instances'

export default {
    getCategories() {
        return $instance.get('/building-material-categories');
    },

    getCategory(id: string | number) {
        return $instance.get(`/building-material-categories/${id}`);
    },

    createCategory(data: any) {
        return $instance.post('/building-material-categories', data);
    },

    updateCategory(id: string | number, data: any) {
        return $instance.put(`/building-material-categories/${id}`, data);
    },

    deleteCategory(id: string | number) {
        return $instance.delete(`/building-material-categories/${id}`);
    }
};
