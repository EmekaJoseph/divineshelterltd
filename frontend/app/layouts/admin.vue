<template>
  <div class="admin-layout">
    <div class="sidebar">
      <div class="logo-container">
        <h3>Divine Admin</h3>
      </div>
      <nav class="nav-links">
        <NuxtLink to="/admin" class="nav-item">
          <i class="bi bi-speedometer2"></i> Dashboard
        </NuxtLink>
        <NuxtLink to="/admin/settings" class="nav-item">
          <i class="bi bi-gear"></i> Settings
        </NuxtLink>
      </nav>
      <div class="logout-container">
        <button @click="logout" class="logout-btn">
          <i class="bi bi-box-arrow-right"></i> Logout
        </button>
      </div>
    </div>
    <div class="main-content">
      <header class="top-bar">
        <div class="d-flex align-items-center">
          <h6 class="mb-0 me-3">Welcome, {{ authStore.user?.name || 'Admin' }}</h6>
          <button @click="logout" class="btn btn-sm btn-outline-danger d-flex align-items-center gap-2">
            <i class="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </header>
      <div class="page-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth-store';
const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/admin/login');
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Inter', sans-serif;
}

.sidebar {
  width: 260px;
  background: #1a1c23;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.logo-container h3 {
  margin-top: 0;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
}

.nav-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #a0aec0;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-item i {
  margin-right: 12px;
  font-size: 1.2rem;
}

.nav-item:hover,
.nav-item.router-link-active {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: translateX(5px);
}

.logout-container {
  margin-top: auto;
}

.logout-btn {
  width: 100%;
  background: #e53e3e;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: #c53030;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.top-bar {
  background: #fff;
  padding: 15px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  font-weight: 600;
  color: #4a5568;
}

.page-content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}
</style>
