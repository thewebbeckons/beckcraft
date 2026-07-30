<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 5: Patchwork',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Work+Sans:wght@300;400;500&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()

// quilt-block palette used across the page
const patches = ['#33566B', '#A6492E', '#D9C8A9', '#7A8B7A', '#C97B4A', '#E8E2D4']
</script>

<template>
  <div class="v5 min-h-screen bg-[#EEF0EF] text-[#2C2A26] antialiased">
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="border-b-2 border-[#2C2A26]">
      <div class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <!-- pinwheel mark -->
          <svg
            viewBox="0 0 24 24"
            class="size-7"
            aria-hidden="true"
          >
            <path
              d="M12 12 12 0 24 0Z"
              fill="#A6492E"
            />
            <path
              d="M12 12 24 12 24 24Z"
              fill="#33566B"
            />
            <path
              d="M12 12 12 24 0 24Z"
              fill="#D9C8A9"
            />
            <path
              d="M12 12 0 12 0 0Z"
              fill="#7A8B7A"
            />
          </svg>
          <span class="font-display text-2xl font-semibold tracking-tight">beckcraft</span>
        </div>
        <nav class="flex items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-[#2C2A26]/60">
          <a
            href="#goods"
            class="hover:text-[#A6492E] transition-colors hidden sm:inline"
          >Goods</a>
          <a
            href="#about"
            class="hover:text-[#A6492E] transition-colors hidden sm:inline"
          >The family</a>
          <a
            href="#goods"
            class="bg-[#2C2A26] text-[#EEF0EF] px-5 py-2.5 hover:bg-[#A6492E] transition-colors"
          >Shop</a>
        </nav>
      </div>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="max-w-6xl mx-auto px-6 py-14 md:py-20">
      <div class="grid lg:grid-cols-2 border-2 border-[#2C2A26] bg-[#F5F3EC]">
        <!-- Copy panel -->
        <div class="p-8 md:p-14 flex flex-col justify-center relative">
          <!-- stitched inner seam -->
          <div class="absolute inset-3 border border-dashed border-[#2C2A26]/25 pointer-events-none" />
          <div class="relative">
            <p class="font-hand text-3xl text-[#A6492E] mb-4">
              stitched, dotted, sanded & painted
            </p>
            <h1 class="font-display text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Handmade,<br>
              the way<br>
              <span class="text-[#33566B]">grandma</span> meant it.
            </h1>
            <p class="mt-6 max-w-sm text-[15px] leading-relaxed text-[#2C2A26]/70">
              Quilts, diamond dot paintings, small wooden goods and artwork — made by
              our family in Toronto and sent to homes that'll love them.
            </p>
            <div class="mt-9 flex flex-wrap gap-4">
              <a
                href="#goods"
                class="bg-[#A6492E] text-[#F5F3EC] px-8 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-[#2C2A26] transition-colors duration-300"
              >
                See the goods
              </a>
              <a
                href="#about"
                class="border-2 border-[#2C2A26] px-8 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-[#2C2A26] hover:text-[#F5F3EC] transition-colors duration-300"
              >
                Meet us
              </a>
            </div>
          </div>
        </div>

        <!-- Patch panel: 2x2 quilt block -->
        <div class="grid grid-cols-2 border-t-2 lg:border-t-0 lg:border-l-2 border-[#2C2A26]">
          <div class="relative overflow-hidden aspect-square border-b-2 border-r-2 border-[#2C2A26]">
            <NuxtImg
              src="/hero.png"
              alt="Patchwork quilt on a wooden bed"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div class="relative aspect-square border-b-2 border-[#2C2A26] bg-[#33566B] p-6 flex items-end">
            <svg
              viewBox="0 0 24 24"
              class="size-12 absolute top-6 left-6"
              aria-hidden="true"
            >
              <path
                d="M12 12 12 0 24 0Z"
                fill="#EEF0EF"
              />
              <path
                d="M12 12 24 12 24 24Z"
                fill="#A6492E"
              />
              <path
                d="M12 12 12 24 0 24Z"
                fill="#D9C8A9"
              />
              <path
                d="M12 12 0 12 0 0Z"
                fill="#EEF0EF"
              />
            </svg>
            <p class="font-display text-2xl text-[#EEF0EF] leading-tight">
              Every piece<br>one of a kind
            </p>
          </div>
          <div class="relative aspect-square border-r-2 border-[#2C2A26] bg-[#D9C8A9] p-6 flex items-start justify-end">
            <p class="font-display text-2xl text-[#2C2A26] leading-tight text-right">
              Small batches,<br>no two alike
            </p>
            <div
              class="absolute bottom-0 left-0 w-full h-1/2 bg-[#7A8B7A]"
              style="clip-path: polygon(0 100%, 100% 0, 100% 100%)"
            />
          </div>
          <div class="relative overflow-hidden aspect-square">
            <NuxtImg
              src="/quilt.png"
              alt="Folded quilt on an old chair"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- rickrack divider -->
      <svg
        class="w-full h-4 mt-14 text-[#A6492E]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <pattern
          id="rickrack"
          width="24"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 12 L6 4 L12 12 L18 4 L24 12"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          />
        </pattern>
        <rect
          width="100%"
          height="100%"
          fill="url(#rickrack)"
        />
      </svg>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-2"
    >
      <div class="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p class="font-hand text-3xl text-[#A6492E] mb-1">
            on the table now
          </p>
          <h2 class="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            This week's goods
          </h2>
        </div>
        <p class="text-xs uppercase tracking-[0.2em] text-[#2C2A26]/50">
          Diamond dots & more added as they're finished
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-[#2C2A26] bg-[#2C2A26] gap-[2px]">
        <article
          v-for="(p, i) in products"
          :key="p.name"
          class="group bg-[#F5F3EC] p-5 cursor-pointer hover:bg-[#EEF0EF] transition-colors"
        >
          <div class="relative overflow-hidden mb-5 border-2 border-[#2C2A26]">
            <NuxtImg
              :src="p.image"
              :alt="p.name"
              class="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span
              class="absolute top-0 left-0 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#F5F3EC]"
              :style="{ backgroundColor: patches[i % patches.length] }"
            >
              {{ p.category }}
            </span>
          </div>
          <h3 class="font-display text-xl font-semibold leading-snug">
            {{ p.name }}
          </h3>
          <p class="mt-1 text-xs italic text-[#2C2A26]/55">
            {{ p.maker }}
          </p>
          <div class="mt-4 pt-3 border-t border-dashed border-[#2C2A26]/30 flex items-center justify-between">
            <span class="font-display text-lg font-semibold text-[#A6492E]">${{ p.price }}</span>
            <span class="text-[10px] uppercase tracking-[0.2em] text-[#2C2A26]/50 group-hover:text-[#33566B] transition-colors">
              Add to bag →
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- ═══════════ ABOUT ═══════════ -->
    <section
      id="about"
      class="bg-[#33566B] text-[#F5F3EC] border-y-2 border-[#2C2A26]"
    >
      <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <!-- patch column -->
          <div class="lg:col-span-4 grid grid-cols-3 gap-[2px] bg-[#2C2A26] border-2 border-[#2C2A26] rotate-[-1.5deg]">
            <div
              v-for="(patch, i) in 9"
              :key="i"
              class="aspect-square"
              :style="{ backgroundColor: patches[i % patches.length] }"
            >
              <div
                v-if="i === 4"
                class="w-full h-full flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="size-8"
                  aria-hidden="true"
                >
                  <path
                    d="M12 12 12 0 24 0Z"
                    fill="#A6492E"
                  />
                  <path
                    d="M12 12 24 12 24 24Z"
                    fill="#33566B"
                  />
                  <path
                    d="M12 12 12 24 0 24Z"
                    fill="#D9C8A9"
                  />
                  <path
                    d="M12 12 0 12 0 0Z"
                    fill="#F5F3EC"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="lg:col-span-8">
            <p class="font-hand text-3xl text-[#D9C8A9] mb-3">
              nine hands, one table
            </p>
            <h2 class="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              The family behind<br>the stitches.
            </h2>
            <div class="mt-7 max-w-xl space-y-5 text-[15px] leading-relaxed text-[#F5F3EC]/80">
              <p>
                Beckcraft is our family's answer to "what did you do this weekend?"
                Mom pieces quilts and works the diamond dots, Dad disappears into the
                garage with maple and walnut, and the rest of us paint, photograph,
                pack and post.
              </p>
              <p>
                Everything is made in our Toronto home — slowly, in ones and twos —
                and listed here the moment it's ready.
              </p>
            </div>
            <div class="mt-10 flex flex-wrap gap-3">
              <span
                v-for="tag in ['Hand-quilted', 'Diamond dot paintings', 'Ontario hardwood', 'Original artwork']"
                :key="tag"
                class="border border-dashed border-[#F5F3EC]/40 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#F5F3EC]/75"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="bg-[#A6492E] text-[#F5F3EC]">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-dashed border-[#F5F3EC]/30">
          <div>
            <p class="font-hand text-3xl text-[#E8D9C0] mb-2">
              from our table to yours
            </p>
            <h2 class="font-display text-3xl md:text-4xl font-semibold">
              Get a note when new goods land.
            </h2>
          </div>
          <form class="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 md:w-64 bg-[#F5F3EC] text-[#2C2A26] px-5 py-3.5 text-sm placeholder:text-[#2C2A26]/45 focus:outline-none border-2 border-[#2C2A26]"
            >
            <button
              type="submit"
              class="bg-[#2C2A26] px-7 text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-[#33566B] transition-colors"
            >
              Join
            </button>
          </form>
        </div>
        <div class="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#F5F3EC]/70">
          <div class="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              class="size-5"
              aria-hidden="true"
            >
              <path
                d="M12 12 12 0 24 0Z"
                fill="#F5F3EC"
              />
              <path
                d="M12 12 24 12 24 24Z"
                fill="#33566B"
              />
              <path
                d="M12 12 12 24 0 24Z"
                fill="#D9C8A9"
              />
              <path
                d="M12 12 0 12 0 0Z"
                fill="#F5F3EC"
              />
            </svg>
            <span class="font-display text-base font-semibold text-[#F5F3EC]">beckcraft</span>
          </div>
          <p>Quilts · Diamond dots · Woodwork · Artwork</p>
          <p>© {{ year }} The Beck Family — Handmade in Toronto</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v5 {
  font-family: 'Work Sans', ui-sans-serif, system-ui, sans-serif;
}
.font-display {
  font-family: 'Zilla Slab', Georgia, serif;
}
.font-hand {
  font-family: 'Dancing Script', cursive;
}
</style>
