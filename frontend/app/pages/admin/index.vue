<template>
  <div class="admin-page-container">
    <div class="row g-4 mb-4">
      <!-- Stats Cards -->
      <div class="col-md-6 col-lg-3">
        <NuxtLink to="/admin/visitors" class="text-decoration-none">
          <div class="stat-card">
            <div class="stat-icon bg-gradient-success">
              <i class="bi bi-people"></i>
            </div>
            <div class="stat-content">
              <h6 class="stat-label">Total Visitors</h6>
              <h3 v-if="isLoading" class="skeleton skeleton-text w-50"></h3>
              <h3 v-else class="stat-value">{{ stats.visitors }}</h3>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="col-md-6 col-lg-3">
        <NuxtLink to="/admin/projects" class="text-decoration-none">
          <div class="stat-card">
            <div class="stat-icon bg-gradient-primary">
              <i class="bi bi-briefcase"></i>
            </div>
            <div class="stat-content">
              <h6 class="stat-label">Projects</h6>
              <h3 v-if="isLoading" class="skeleton skeleton-text w-50"></h3>
              <h3 v-else class="stat-value">{{ stats.projects }}</h3>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="col-md-6 col-lg-3">
        <NuxtLink to="/admin/materials" class="text-decoration-none">
          <div class="stat-card">
            <div class="stat-icon bg-gradient-info">
              <i class="bi bi-bricks"></i>
            </div>
            <div class="stat-content">
              <h6 class="stat-label">Materials</h6>
              <h3 v-if="isLoading" class="skeleton skeleton-text w-50"></h3>
              <h3 v-else class="stat-value">{{ stats.materials }}</h3>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="col-md-6 col-lg-3">
        <NuxtLink to="/admin/quotes" class="text-decoration-none">
          <div class="stat-card">
            <div class="stat-icon bg-gradient-warning">
              <i class="bi bi-chat-quote"></i>
            </div>
            <div class="stat-content">
              <h6 class="stat-label">Quotes Requests</h6>
              <h3 v-if="isLoading" class="skeleton skeleton-text w-50"></h3>
              <h3 v-else class="stat-value">{{ stats.quotes }}</h3>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="row">
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-4 fw-bold">Quick Actions</h5>
            <div class="d-flex flex-wrap gap-3">
              <NuxtLink to="/admin/projects/manage" class="btn btn-theme">
                <i class="bi bi-plus-circle me-2"></i> New Project
              </NuxtLink>
              <NuxtLink to="/admin/materials/manage" class="btn btn-info text-white">
                <i class="bi bi-plus-circle me-2"></i> New Material
              </NuxtLink>
              <NuxtLink to="/admin/quotes" class="btn btn-outline-warning">
                <i class="bi bi-chat-quote me-2"></i> View Quotes
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '~/api';

definePageMeta({
  layout: 'admin',
  middleware: 'auth'
});

const stats = ref({
  visitors: '0',
  projects: '0',
  materials: '0',
  quotes: '0'
});

const isLoading = ref(false);

const loadStats = async () => {
  isLoading.value = true;
  try {
    const [vResp, pResp, mResp, qResp] = await Promise.all([
      api.getVisitors(),
      api.getProjects(),
      api.getBuildingMaterials(),
      api.getQuotes()
    ]);

    stats.value.visitors = vResp.data.total || vResp.data.data?.length || 0;
    stats.value.projects = pResp.data.length || 0;
    stats.value.materials = mResp.data.length || 0;
    stats.value.quotes = qResp.data.quotes?.length || 0;
  } catch (error) {
    console.error('Failed to load dashboard stats:', error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadStats();
});
</script>

<style scoped>
.stat-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  flex-shrink: 0;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-gradient-warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.bg-gradient-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.bg-gradient-info {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 8px;
  font-weight: 500;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.card {
  border-radius: 16px;
}

.skeleton {
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;
}

.skeleton-text {
  height: 2rem;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}
</style>
