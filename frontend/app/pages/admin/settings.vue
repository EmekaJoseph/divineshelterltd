<template>
    <div>
        <h2 class="mb-4 text-primary fw-bold">Settings</h2>

        <div class="row">
            <!-- Company Information -->
            <div class="col-lg-8 mb-4">
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white py-3">
                        <h5 class="mb-0">Company Information</h5>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateCompany">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label">Company Name</label>
                                    <input type="text" v-model="company.name" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Phone</label>
                                    <input type="text" v-model="company.phone" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Email</label>
                                    <input type="email" v-model="company.email" class="form-control">
                                </div>
                                <div class="col-md-12">
                                    <label class="form-label">Description</label>
                                    <textarea v-model="company.description" class="form-control" rows="3"></textarea>
                                </div>
                                <div class="col-md-12">
                                    <label class="form-label">Address</label>
                                    <input type="text" v-model="company.address" class="form-control">
                                </div>
                                <div class="col-12 mt-4">
                                    <h6 class="text-muted">Social Media</h6>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label"><i class="bi bi-facebook text-primary"></i>
                                        Facebook</label>
                                    <input type="text" v-model="company.facebook" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label"><i class="bi bi-instagram text-danger"></i>
                                        Instagram</label>
                                    <input type="text" v-model="company.instagram" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label"><i class="bi bi-whatsapp text-success"></i>
                                        WhatsApp</label>
                                    <input type="text" v-model="company.whatsapp" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label"><i class="bi bi-twitter text-info"></i> Twitter</label>
                                    <input type="text" v-model="company.twitter" class="form-control">
                                </div>

                                <div class="col-12 mt-4 text-end">
                                    <button type="submit" class="btn btn-theme px-4" :disabled="savingCompany">
                                        <span v-if="savingCompany" class="spinner-border spinner-border-sm me-2"></span>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Change Password -->
            <div class="col-lg-4">
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white py-3">
                        <h5 class="mb-0">Security</h5>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="changePassword">
                            <div class="mb-3">
                                <label class="form-label">Current Password</label>
                                <input type="password" v-model="passwordForm.current_password" class="form-control"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">New Password</label>
                                <input type="password" v-model="passwordForm.new_password" class="form-control"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Confirm Password</label>
                                <input type="password" v-model="passwordForm.new_password_confirmation"
                                    class="form-control" required>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-warning text-white" :disabled="changingPassword">
                                    <span v-if="changingPassword" class="spinner-border spinner-border-sm me-2"></span>
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import companyApi from '~/api/end_points/company';
import authApi from '~/api/end_points/auth';
import Swal from 'sweetalert2';

definePageMeta({
    layout: 'admin',
    middleware: 'auth'
});

const company = ref<any>({});
const savingCompany = ref(false);
const passwordForm = ref({
    current_password: '',
    new_password: '',
    new_password_confirmation: ''
});
const changingPassword = ref(false);

const loadCompany = async () => {
    try {
        const { data } = await companyApi.getCompany();
        company.value = data || {};
    } catch (e) {
        console.error('Failed to load company info');
    }
}

const updateCompany = async () => {
    savingCompany.value = true;
    try {
        // ID is not needed as it targets a single-record model
        await companyApi.updateCompany(company.value);
        Swal.fire('Success', 'Company information updated', 'success');
    } catch (error: any) {
        Swal.fire('Error', 'Failed to update company info', 'error');
    } finally {
        savingCompany.value = false;
    }
}

const changePassword = async () => {
    if (passwordForm.value.new_password !== passwordForm.value.new_password_confirmation) {
        Swal.fire('Error', 'Passwords do not match', 'error');
        return;
    }

    changingPassword.value = true;
    try {
        await authApi.changePassword(passwordForm.value);
        Swal.fire('Success', 'Password changed successfully', 'success');
        passwordForm.value = { current_password: '', new_password: '', new_password_confirmation: '' };
    } catch (error: any) {
        Swal.fire('Error', error.response?.data?.message || 'Failed to change password', 'error');
    } finally {
        changingPassword.value = false;
    }
}

onMounted(() => {
    loadCompany();
});
</script>
