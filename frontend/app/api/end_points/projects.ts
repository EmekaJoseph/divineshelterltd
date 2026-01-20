import { $instance, $instanceForm } from '../instances'

export default {
    getProjects() {
        return $instance.get('/projects');
    },

    getProject(id: string | number) {
        return $instance.get(`/projects/${id}`);
    },

    createProject(data: FormData) {
        return $instanceForm.post('/projects', data);
    },

    updateProject(id: string | number, data: FormData) {
        return $instanceForm.post(`/projects/${id}`, data);
    },

    deleteProject(id: string | number) {
        return $instance.delete(`/projects/${id}`);
    }
};
