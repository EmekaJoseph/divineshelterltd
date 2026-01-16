<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo-section">
        <div class="logo-icon">
          <i class="bi bi-building-fill"></i>
        </div>
        <h4 class="logo-text">Divine Shelter</h4>
        <p class="logo-subtitle">Admin Panel</p>
      </div>

      <nav class="nav-menu">
        <NuxtLink to="/admin" class="nav-link" exact-active-class="active">
          <i class="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </NuxtLink>

        <div class="nav-section-title">Content Management</div>

        <NuxtLink to="/admin/blogs" class="nav-link" active-class="active">
          <i class="bi bi-newspaper"></i>
          <span>Blog Posts</span>
        </NuxtLink>

        <NuxtLink to="/admin/quotes" class="nav-link" active-class="active">
          <i class="bi bi-chat-quote"></i>
          <span>Quote Requests</span>
        </NuxtLink>

        <div class="nav-section-title">Analytics</div>

        <NuxtLink to="/admin/visitors" class="nav-link" active-class="active">
          <i class="bi bi-people"></i>
          <span>Visitors</span>
        </NuxtLink>

        <div class="nav-section-title">Configuration</div>

        <NuxtLink to="/admin/company" class="nav-link" active-class="active">
          <i class="bi bi-building"></i>
          <span>Company Info</span>
        </NuxtLink>

        <NuxtLink to="/admin/settings" class="nav-link" active-class="active">
          <i class="bi bi-gear"></i>
          <span>Settings</span>
        </NuxtLink>
      </nav>

      <div class="sidebar-footer">
        <button @click="logout" class="logout-btn">
          <i class="bi bi-box-arrow-left"></i>
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="main-wrapper">
      <!-- Top Bar -->
      <header class="top-bar">
        <div class="breadcrumb-section">
          <h5 class="page-title mb-0">{{ pageTitle }}</h5>
        </div>
        <div class="user-section">
          <div class="user-info">
            <div class="user-avatar">
              <i class="bi bi-person-circle"></i>
            </div>
            <div class="user-details">
              <span class="user-name">{{ authStore.user?.name || 'Admin' }}</span>
              <span class="user-role">Administrator</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="page-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth-store';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const pageTitle = computed(() => {
  const path = route.path;
  if (path === '/admin') return 'Dashboard';
  if (path.includes('/blogs')) return 'Blog Management';
  if (path.includes('/quotes')) return 'Quote Requests';
  if (path.includes('/visitors')) return 'Visitor Analytics';
  if (path.includes('/company')) return 'Company Information';
  if (path.includes('/settings')) return 'Settings';
  return 'Admin Panel';
});

const logout = () => {
  authStore.logout();
  router.push('/admin/login');
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f5f7fa;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Sidebar Styles */
.sidebar {
  width: 280px;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.logo-section {
  padding: 30px 20px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.logo-text {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.logo-subtitle {
  margin: 5px 0 0;
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-menu {
  flex: 1;
  padding: 20px 15px;
  overflow-y: auto;
}

.nav-section-title {
  font-size: 0.7rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 25px 0 10px 15px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 5px;
  color: #cbd5e1;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-link i {
  font-size: 1.2rem;
  width: 24px;
  margin-right: 12px;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  transform: translateX(4px);
}

.nav-link.active {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.sidebar-footer {
  padding: 20px 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.logout-btn {
  width: 100%;
  padding: 12px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

/* Main Wrapper */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Top Bar */
.top-bar {
  background: #fff;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e2e8f0;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
}

.user-role {
  font-size: 0.75rem;
  color: #64748b;
}

/* Page Content */
.page-content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
  background: #f5f7fa;
}

/* Scrollbar Styling */
.sidebar::-webkit-scrollbar,
.page-content::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
