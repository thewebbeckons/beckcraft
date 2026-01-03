<script setup lang="ts">
const cartOpen = defineModel<boolean>('cartOpen', { default: false })
const cartCount = ref(0)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-sm border-b border-warm-200">
    <div class="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="font-serif text-2xl text-ink tracking-tight hover:text-sage-600 transition-colors">
        Terrimade
      </NuxtLink>

      <!-- Cart Button -->
      <button
        class="text-xs font-sans uppercase tracking-widest text-ink-soft hover:text-sage-500 transition-colors duration-300"
        @click="cartOpen = true"
      >
        Bag ({{ cartCount }})
      </button>
    </div>
  </header>
</template>
