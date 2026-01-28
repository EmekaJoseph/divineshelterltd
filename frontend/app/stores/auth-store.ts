
import api from '~/api';

interface PersonInterface {
    id: number;
    name: string;
    email: string;
    isGuest?: Boolean;
}

export const useAuthStore = defineStore('authStore', () => {
    const token = useCookie('divine-shelter-ltd#Tkn', {
        maxAge: 3 * 24 * 60 * 60, // 3 days in seconds
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    })
    const person = ref<PersonInterface | null>(null);
    const isGuest = ref<Boolean>(false);

    const isLoggedIn = computed(() => !!token.value);
    const isAuthenticated = computed(() => isLoggedIn.value && !!person.value);
    const user = computed(() => person.value);

    const login = (authToken: string) => {
        token.value = authToken;
    };

    function logout() {
        try {
            api.logout();
        } catch (error) {
            // 
        }
        finally {
            token.value = null;
            person.value = null;
        }
    }

    async function getProfile() {
        try {
            const { data } = await api.user();
            person.value = data;
            return data;
        } catch (error: any) {
            if (error.response?.status === 401) {
                logout();
            }
        }
    }

    return {
        person,
        isGuest,
        user,
        token: readonly(token),
        isLoggedIn,
        isAuthenticated,
        login,
        logout,
        getProfile
    };
});