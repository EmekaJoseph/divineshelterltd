<template>
  <NuxtLoadingIndicator color="#764ba2" :height="3" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import visitorApi from '~/api/end_points/visitor';

const route = useRoute();

// Track visitor on initial load and route changes
const trackVisitor = async () => {
  try {
    await visitorApi.recordVisitor({
      page_url: window.location.href,
      referrer: document.referrer || null
    });
  } catch (error) {
    // Silently fail - visitor tracking shouldn't break the app
    console.error('Failed to track visitor:', error);
  }
};

// Track on mount
onMounted(() => {
  trackVisitor();
});

// Track on route change
watch(() => route.fullPath, () => {
  trackVisitor();
});
</script>
