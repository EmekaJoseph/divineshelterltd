
export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()

    if (!authStore.isLoggedIn && to.path.startsWith('/admin') && to.path !== '/admin/login') {
        return navigateTo('/admin/login')
    }

    if (authStore.isLoggedIn && to.path === '/admin/login') {
        return navigateTo('/admin')
    }
})
