export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()

    const isAdminPath = to.path.startsWith('/admin')
    const isLoginPage = to.path === '/admin/login'

    // If trying to access admin pages and not logged in, redirect to login
    if (isAdminPath && !isLoginPage && !authStore.isLoggedIn) {
        return navigateTo('/admin/login')
    }

    // If logged in and on login page, redirect to admin dashboard
    if (isLoginPage && authStore.isLoggedIn) {
        return navigateTo('/admin')
    }
})
