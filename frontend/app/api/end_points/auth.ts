import { $instance } from '../instances'

export default {
    login(data: any) {
        return $instance.post(`login`, data)
    },

    logout() {
        return $instance.post(`logout`)
    },

    user() {
        return $instance.get(`user`)
    },
}