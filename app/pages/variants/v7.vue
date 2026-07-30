<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 7: Risograph',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,600;12..96,800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()

const ticker = 'Quilts ✷ Woodwork ✷ Diamond dots ✷ Paintings ✷ Small batch ✷ Family made ✷ '
</script>

<template>
  <div class="v7 min-h-screen bg-[#F6F1E5] text-[#1C1A16] antialiased selection:bg-[#FF48B0] selection:text-[#F6F1E5]">
    <!-- print grain -->
    <div class="grain pointer-events-none fixed inset-0 z-40 opacity-[0.07]" />

    <!-- ═══════════ HEADER ═══════════ -->
    <header class="max-w-6xl mx-auto px-6 md:px-10 py-7 flex items-center justify-between">
      <!-- misregistered wordmark -->
      <span class="relative font-display text-2xl font-extrabold uppercase tracking-tight leading-none">
        <span class="relative z-10 text-[#FF48B0] mix-blend-multiply">beckcraft</span>
        <span
          aria-hidden="true"
          class="absolute inset-0 translate-x-[3px] translate-y-[2px] text-[#0078BF] mix-blend-multiply"
        >beckcraft</span>
      </span>
      <nav class="flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.2em] text-[#1C1A16]/60">
        <a
          href="#goods"
          class="hover:text-[#FF48B0] transition-colors hidden sm:inline"
        >Goods</a>
        <a
          href="#colophon"
          class="hover:text-[#FF48B0] transition-colors hidden sm:inline"
        >Colophon</a>
        <span class="border-2 border-[#1C1A16] px-3 py-1 text-[#1C1A16]">2-color</span>
      </nav>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="relative max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-20">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- Copy with overprint blocks -->
        <div class="lg:col-span-7 relative">
          <div
            aria-hidden="true"
            class="absolute -top-8 -left-6 w-40 h-40 bg-[#0078BF] mix-blend-multiply rotate-6"
          />
          <div
            aria-hidden="true"
            class="absolute top-24 left-48 w-28 h-28 bg-[#FF48B0] mix-blend-multiply -rotate-3 hidden md:block"
          />
          <p class="relative font-mono text-[11px] uppercase tracking-[0.3em] text-[#1C1A16]/70 mb-6">
            Edition of ∞ · Toronto · Est. 2016
          </p>
          <h1 class="relative font-display font-extrabold uppercase leading-[0.9] tracking-tight text-[15vw] sm:text-7xl lg:text-8xl">
            Made<br>
            <span class="relative z-10 text-[#FF48B0] mix-blend-multiply">by</span>
            <span class="relative z-10 text-[#0078BF] mix-blend-multiply">hand</span><br>
            or not<br>
            at all.
          </h1>
          <p class="relative mt-8 max-w-md font-mono text-[13px] leading-relaxed text-[#1C1A16]/70">
            Quilts, diamond dots, bowls and paintings — printed on the family,
            by the family. Slight misregistration guaranteed. That's how you
            know it's real.
          </p>
          <div class="relative mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#goods"
              class="inline-flex items-center gap-3 bg-[#1C1A16] text-[#F6F1E5] px-8 py-4 font-mono text-[12px] uppercase tracking-[0.2em] hover:bg-[#FF48B0] hover:text-[#1C1A16] transition-colors duration-300"
            >
              See the press run ↓
            </a>
            <span class="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1C1A16]/50">
              ☞ no two impressions alike
            </span>
          </div>
        </div>

        <!-- Duotone image with registration marks -->
        <div class="lg:col-span-5 relative">
          <div
            aria-hidden="true"
            class="absolute inset-0 translate-x-4 translate-y-4 bg-[#FF48B0] mix-blend-multiply"
          />
          <div class="relative border-2 border-[#1C1A16] overflow-hidden bg-[#0078BF]">
            <NuxtImg
              src="/hero.png"
              alt="Handmade patchwork quilt on a wooden bed"
              class="w-full aspect-[4/5] object-cover grayscale mix-blend-multiply opacity-90"
            />
            <div class="absolute inset-0 halftone" />
          </div>
          <!-- registration marks -->
          <span class="reg-mark -top-4 -left-4" />
          <span class="reg-mark -top-4 -right-4" />
          <span class="reg-mark -bottom-4 -left-4" />
          <span class="reg-mark -bottom-4 -right-4" />
          <p class="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#1C1A16]/50 text-right">
            Plates: pink / blue · Stock: the good paper
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════ TICKER ═══════════ -->
    <div class="overflow-hidden border-y-2 border-[#1C1A16] bg-[#FF48B0] text-[#F6F1E5]">
      <div class="marquee flex whitespace-nowrap py-2.5 font-mono text-xs uppercase tracking-[0.25em]">
        <span
          v-for="n in 2"
          :key="n"
          class="shrink-0"
        >{{ ticker.repeat(4) }}</span>
      </div>
    </div>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28"
    >
      <div class="flex flex-wrap items-end justify-between gap-6 mb-16">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-[#1C1A16]/60 mb-4">
            Fresh off the drum
          </p>
          <h2 class="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none">
            This week's<br>
            <span class="text-[#0078BF]">press run</span>
          </h2>
        </div>
        <p class="font-mono text-[11px] text-[#1C1A16]/60 max-w-xs leading-relaxed">
          One impression of each. When it sells, we ink up and pull another.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
        <article
          v-for="(p, i) in products"
          :key="p.name"
          class="group relative cursor-pointer"
        >
          <!-- misregistration layer -->
          <div
            aria-hidden="true"
            class="absolute inset-0 translate-x-2.5 translate-y-2.5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"
            :class="i % 2 === 0 ? 'bg-[#FF48B0]' : 'bg-[#0078BF]'"
          />
          <div class="relative bg-[#F6F1E5] border-2 border-[#1C1A16]">
            <div class="relative overflow-hidden border-b-2 border-[#1C1A16]">
              <NuxtImg
                :src="p.image"
                :alt="p.name"
                class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 halftone opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div class="p-5">
              <p class="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1C1A16]/50 mb-2">
                {{ p.category }} · 1/1
              </p>
              <h3 class="font-display text-xl font-semibold leading-tight">
                {{ p.name }}
              </h3>
              <div class="mt-4 flex items-center justify-between">
                <span class="font-mono text-[10px] italic text-[#1C1A16]/50">{{ p.maker }}</span>
                <span class="font-mono font-bold border-2 border-[#1C1A16] px-2 py-0.5 group-hover:bg-[#1C1A16] group-hover:text-[#F6F1E5] transition-colors">${{ p.price }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ═══════════ COLOPHON ═══════════ -->
    <section
      id="colophon"
      class="border-t-2 border-[#1C1A16] bg-[#EFE7D6]"
    >
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-7">
          <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-[#1C1A16]/60 mb-6">
            Colophon
          </p>
          <p class="font-display text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight">
            This shop was set in
            <span class="bg-[#FF48B0] px-2 box-decoration-clone">two spot colours</span>
            at the kitchen table in Toronto. The Becks supplied the
            <span class="bg-[#0078BF] text-[#F6F1E5] px-2 box-decoration-clone">labour, lint and love.</span>
            Imperfections are intentional and included at no extra charge.
          </p>
        </div>
        <div class="lg:col-span-5 lg:pl-10 lg:border-l-2 lg:border-[#1C1A16]">
          <ul class="space-y-4 font-mono text-[12px] uppercase tracking-[0.15em] text-[#1C1A16]/70">
            <li class="flex justify-between gap-4 border-b border-[#1C1A16]/20 pb-3">
              <span>Press</span><span class="text-right">Garage lathe &amp; dining table</span>
            </li>
            <li class="flex justify-between gap-4 border-b border-[#1C1A16]/20 pb-3">
              <span>Inks</span><span class="text-right">Wool, walnut, oil &amp; thread</span>
            </li>
            <li class="flex justify-between gap-4 border-b border-[#1C1A16]/20 pb-3">
              <span>Run size</span><span class="text-right">One, sometimes two</span>
            </li>
            <li class="flex justify-between gap-4 border-b border-[#1C1A16]/20 pb-3">
              <span>Drying time</span><span class="text-right">One winter per quilt</span>
            </li>
            <li class="flex justify-between gap-4">
              <span>Mistakes</span><span class="text-right">Included free</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="border-t-2 border-[#1C1A16]">
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div class="relative mb-14">
          <h2 class="relative font-display font-extrabold uppercase leading-[0.85] tracking-tight text-[15vw] md:text-[10rem]">
            <span class="relative z-10 text-transparent [-webkit-text-stroke:2px_#1C1A16]">beckcraft</span>
            <span
              aria-hidden="true"
              class="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 text-[#FF48B0] mix-blend-multiply"
            >beckcraft</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-10 items-center pb-12 border-b-2 border-[#1C1A16]">
          <p class="font-mono text-[13px] leading-relaxed text-[#1C1A16]/70 max-w-sm">
            Get the proof sheet — one email when a new press run leaves the table.
          </p>
          <form class="flex border-2 border-[#1C1A16] focus-within:shadow-[6px_6px_0_#FF48B0] transition-shadow">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 bg-transparent px-5 py-4 font-mono text-sm placeholder:text-[#1C1A16]/35 focus:outline-none"
            >
            <button
              type="submit"
              class="bg-[#0078BF] text-[#F6F1E5] px-7 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-[#FF48B0] hover:text-[#1C1A16] transition-colors"
            >
              Print
            </button>
          </form>
        </div>
        <div class="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#1C1A16]/50">
          <span>© {{ year }} The Beck Family</span>
          <span>Quilts · Diamond dots · Woodwork · Artwork</span>
          <span>Printed by hand in Toronto</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v7 {
  font-family: 'Space Mono', ui-monospace, monospace;
}
.font-display {
  font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif;
}
.font-mono {
  font-family: 'Space Mono', ui-monospace, monospace;
}
.grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.halftone {
  background-image: radial-gradient(rgba(28, 26, 22, 0.35) 1px, transparent 1.6px);
  background-size: 5px 5px;
  mix-blend-mode: multiply;
}
.reg-mark {
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1.5px solid #1c1a16;
  border-radius: 999px;
}
.reg-mark::before,
.reg-mark::after {
  content: '';
  position: absolute;
  background: #1c1a16;
}
.reg-mark::before {
  left: 50%;
  top: -4px;
  bottom: -4px;
  width: 1.5px;
  transform: translateX(-50%);
}
.reg-mark::after {
  top: 50%;
  left: -4px;
  right: -4px;
  height: 1.5px;
  transform: translateY(-50%);
}
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
.marquee {
  animation: marquee 24s linear infinite;
}
</style>
