import { $instance, $instanceForm } from '../instances'

export default {
    getBuildingMaterials() {
        return $instance.get('/building-materials');
    },

    getBuildingMaterial(id: string | number) {
        return $instance.get(`/building-materials/${id}`);
    },

    createBuildingMaterial(data: FormData) {
        return $instanceForm.post('/building-materials', data);
    },

    updateBuildingMaterial(id: string | number, data: FormData) {
        return $instanceForm.post(`/building-materials/${id}`, data);
    },

    deleteBuildingMaterial(id: string | number) {
        return $instance.delete(`/building-materials/${id}`);
    }
};
