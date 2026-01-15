<template>
  <div>
    <h2 class="mb-4 text-primary fw-bold">Dashboard</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card stat-card bg-white border-0 h-100">
          <div class="card-body d-flex align-items-center">
            <div class="icon-wrapper bg-soft-primary text-primary">
              <i class="bi bi-building"></i>
            </div>
            <div class="ms-3">
              <h6 class="text-muted mb-1">Company Info</h6>
              <h4 class="mb-0">Manage</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card stat-card bg-white border-0 h-100">
            <NuxtLink to="/admin/blogs" style="text-decoration:none; color:inherit;">
                <div class="card-body d-flex align-items-center">
                    <div class="icon-wrapper bg-soft-success text-success">
                    <i class="bi bi-newspaper"></i>
                    </div>
                    <div class="ms-3">
                    <h6 class="text-muted mb-1">Blogs</h6>
                    <h4 class="mb-0">Manage</h4>
                    </div>
                </div>
            </NuxtLink>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card stat-card bg-white border-0 h-100">
          <div class="card-body d-flex align-items-center">
            <div class="icon-wrapper bg-soft-warning text-warning">
              <i class="bi bi-people"></i>
            </div>
            <div class="ms-3">
              <h6 class="text-muted mb-1">Visitors</h6>
              <h4 class="mb-0">View</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-4">Quick Actions</h5>
            <div class="d-flex gap-3">
                <NuxtLink to="/admin/settings" class="btn btn-outline-primary">
                    <i class="bi bi-gear me-2"></i> Update Settings
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
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s;
  cursor: pointer;
}
.stat-card:hover {
  transform: translateY(-5px);
}
.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
.bg-soft-primary { background: rgba(13, 110, 253, 0.1); }
.bg-soft-success { background: rgba(25, 135, 84, 0.1); }
.bg-soft-warning { background: rgba(255, 193, 7, 0.1); }
</style>
