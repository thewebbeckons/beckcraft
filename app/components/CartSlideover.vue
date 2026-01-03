<script setup lang="ts">
const isOpen = defineModel<boolean>('open', { default: false })

// Placeholder cart items - replace with actual cart logic later
const cartItems = ref<{ name: string; price: number; quantity: number }[]>([])

const cartTotal = computed(() => 
  cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
)

const itemCount = computed(() => 
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
)
</script>

<template>
  <USlideover
    v-model:open="isOpen"
    title="Your Bag"
    :description="itemCount > 0 ? `${itemCount} item${itemCount === 1 ? '' : 's'}` : undefined"
    side="right"
  >
    <template #body>
      <!-- Empty State -->
      <div v-if="cartItems.length === 0" class="flex flex-col items-center justify-center h-full text-center py-16">
        <div class="w-16 h-16 bg-warm-200 rounded-full flex items-center justify-center mb-6">
          <UIcon name="i-lucide-shopping-bag" class="w-8 h-8 text-ink-soft" />
        </div>
        <h3 class="font-serif text-xl text-ink mb-2">Your bag is empty</h3>
        <p class="text-ink-soft text-sm max-w-xs">
          Explore our collection and find the perfect quilt for your home.
        </p>
        <UButton
          class="mt-6 rounded-full"
          color="primary"
          variant="soft"
          @click="isOpen = false"
        >
          Continue Shopping
        </UButton>
      </div>

      <!-- Cart Items -->
      <div v-else class="space-y-6">
        <div
          v-for="item in cartItems"
          :key="item.name"
          class="flex gap-4 pb-6 border-b border-warm-200"
        >
          <div class="w-20 h-20 bg-warm-100 rounded-lg flex-shrink-0" />
          <div class="flex-1">
            <h4 class="font-serif text-ink">{{ item.name }}</h4>
            <p class="text-sm text-ink-soft">Qty: {{ item.quantity }}</p>
            <p class="text-sage-600 font-medium mt-1">${{ item.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </template>

    <template v-if="cartItems.length > 0" #footer>
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <span class="font-serif text-lg text-ink">Subtotal</span>
          <span class="text-lg font-medium text-sage-600">${{ cartTotal.toFixed(2) }}</span>
        </div>
        <UButton
          color="primary"
          class="w-full rounded-full"
          size="lg"
        >
          Checkout
        </UButton>
        <p class="text-xs text-ink-soft text-center">
          Shipping calculated at checkout
        </p>
      </div>
    </template>
  </USlideover>
</template>
