<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 3: Cottage',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()
const activeProduct = ref(0)
</script>

<template>
  <div class="v3 min-h-screen bg-[#FBFAF6] text-[#23211C] antialiased">
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="max-w-6xl mx-auto px-6 md:px-10 py-8 flex items-center justify-between">
      <span class="font-display text-3xl tracking-tight">Beckcraft</span>
      <nav class="flex items-center gap-8 text-[11px] font-light uppercase tracking-[0.25em] text-[#23211C]/60">
        <a
          href="#goods"
          class="hover:text-[#B87E2E] transition-colors hidden sm:inline"
        >Goods</a>
        <a
          href="#about"
          class="hover:text-[#B87E2E] transition-colors hidden sm:inline"
        >Family</a>
        <a
          href="#write"
          class="hover:text-[#B87E2E] transition-colors"
        >Write to us</a>
      </nav>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="max-w-6xl mx-auto px-6 md:px-10 pt-14 md:pt-24 pb-24 md:pb-36">
      <p class="text-[11px] font-light uppercase tracking-[0.4em] text-[#B87E2E] mb-8">
        Quilts — Diamond dots — Woodwork — Artwork
      </p>
      <h1 class="font-display font-light text-[15vw] sm:text-8xl lg:text-[7.5rem] leading-[0.98] tracking-tight">
        Things made<br>
        <span class="relative inline-block italic">
          by hand,
          <svg
            class="absolute left-0 -bottom-2 md:-bottom-4 w-full"
            viewBox="0 0 300 14"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M3 10C60 4 150 3 297 8"
              stroke="#B87E2E"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </span><br>
        kept forever.
      </h1>
      <div class="mt-14 flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-14">
        <p class="max-w-sm text-[15px] font-light leading-relaxed text-[#23211C]/65">
          A small family workshop in Toronto. We quilt, we dot, we turn wood and we
          paint — and every so often, a few pieces are ready to find a home.
        </p>
        <a
          href="#goods"
          class="group inline-flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-[#23211C] shrink-0"
        >
          <span class="size-14 rounded-full border border-[#23211C]/30 flex items-center justify-center group-hover:bg-[#B87E2E] group-hover:border-[#B87E2E] group-hover:text-[#FBFAF6] transition-all duration-300">
            ↓
          </span>
          See this week's goods
        </a>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="border-t border-[#23211C]/10"
    >
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div class="flex items-baseline justify-between mb-12">
          <h2 class="font-display font-light text-4xl md:text-6xl tracking-tight">
            The goods <em class="text-[#B87E2E]">({{ products.length }})</em>
          </h2>
          <span class="hidden md:block text-[11px] font-light uppercase tracking-[0.3em] text-[#23211C]/45">
            Updated when pieces are finished
          </span>
        </div>

        <div>
          <article
            v-for="(p, i) in products"
            :key="p.name"
            class="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto_140px] items-center gap-5 md:gap-8 py-7 md:py-9 border-t border-[#23211C]/12 last:border-b cursor-pointer"
            @mouseenter="activeProduct = i"
          >
            <span class="font-display text-2xl md:text-3xl text-[#23211C]/30 group-hover:text-[#B87E2E] transition-colors w-10 md:w-auto">
              0{{ i + 1 }}
            </span>
            <div class="flex items-center gap-5 min-w-0">
              <div class="hidden sm:block w-20 h-24 overflow-hidden shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                <NuxtImg
                  :src="p.image"
                  :alt="p.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="min-w-0">
                <h3 class="font-display text-2xl md:text-4xl font-light tracking-tight truncate group-hover:translate-x-2 transition-transform duration-300">
                  {{ p.name }}
                </h3>
                <p class="mt-1 text-[11px] font-light uppercase tracking-[0.22em] text-[#23211C]/45">
                  {{ p.category }} · {{ p.maker }}
                </p>
              </div>
            </div>
            <span class="hidden md:block font-display text-2xl italic text-[#B87E2E]">${{ p.price }}</span>
            <span class="text-[11px] font-light uppercase tracking-[0.25em] text-[#23211C]/50 group-hover:text-[#B87E2E] transition-colors justify-self-end">
              View →
            </span>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ ABOUT ═══════════ -->
    <section
      id="about"
      class="bg-[#F2EFE7] border-y border-[#23211C]/10"
    >
      <div class="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-36 text-center">
        <span class="font-display text-8xl md:text-9xl leading-none text-[#B87E2E] select-none">“</span>
        <blockquote class="font-display font-light text-3xl md:text-5xl leading-[1.25] tracking-tight -mt-6 md:-mt-10">
          We are not a factory. We are a family that
          <em class="text-[#B87E2E]">can't stop making things</em> — quilts on the
          table, sawdust in the garage, paint water by the sink.
        </blockquote>
        <p class="mt-10 text-[11px] font-light uppercase tracking-[0.35em] text-[#23211C]/50">
          The Beck Family — Toronto
        </p>

        <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#23211C]/10 border border-[#23211C]/10">
          <div
            v-for="fact in [
              ['01', 'Quilts & diamond dots', 'Pieced, stitched and dotted at the kitchen table.'],
              ['02', 'Small wooden goods', 'Boards and bowls turned in the garage workshop.'],
              ['03', 'Original artwork', 'Watercolour and ink from the front-room easel.']
            ]"
            :key="fact[0]"
            class="bg-[#F2EFE7] px-8 py-10 text-left"
          >
            <p class="font-display text-xl italic text-[#B87E2E]">
              {{ fact[0] }}
            </p>
            <h3 class="mt-3 font-display text-2xl font-light">
              {{ fact[1] }}
            </h3>
            <p class="mt-2 text-sm font-light text-[#23211C]/60 leading-relaxed">
              {{ fact[2] }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer
      id="write"
      class="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-10"
    >
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-16 border-b border-[#23211C]/12">
        <div>
          <p class="text-[11px] font-light uppercase tracking-[0.35em] text-[#B87E2E] mb-5">
            Write to us
          </p>
          <a
            href="mailto:hello@beckcraft.ca"
            class="font-display font-light text-4xl md:text-6xl tracking-tight hover:text-[#B87E2E] transition-colors"
          >
            hello@beckcraft.ca
          </a>
        </div>
        <form class="flex gap-4 items-center border-b border-[#23211C]/30 focus-within:border-[#B87E2E] transition-colors w-full md:w-auto">
          <input
            type="email"
            placeholder="Email for new-piece notes"
            class="flex-1 md:w-64 bg-transparent py-3 text-sm font-light placeholder:text-[#23211C]/40 focus:outline-none"
          >
          <button
            type="submit"
            class="text-[11px] uppercase tracking-[0.25em] text-[#B87E2E]"
          >
            →
          </button>
        </form>
      </div>
      <div class="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-light uppercase tracking-[0.25em] text-[#23211C]/45">
        <span class="font-display normal-case tracking-tight text-xl text-[#23211C]">Beckcraft</span>
        <p>Quilts · Diamond dots · Woodwork · Artwork</p>
        <p>© {{ year }} — Handmade in Toronto</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v3 {
  font-family: 'Outfit', ui-sans-serif, system-ui, sans-serif;
}
.font-display {
  font-family: 'Cormorant Garamond', Georgia, serif;
}
em {
  font-style: italic;
}
</style>
