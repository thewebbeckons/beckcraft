<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 1: Homestead',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Karla:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap' }
  ]
})

const { products, categories } = useProducts()
const year = new Date().getFullYear()
</script>

<template>
  <div class="v1 min-h-screen bg-[#F4EDE1] text-[#2B241C] antialiased">
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="border-b border-[#2B241C]/15">
      <div class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span class="font-display text-2xl tracking-tight">
          beck<span class="italic font-light text-[#B0562F]">craft</span>
        </span>
        <nav class="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-[#2B241C]/60">
          <a
            href="#goods"
            class="hover:text-[#B0562F] transition-colors"
          >Goods</a>
          <a
            href="#about"
            class="hover:text-[#B0562F] transition-colors"
          >Our family</a>
          <a
            href="#visit"
            class="hover:text-[#B0562F] transition-colors"
          >Visit</a>
        </nav>
        <span class="text-[11px] uppercase tracking-[0.18em] text-[#B0562F]">Est. Toronto</span>
      </div>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="max-w-6xl mx-auto px-6 pt-14 pb-20 md:pt-20 md:pb-28">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <!-- Copy -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <p class="text-[11px] uppercase tracking-[0.3em] text-[#B0562F] mb-6 flex items-center gap-3">
            <span class="inline-block w-8 h-px bg-[#B0562F]" />
            Quilts · Diamond dots · Woodwork · Art
          </p>
          <h1 class="font-display text-[13vw] sm:text-6xl lg:text-7xl leading-[1.02] font-light tracking-tight">
            Made slowly<br>
            by <em class="font-normal text-[#B0562F]">our family,</em><br>
            for your home.
          </h1>
          <p class="mt-7 max-w-md text-[15px] leading-relaxed text-[#2B241C]/70">
            Every quilt is stitched at the kitchen table, every board sanded in the
            garage workshop. Small batches, honest materials, nothing rushed.
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#goods"
              class="group inline-flex items-center gap-3 bg-[#B0562F] text-[#F4EDE1] px-8 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-[#2B241C] transition-colors duration-300"
            >
              Browse the goods
              <span class="inline-block transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href="#about"
              class="text-[12px] uppercase tracking-[0.2em] underline underline-offset-8 decoration-[#B0562F]/50 hover:decoration-[#B0562F] transition-all"
            >
              Meet the makers
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="lg:col-span-5 order-1 lg:order-2 relative">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-full h-full border border-[#B0562F]/40 pointer-events-none" />
            <div class="overflow-hidden">
              <NuxtImg
                src="/hero.png"
                alt="Handmade patchwork quilt on a wooden bed"
                class="w-full aspect-[4/5] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div class="absolute -bottom-6 -right-3 sm:-right-6 bg-[#2B241C] text-[#F4EDE1] px-6 py-5 max-w-[210px] shadow-xl">
              <p class="font-hand text-2xl leading-none text-[#E8B9A0]">
                the Beck family
              </p>
              <p class="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#F4EDE1]/60">
                Three makers, one roof
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="bg-[#EDE3D2] border-y border-[#2B241C]/15"
    >
      <div class="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div class="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p class="text-[11px] uppercase tracking-[0.3em] text-[#B0562F] mb-4">
              This season's table
            </p>
            <h2 class="font-display text-4xl md:text-5xl font-light tracking-tight">
              Fresh from <em class="text-[#B0562F]">the workshop</em>
            </h2>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="c in categories"
              :key="c"
              class="text-[10px] uppercase tracking-[0.18em] border border-[#2B241C]/25 px-3 py-1.5 text-[#2B241C]/60"
            >
              {{ c }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <article
            v-for="(p, i) in products"
            :key="p.name"
            class="group cursor-pointer"
            :class="{ 'lg:mt-10': i % 2 === 1 }"
          >
            <div class="overflow-hidden bg-[#E2D6C0] mb-5">
              <NuxtImg
                :src="p.image"
                :alt="p.name"
                class="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p class="text-[10px] uppercase tracking-[0.22em] text-[#B0562F] mb-1.5">
              {{ p.category }}
            </p>
            <h3 class="font-display text-xl leading-snug">
              {{ p.name }}
            </h3>
            <div class="mt-3 pt-3 border-t border-[#2B241C]/15 flex items-center justify-between">
              <span class="text-xs italic text-[#2B241C]/55">{{ p.maker }}</span>
              <span class="font-display text-lg">${{ p.price }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ ABOUT ═══════════ -->
    <section
      id="about"
      class="max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div class="lg:col-span-5 relative">
          <div class="overflow-hidden">
            <NuxtImg
              src="/quilt.png"
              alt="Folded handmade quilt on a wooden chair"
              class="w-full aspect-[4/5] object-cover"
            />
          </div>
          <p class="mt-4 text-[10px] uppercase tracking-[0.22em] text-[#2B241C]/45 text-right">
            № 04 — the green quilt, promised to grandma
          </p>
        </div>
        <div class="lg:col-span-7">
          <p class="text-[11px] uppercase tracking-[0.3em] text-[#B0562F] mb-6 flex items-center gap-3">
            <span class="inline-block w-8 h-px bg-[#B0562F]" />
            Our family
          </p>
          <h2 class="font-display text-4xl md:text-5xl font-light tracking-tight leading-tight">
            A kitchen-table<br><em class="text-[#B0562F]">operation.</em>
          </h2>
          <div class="mt-8 space-y-5 max-w-lg text-[15px] leading-relaxed text-[#2B241C]/75">
            <p>
              <span class="font-display text-3xl float-left mr-2 mt-1 leading-[0.8] text-[#B0562F]">I</span>t
              started with one quilt — a wedding gift that took a winter to finish and
              became the thing everyone asked about. Now Mom pieces and hand-quilts,
              Dad turns bowls and boards in the garage, and the rest of us paint,
              pack orders, and taste-test.
            </p>
            <p>
              We make a handful of each thing, list it when it's ready, and it finds
              its home. No warehouses, no middle steps — just a family that likes
              making things together.
            </p>
          </div>
          <div class="mt-10 grid grid-cols-3 max-w-md border-t border-[#2B241C]/15">
            <div class="pt-5 pr-4">
              <p class="font-display text-3xl text-[#B0562F]">
                3
              </p>
              <p class="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#2B241C]/55">
                Generations
              </p>
            </div>
            <div class="pt-5 px-4 border-l border-[#2B241C]/15">
              <p class="font-display text-3xl text-[#B0562F]">
                120+
              </p>
              <p class="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#2B241C]/55">
                Pieces made
              </p>
            </div>
            <div class="pt-5 px-4 border-l border-[#2B241C]/15">
              <p class="font-display text-3xl text-[#B0562F]">
                1
              </p>
              <p class="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#2B241C]/55">
                Garage workshop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer
      id="visit"
      class="bg-[#2B241C] text-[#F4EDE1]"
    >
      <div class="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div class="grid md:grid-cols-12 gap-10 items-end">
          <div class="md:col-span-7">
            <p class="font-hand text-3xl text-[#E8B9A0] mb-3">
              come say hello
            </p>
            <h2 class="font-display text-4xl md:text-5xl font-light tracking-tight">
              New pieces land<br>every few weeks.
            </h2>
          </div>
          <div class="md:col-span-5">
            <form class="flex border-b border-[#F4EDE1]/30 focus-within:border-[#E8B9A0] transition-colors">
              <input
                type="email"
                placeholder="your@email.com"
                class="flex-1 bg-transparent py-3 text-sm placeholder:text-[#F4EDE1]/40 focus:outline-none"
              >
              <button
                type="submit"
                class="text-[11px] uppercase tracking-[0.2em] text-[#E8B9A0] hover:text-[#F4EDE1] transition-colors pl-4"
              >
                Keep me posted →
              </button>
            </form>
            <p class="mt-3 text-xs text-[#F4EDE1]/45">
              One quiet email when new goods are listed. That's it.
            </p>
          </div>
        </div>
        <div class="mt-16 pt-8 border-t border-[#F4EDE1]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F4EDE1]/50">
          <span class="font-display text-lg text-[#F4EDE1]">beck<span class="italic font-light text-[#E8B9A0]">craft</span></span>
          <p>Quilts · Diamond dot paintings · Small woodwork · Artwork</p>
          <p>© {{ year }} The Beck Family — Handmade in Toronto</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v1 {
  --font-display: 'Fraunces', Georgia, serif;
  font-family: 'Karla', ui-sans-serif, system-ui, sans-serif;
}
.font-display {
  font-family: var(--font-display);
}
.font-hand {
  font-family: 'Dancing Script', cursive;
}
em {
  font-style: italic;
}
</style>
