<script setup>
const cartOpen = ref(false)
</script>

<template>
  <div>
    <div class="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <AppHeader v-model:cart-open="cartOpen" />
    </div>

    <main>
      <slot />
    </main>

    <AppFooter />

    <CartSlideover v-model:open="cartOpen" />
  </div>
</template>
