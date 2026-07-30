<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 6: Blueprint',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()

// drafting-machine style cursor readout
const coords = ref({ x: 0, y: 0 })
function track(e: MouseEvent) {
  coords.value = { x: Math.round(e.clientX), y: Math.round(e.clientY) }
}
const pad = (n: number) => String(n).padStart(4, '0')

const notes = [
  'All pieces drawn up at the kitchen table, fabricated in the garage.',
  'Dimensions approximate — variance is the charm of handmade.',
  'Wood finished with food-safe oil; quilts pre-washed once.',
  'One of each, sometimes two. Sold pieces are re-drawn, never re-printed.'
]

const materials = [
  ['Ontario maple', 'Offcut yard, Moffat', 'Food-safe oil'],
  ['Black walnut', 'Fallen limb, High Park', 'Hand-rubbed wax'],
  ['Cotton & wool batting', 'Designer deadstock', 'Pre-washed'],
  ['Oil on canvas', 'The front room', 'Pine frame, shop-made']
]
</script>

<template>
  <div
    class="v6 grid-bg min-h-screen bg-[#0F3057] text-[#DCE9F5] antialiased selection:bg-[#F2C14E] selection:text-[#0F3057]"
    @mousemove="track"
  >
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="border-b border-white/20">
      <div class="max-w-6xl mx-auto px-6 flex items-center justify-between border-x border-white/20">
        <div class="py-4 pr-6 border-r border-white/20">
          <span class="font-display text-xl tracking-tight">
            beck<span class="text-[#F2C14E]">craft</span>
          </span>
          <span class="ml-3 text-[9px] uppercase tracking-[0.25em] text-[#DCE9F5]/50 align-middle">Sheet 01 / 01</span>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.25em] text-[#DCE9F5]/60">
          <a
            href="#goods"
            class="hover:text-[#F2C14E] transition-colors"
          >Goods</a>
          <a
            href="#notes"
            class="hover:text-[#F2C14E] transition-colors"
          >Notes</a>
          <a
            href="#titleblock"
            class="hover:text-[#F2C14E] transition-colors"
          >Title block</a>
        </nav>
        <div class="py-4 pl-6 border-l border-white/20 font-mono text-[10px] tracking-[0.15em] text-[#9DC4E4] tabular-nums">
          X:{{ pad(coords.x) }} Y:{{ pad(coords.y) }}
        </div>
      </div>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 border-x border-white/20">
      <div class="grid lg:grid-cols-12 gap-14 items-center">
        <!-- Copy -->
        <div class="lg:col-span-6">
          <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-[#F2C14E] mb-7 flex items-center gap-3">
            <span class="inline-block size-2 border border-[#F2C14E] rotate-45" />
            Project: handmade goods — Toronto, ON
          </p>
          <h1 class="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.04] font-light tracking-tight">
            Every piece<br>
            drawn up at the<br>
            <span class="text-[#F2C14E]">kitchen table.</span>
          </h1>
          <p class="mt-8 max-w-md font-mono text-[13px] leading-relaxed text-[#DCE9F5]/65">
            &gt; Quilts, diamond dots, small woodwork &amp; paintings —<br>
            &gt; drafted by hand, built by family,<br>
            &gt; tolerances: ± one cup of tea.
          </p>
          <div class="mt-11 flex flex-wrap items-center gap-5">
            <a
              href="#goods"
              class="inline-flex items-center gap-3 bg-[#F2C14E] text-[#0F3057] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-[#DCE9F5] transition-colors duration-300"
            >
              View drawings ↓
            </a>
            <a
              href="#notes"
              class="font-mono text-[11px] uppercase tracking-[0.25em] text-[#DCE9F5]/70 border border-dashed border-[#DCE9F5]/40 px-6 py-4 hover:border-[#F2C14E] hover:text-[#F2C14E] transition-colors"
            >
              Read the specs
            </a>
          </div>
        </div>

        <!-- Plan frame -->
        <div class="lg:col-span-6 relative mt-8 lg:mt-0">
          <!-- top dimension -->
          <div class="absolute -top-7 inset-x-0 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#9DC4E4]">
            <span>←</span>
            <span class="flex-1 border-t border-dashed border-[#9DC4E4]/50" />
            <span>1200 mm</span>
            <span class="flex-1 border-t border-dashed border-[#9DC4E4]/50" />
            <span>→</span>
          </div>
          <!-- side dimension -->
          <div class="absolute -left-8 inset-y-0 hidden md:flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#9DC4E4]">
            <span>↑</span>
            <span class="flex-1 border-l border-dashed border-[#9DC4E4]/50" />
            <span class="[writing-mode:vertical-rl]">1500 mm</span>
            <span class="flex-1 border-l border-dashed border-[#9DC4E4]/50" />
            <span>↓</span>
          </div>

          <div class="relative group border border-white/30">
            <!-- corner registration marks -->
            <span class="absolute -top-2.5 -left-2 text-[#F2C14E] font-mono text-sm select-none">+</span>
            <span class="absolute -top-2.5 -right-1.5 text-[#F2C14E] font-mono text-sm select-none">+</span>
            <span class="absolute -bottom-3 -left-2 text-[#F2C14E] font-mono text-sm select-none">+</span>
            <span class="absolute -bottom-3 -right-1.5 text-[#F2C14E] font-mono text-sm select-none">+</span>

            <div class="relative overflow-hidden">
              <NuxtImg
                src="/hero.png"
                alt="Handmade patchwork quilt on a wooden bed"
                class="w-full aspect-[4/3] object-cover grayscale"
              />
              <div class="absolute inset-0 bg-[#0F3057]/55 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
              <div class="absolute inset-0 halftone-light opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div class="flex items-center justify-between border-t border-white/30 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9DC4E4]">
              <span>Fig. 01 — Family quilt, elevation</span>
              <span class="text-[#F2C14E]">Scale 1:1</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="border-t border-white/20"
    >
      <div class="max-w-6xl mx-auto px-6 py-20 md:py-24 border-x border-white/20">
        <div class="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-[#F2C14E] mb-4">
              Schedule of goods
            </p>
            <h2 class="font-display text-4xl md:text-5xl font-light tracking-tight">
              Current drawings
            </h2>
          </div>
          <p class="font-mono text-[11px] text-[#DCE9F5]/50 max-w-xs leading-relaxed">
            Hover a drawing to view it in full colour. All quantities: one (1).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/25">
          <article
            v-for="(p, i) in products"
            :key="p.name"
            class="group relative border-b border-r border-white/25 cursor-pointer hover:bg-white/5 transition-colors duration-300"
          >
            <div class="flex items-center justify-between px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.22em] text-[#9DC4E4] border-b border-white/25">
              <span>DWG-{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="text-[#F2C14E]">{{ p.category }}</span>
            </div>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="p.image"
                :alt="p.name"
                class="w-full aspect-square object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-[#0F3057]/55 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
            </div>
            <div class="p-4">
              <h3 class="font-display text-lg leading-snug">
                {{ p.name }}
              </h3>
              <div class="mt-3 flex items-center justify-between font-mono text-[11px]">
                <span class="italic text-[#DCE9F5]/45">{{ p.maker }}</span>
                <span class="text-[#F2C14E] tabular-nums">${{ p.price }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ NOTES ═══════════ -->
    <section
      id="notes"
      class="border-t border-white/20"
    >
      <div class="max-w-6xl mx-auto px-6 py-20 md:py-24 border-x border-white/20 grid lg:grid-cols-2 gap-14">
        <div>
          <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-[#F2C14E] mb-6 flex items-center gap-3">
            <span class="inline-block size-2 border border-[#F2C14E] rotate-45" />
            General notes
          </p>
          <ol class="space-y-4">
            <li
              v-for="(note, i) in notes"
              :key="note"
              class="flex gap-4 font-mono text-[13px] leading-relaxed text-[#DCE9F5]/70"
            >
              <span class="text-[#F2C14E] tabular-nums shrink-0">{{ i + 1 }}.</span>
              {{ note }}
            </li>
          </ol>
        </div>
        <div>
          <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-[#F2C14E] mb-6">
            Bill of materials
          </p>
          <div class="border border-white/25 font-mono text-[11px]">
            <div class="grid grid-cols-3 bg-white/10 text-[9px] uppercase tracking-[0.22em] text-[#9DC4E4]">
              <span class="px-4 py-2.5 border-r border-white/25">Material</span>
              <span class="px-4 py-2.5 border-r border-white/25">Source</span>
              <span class="px-4 py-2.5">Finish</span>
            </div>
            <div
              v-for="row in materials"
              :key="row[0]"
              class="grid grid-cols-3 border-t border-white/25 text-[#DCE9F5]/70"
            >
              <span class="px-4 py-3 border-r border-white/25 text-[#DCE9F5]">{{ row[0] }}</span>
              <span class="px-4 py-3 border-r border-white/25">{{ row[1] }}</span>
              <span class="px-4 py-3">{{ row[2] }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER / TITLE BLOCK ═══════════ -->
    <footer
      id="titleblock"
      class="border-t border-white/20"
    >
      <div class="max-w-6xl mx-auto px-6 py-16 border-x border-white/20">
        <div class="grid md:grid-cols-2 gap-10 items-end mb-14">
          <h2 class="font-display text-3xl md:text-4xl font-light tracking-tight leading-snug">
            Revisions issued<br>
            <span class="text-[#F2C14E]">every few weeks.</span>
          </h2>
          <form class="flex border border-white/30 focus-within:border-[#F2C14E] transition-colors">
            <span class="hidden sm:flex items-center px-4 border-r border-white/30 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9DC4E4]">To:</span>
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 bg-transparent px-4 py-3.5 font-mono text-sm placeholder:text-[#DCE9F5]/30 focus:outline-none"
            >
            <button
              type="submit"
              class="bg-[#F2C14E] text-[#0F3057] px-6 text-[10px] font-medium uppercase tracking-[0.25em] hover:bg-[#DCE9F5] transition-colors"
            >
              File it
            </button>
          </form>
        </div>

        <!-- title block table -->
        <div class="border border-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">
          <div class="grid grid-cols-2 md:grid-cols-4">
            <div class="px-4 py-3 border-r border-b md:border-b-0 border-white/30">
              <p class="text-[#9DC4E4] mb-1">
                Drawn by
              </p>
              <p class="text-[#DCE9F5]">
                The Beck family
              </p>
            </div>
            <div class="px-4 py-3 md:border-r border-b md:border-b-0 border-white/30">
              <p class="text-[#9DC4E4] mb-1">
                Checked by
              </p>
              <p class="text-[#DCE9F5]">
                Grandma
              </p>
            </div>
            <div class="px-4 py-3 border-r border-white/30">
              <p class="text-[#9DC4E4] mb-1">
                Scale
              </p>
              <p class="text-[#DCE9F5]">
                1:1 — do not scale
              </p>
            </div>
            <div class="px-4 py-3">
              <p class="text-[#9DC4E4] mb-1">
                Date
              </p>
              <p class="text-[#DCE9F5]">
                © {{ year }} Toronto
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v6 {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
}
.font-display {
  font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}
.grid-bg {
  background-image:
    linear-gradient(rgba(220, 233, 245, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(220, 233, 245, 0.055) 1px, transparent 1px),
    linear-gradient(rgba(220, 233, 245, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(220, 233, 245, 0.028) 1px, transparent 1px);
  background-size:
    120px 120px,
    120px 120px,
    24px 24px,
    24px 24px;
}
.halftone-light {
  background-image: radial-gradient(rgba(242, 193, 78, 0.35) 1px, transparent 1.5px);
  background-size: 6px 6px;
}
</style>
