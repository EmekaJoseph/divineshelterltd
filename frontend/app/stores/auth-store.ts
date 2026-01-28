import api from '~/api';

interface PersonInterface {
    id: number;
    name: string;
    email: string;
    isGuest?: Boolean;
}

export const useAuthStore = defineStore('authStore', () => {
    const cookieName = 'divine-shelter-ltd#Tkn';
    const token = useCookie(cookieName, {
        maxAge: 3 * 24 * 60 * 60, // 3 days in seconds
        sameSite: 'lax'
    });
    const person = ref<PersonInterface | null>(null);
    const isGuest = ref<Boolean>(false);

    const isLoggedIn = computed(() => !!token.value);
    const user = computed(() => person.value);

    const login = (authToken: string) => {
        token.value = authToken;

        // window.location.reload();
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
        login,
        logout,
        getProfile
    };
});