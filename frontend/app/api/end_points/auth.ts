import { $instance, $instanceForm } from '../instances'

export default {

    register(data: any) {
        return $instance.post(`register`, JSON.stringify(data))
    },


    login(data: any) {
        return $instance.post(`login`, JSON.stringify(data))
    },


    logout() {
        return $instance.get(`logout`)
    },

    profile() {
        return $instance.get(`profile`)
    },
}