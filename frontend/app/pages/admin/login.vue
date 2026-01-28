<template>
    <div class="login-wrapper">
        <div class="login-card">
            <div class="brand">
                <h2>Divine Shelter</h2>
                <p>Admin Portal</p>
            </div>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label>Email Address</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                        <input type="email" v-model="form.email" class="form-control" placeholder="admin@example.com"
                            required>
                    </div>
                </div>

                <div class="form-group mt-3">
                    <label>Password</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-lock"></i></span>
                        <input type="password" v-model="form.password" class="form-control" placeholder="••••••••"
                            required>
                    </div>
                </div>

                <button type="submit" class="btn-login" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    {{ loading ? 'Signing in...' : 'Sign In' }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth-store';
import api from '~/api/end_points/auth';
import Swal from 'sweetalert2';

const form = ref({
    email: '',
    password: ''
});
const loading = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
    loading.value = true;
    try {
        const { data } = await api.login(form.value);
        authStore.login(data.token);

        // Fetch user after token is stored (wait for profile)
        const profileData = await authStore.getProfile();

        if (profileData) {
            Swal.fire({
                icon: 'success',
                title: 'Welcome Back!',
                text: 'Logged in successfully',
                timer: 1500,
                showConfirmButton: false
            });

            // Ensure store state is synchronized before routing
            setTimeout(() => {
                window.location.href = '/admin'; // Force reload/sync
            }, 1500);
        }
    } catch (error: any) {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: error.response?.data?.message || 'Invalid credentials'
        });
    } finally {
        loading.value = false;
    }
}
</script>

<style scoped>
.login-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1a1c23 0%, #2d3748 100%);
}

.login-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 3rem;
    border-radius: 16px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.brand {
    text-align: center;
    margin-bottom: 2rem;
}

.brand h2 {
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 0.5rem;
}

.brand p {
    color: #718096;
    font-size: 0.95rem;
}

.form-group label {
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.input-group-text {
    background: #fff;
    border-right: none;
    color: #a0aec0;
}

.form-control {
    border-left: none;
    padding: 0.75rem;
    font-size: 1rem;
}

.form-control:focus {
    box-shadow: none;
    border-color: #e2e8f0;
}

.form-control:focus+.input-group-text {
    border-color: #4299e1;
}

.btn-login {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.8rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    transition: transform 0.2s;
}

.btn-login:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-login:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
}
</style>
