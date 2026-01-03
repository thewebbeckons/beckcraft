<template>
  <footer class="bg-warm-300 text-ink">
    <div class="px-6 md:px-10 lg:px-16 py-16">
      <div class="max-w-xl mx-auto text-center">
        <!-- Newsletter -->
        <h3 class="font-serif text-2xl mb-4">Stay Warm</h3>
        <p class="text-sm text-ink-soft mb-6">
          Join our newsletter for new collections and quiet updates.
        </p>
        <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <UInput
            type="email"
            placeholder="your@email.com"
            class="flex-1 bg-canvas border-warm-400 text-ink placeholder:text-ink-soft/50 rounded-full"
          />
          <UButton
            color="primary"
            variant="solid"
            class="rounded-full px-8"
          >
            Subscribe
          </UButton>
        </form>
      </div>

      <div class="flex flex-col items-center pt-12 mt-12 border-t border-warm-400 max-w-7xl mx-auto">
        <p class="text-xs text-ink-soft">
          © {{ new Date().getFullYear() }} Terrimade. Handcrafted in Toronto.
        </p>
      </div>
    </div>
  </footer>
</template>
