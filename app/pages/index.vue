<template>
  <div class="overflow-x-hidden bg-canvas">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden py-20 md:py-32">
      <!-- Warm Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-canvas via-warm-100 to-warm-200" />
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          class="absolute top-1/4 right-1/4 w-3 h-3 bg-sage-300/40 rounded-full animate-float"
          style="animation-delay: 0s; animation-duration: 7s;"
        />
        <div 
          class="absolute top-1/2 right-1/3 w-2 h-2 bg-sage-400/30 rounded-full animate-float"
          style="animation-delay: 2s; animation-duration: 9s;"
        />
        <div 
          class="absolute bottom-1/3 left-1/4 w-4 h-4 bg-warm-400/30 rounded-full animate-float"
          style="animation-delay: 4s; animation-duration: 8s;"
        />
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Content -->
          <div class="order-2 lg:order-1">
            <span class="text-xs font-sans uppercase tracking-widest text-sage-500 mb-4 block animate-fade-in">
              New Collection
            </span>
            <h1 
              class="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] mb-6 animate-fade-in-up"
              style="animation-delay: 0.1s;"
            >
              The Sunday<br />
              <em class="font-light">Collection</em>
            </h1>
            <p 
              class="text-lg md:text-xl text-ink-soft leading-relaxed mb-10 max-w-lg animate-fade-in-up"
              style="animation-delay: 0.2s;"
            >
              Hand-stitched layers of organic cotton, designed for slow mornings and long winters.
            </p>
            <div 
              class="animate-fade-in-up"
              style="animation-delay: 0.3s;"
            >
              <UButton
                size="xl"
                color="primary"
                variant="solid"
                class="rounded-full px-8 py-4 shadow-warm-lg hover:shadow-warm-xl transition-all duration-300"
                @click="$el.closest('section').nextElementSibling?.scrollIntoView({ behavior: 'smooth' })"
              >
                Shop Collection
              </UButton>
            </div>
          </div>

          <!-- Hero Image / Quilt Stack -->
          <div class="order-1 lg:order-2 relative">
            <div class="relative animate-float-gentle">
              <NuxtImg
                src="/hero.png"
                alt="Stack of handcrafted quilts"
                class="w-full h-auto rounded-lg shadow-warm-xl"
              />
              <!-- Soft overlay to warm the image -->
              <div class="absolute inset-0 bg-gradient-to-t from-warm-200/20 to-transparent rounded-lg pointer-events-none" />
            </div>
            <!-- Floating fabric swatch -->
            <div 
              class="absolute -bottom-8 -left-8 w-32 h-32 bg-sage-100 rounded-lg shadow-warm-lg animate-float hidden lg:block"
              style="animation-delay: 1s; animation-duration: 5s;"
            />
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-ink/20 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-ink/30 rounded-full mt-2" />
        </div>
      </div>
    </section>

    <!-- Featured Collection Section -->
    <section class="py-20 md:py-32 bg-canvas">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-xs font-sans uppercase tracking-widest text-sage-500 mb-3 block">
            Handcrafted
          </span>
          <h2 class="font-serif text-4xl md:text-5xl text-ink mb-4">
            Featured Collection
          </h2>
          <p class="text-ink-soft text-lg max-w-xl mx-auto">
            Each quilt stitched with care, designed for lasting comfort
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div
            v-for="(product, index) in products"
            :key="product.name"
            class="product-card group"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="bg-warm-100 rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1">
              <!-- Image -->
              <div class="aspect-square overflow-hidden relative">
                <NuxtImg
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-warm-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <!-- Content -->
              <div class="p-5">
                <h3 class="font-serif text-lg text-ink mb-1">{{ product.name }}</h3>
                <p class="font-mono text-sm text-ink-soft mb-3">{{ product.specs }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-lg font-sans font-medium text-sage-600">
                    ${{ product.price.toFixed(2) }}
                  </span>
                  <UButton
                    size="sm"
                    color="primary"
                    variant="soft"
                    class="rounded-full"
                  >
                    View
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 md:py-32 bg-warm-200">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <NuxtImg
              src="/quilt.png"
              alt="Craftsmanship detail"
              class="w-full h-auto rounded-lg shadow-warm-lg"
            />
          </div>
          <div>
            <span class="text-xs font-sans uppercase tracking-widest text-sage-500 mb-4 block">
              Our Process
            </span>
            <h2 class="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              Warmth,<br />
              <em class="font-light">Redefined</em>
            </h2>
            <p class="text-ink-soft text-lg leading-relaxed mb-6">
              Every quilt begins with a conversation — about comfort, about memory, about the spaces we call home. We source organic cotton from small farms, piece by hand, and stitch with intention.
            </p>
            <p class="text-ink-soft text-lg leading-relaxed mb-8">
              The result is more than a blanket. It's an heirloom.
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Product {
  name: string
  specs: string
  price: number
  image: string
}

const products = ref<Product[]>([
  {
    name: 'Sunday Morning',
    specs: '60×80in · 100% Cotton',
    price: 285,
    image: '/quilt.png'
  },
  {
    name: 'Winter Linen',
    specs: '70×90in · Linen Blend',
    price: 345,
    image: '/quilt.png'
  },
  {
    name: 'Baby\'s First',
    specs: '36×48in · Organic Cotton',
    price: 165,
    image: '/quilt.png'
  },
  {
    name: 'Weighted Calm',
    specs: '60×80in · 15lb Fill',
    price: 425,
    image: '/quilt.png'
  }
])
</script>

<style scoped>
.product-card {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
