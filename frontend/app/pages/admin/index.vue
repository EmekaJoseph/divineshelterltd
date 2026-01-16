<template>
  <div>
    <div class="row g-4 mb-4">
      <!-- Stats Cards -->
      <div class="col-md-6 col-lg-3">
        <NuxtLink to="/admin/blogs" class="text-decoration-none">
          <div class="stat-card">
            <div class="stat-icon bg-gradient-primary">
              <i class="bi bi-newspaper"></i>
            </div>
            <div class="stat-content">
              <h6 class="stat-label">Blog Posts</h6>
              <h3 class="stat-value">--</h3>
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
              <h6 class="stat-label">Quote Requests</h6>
              <h3 class="stat-value">--</h3>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="col-md-6 col-lg-3">
        <NuxtLink to="/admin/visitors" class="text-decoration-none">
          <div class="stat-card">
            <div class="stat-icon bg-gradient-success">
              <i class="bi bi-people"></i>
            </div>
            <div class="stat-content">
              <h6 class="stat-label">Total Visitors</h6>
              <h3 class="stat-value">--</h3>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="col-md-6 col-lg-3">
        <NuxtLink to="/admin/company" class="text-decoration-none">
          <div class="stat-card">
            <div class="stat-icon bg-gradient-info">
              <i class="bi bi-building"></i>
            </div>
            <div class="stat-content">
              <h6 class="stat-label">Company Info</h6>
              <h3 class="stat-value">Manage</h3>
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
              <NuxtLink to="/admin/blogs" class="btn btn-primary">
                <i class="bi bi-plus-circle me-2"></i> New Blog Post
              </NuxtLink>
              <NuxtLink to="/admin/quotes" class="btn btn-outline-warning">
                <i class="bi bi-chat-quote me-2"></i> View Quotes
              </NuxtLink>
              <NuxtLink to="/admin/settings" class="btn btn-outline-secondary">
                <i class="bi bi-gear me-2"></i> Settings
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
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
</style>
