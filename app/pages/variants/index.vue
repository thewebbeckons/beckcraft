<script setup lang="ts">
definePageMeta({ layout: 'variants' })

await navigateTo('/variants/v1', { replace: true })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-400 text-sm font-mono">
    Loading variants…
  </div>
</template>
