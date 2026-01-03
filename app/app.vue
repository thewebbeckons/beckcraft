<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Terrimade'
const description = 'Terrimade is an artisanal quilting studio based in Toronto, Canada'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

const cartOpen = ref(false)
</script>

<template>
  <UApp class="bg-canvas min-h-screen">
    <AppHeader v-model:cart-open="cartOpen" />

    <main class="pt-16">
      <NuxtPage />
    </main>

    <AppFooter />

    <CartSlideover v-model:open="cartOpen" />
  </UApp>
</template>

