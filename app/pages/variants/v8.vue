<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 8: Loom',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=VT323&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()

// weaving draft — warp & weft as text
const draft = [
  '▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░',
  '░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓',
  '▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓',
  '▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░',
  '░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓',
  '▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓',
  '▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░',
  '░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓░░▓▓'
]

// typewriter status line
const phrases = [
  'piecing a quilt at the kitchen table…',
  'turning maple on the garage lathe…',
  'placing diamond dots, one sparkle at a time…',
  'painting the lake from the front room…'
]
const typed = ref('')
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  let p = 0
  let c = 0
  let del = false
  timer = setInterval(() => {
    const cur = phrases[p]!
    if (!del) {
      c++
      if (c >= cur.length + 20) del = true
    } else {
      c--
      if (c <= 0) {
        del = false
        p = (p + 1) % phrases.length
      }
    }
    typed.value = cur.slice(0, Math.min(c, cur.length))
  }, 55)
})
onUnmounted(() => clearInterval(timer))

// punch-card hole pattern, deterministic per product
const holes = (seed: number) => Array.from({ length: 20 }, (_, i) => (i * 7 + seed * 5) % 6 < 2)
</script>

<template>
  <div class="v8 min-h-screen bg-[#0E0F0C] text-[#9AE6A0] antialiased selection:bg-[#9AE6A0] selection:text-[#0E0F0C]">
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="border-b border-[#9AE6A0]/20">
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <span class="font-mono text-sm">
          <span class="text-[#E0B458]">beck@craft</span><span class="text-[#9AE6A0]/50">:~$</span>
          <span class="text-[#9AE6A0]"> ./loom --weave</span>
        </span>
        <nav class="flex items-center gap-6 font-mono text-[11px] tracking-wider text-[#9AE6A0]/60">
          <a
            href="#goods"
            class="hover:text-[#E0B458] transition-colors hidden sm:inline"
          >[goods]</a>
          <a
            href="#readme"
            class="hover:text-[#E0B458] transition-colors hidden sm:inline"
          >[readme]</a>
          <span class="flex items-center gap-2 text-[#9AE6A0]">
            <span class="size-1.5 rounded-full bg-[#9AE6A0] animate-pulse" />
            LOOM ONLINE
          </span>
        </nav>
      </div>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="max-w-6xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-20 md:pb-28">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- Copy -->
        <div class="lg:col-span-7">
          <p class="font-mono text-[12px] text-[#9AE6A0]/50 mb-6">
            &gt; initializing family workshop… <span class="text-[#E0B458]">done</span>
          </p>
          <h1 class="font-display text-6xl md:text-7xl xl:text-8xl leading-[0.95] text-[#9AE6A0]">
            THREAD<br>
            BY THREAD<span class="cursor">▌</span>
          </h1>
          <p class="mt-8 font-mono text-sm md:text-[15px] text-[#E0B458] h-6">
            &gt; {{ typed }}<span class="cursor text-[#9AE6A0]">▌</span>
          </p>
          <p class="mt-4 max-w-lg font-mono text-[13px] leading-relaxed text-[#9AE6A0]/55">
            Beckcraft is a Toronto family running four crafts off one loom:
            quilts, diamond dots, small woodwork and paintings. Everything is
            compiled by hand, one thread at a time.
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#goods"
              class="inline-flex items-center gap-3 bg-[#9AE6A0] text-[#0E0F0C] px-7 py-3.5 font-mono text-[12px] font-medium tracking-[0.15em] hover:bg-[#E0B458] transition-colors duration-300"
            >
              RUN browse.exe
            </a>
            <a
              href="#readme"
              class="font-mono text-[12px] tracking-[0.15em] text-[#9AE6A0]/70 border border-[#9AE6A0]/30 px-6 py-3.5 hover:border-[#E0B458] hover:text-[#E0B458] transition-colors"
            >
              cat README.txt
            </a>
          </div>
        </div>

        <!-- Weaving draft panel -->
        <div class="lg:col-span-5 border border-[#9AE6A0]/25 bg-[#12140F]">
          <div class="flex items-center justify-between border-b border-[#9AE6A0]/25 px-4 py-2.5 font-mono text-[10px] tracking-[0.2em] text-[#9AE6A0]/50">
            <span>DRAFT: sunday-quilt.wif</span>
            <span>SHAFTS: 4</span>
          </div>
          <div class="p-5">
            <div
              v-for="(row, i) in draft"
              :key="i"
              class="font-mono text-[13px] leading-[1.35] whitespace-pre"
              :class="i % 2 ? 'text-[#E0B458]' : 'text-[#9AE6A0]'"
              v-text="row"
            />
            <div class="mt-5 pt-4 border-t border-[#9AE6A0]/20 grid grid-cols-2 gap-4 font-mono text-[10px] tracking-[0.15em] text-[#9AE6A0]/50">
              <div>WARP: cotton · natural</div>
              <div>WEFT: wool · madder dye</div>
              <div>EPI: 12 · hand tension</div>
              <div>STATUS: <span class="text-[#E0B458]">on the loom</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="border-t border-[#9AE6A0]/20 bg-[#0B0C09]"
    >
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div class="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p class="font-mono text-[11px] tracking-[0.25em] text-[#E0B458] mb-4">
              &gt; ls ./finished_goods
            </p>
            <h2 class="font-display text-5xl md:text-6xl text-[#9AE6A0]">
              4 items found
            </h2>
          </div>
          <p class="font-mono text-[11px] text-[#9AE6A0]/45 max-w-xs leading-relaxed">
            Each record punched once. Duplicates not supported by the hardware (us).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <article
            v-for="(p, i) in products"
            :key="p.name"
            class="group border border-[#9AE6A0]/25 bg-[#12140F] hover:border-[#9AE6A0]/70 transition-colors duration-300 cursor-pointer"
          >
            <!-- punch card strip -->
            <div class="flex gap-[5px] px-4 pt-4">
              <span
                v-for="(h, j) in holes(i)"
                :key="j"
                class="size-[7px] rounded-full transition-colors"
                :class="h ? 'bg-[#E0B458]' : 'border border-[#9AE6A0]/25'"
              />
            </div>
            <div class="p-4">
              <div class="overflow-hidden border border-[#9AE6A0]/20">
                <NuxtImg
                  :src="p.image"
                  :alt="p.name"
                  class="w-full aspect-square object-cover saturate-[0.7] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <p class="mt-4 font-mono text-[10px] tracking-[0.25em] text-[#E0B458]">
                {{ p.category.toUpperCase() }}
              </p>
              <h3 class="mt-1 font-mono text-[15px] text-[#9AE6A0] leading-snug">
                {{ p.name }}
              </h3>
              <div class="mt-3 pt-3 border-t border-[#9AE6A0]/15 flex items-center justify-between font-mono text-[11px]">
                <span class="italic text-[#9AE6A0]/40">{{ p.maker }}</span>
                <span class="text-[#E0B458]">&gt; ${{ p.price }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ README ═══════════ -->
    <section
      id="readme"
      class="border-t border-[#9AE6A0]/20"
    >
      <div class="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div class="border border-[#9AE6A0]/25 bg-[#12140F]">
          <div class="flex items-center gap-2 border-b border-[#9AE6A0]/25 px-4 py-2.5">
            <span class="size-2.5 rounded-full bg-[#9AE6A0]/30" />
            <span class="size-2.5 rounded-full bg-[#E0B458]/50" />
            <span class="size-2.5 rounded-full bg-[#9AE6A0]/30" />
            <span class="ml-3 font-mono text-[10px] tracking-[0.2em] text-[#9AE6A0]/50">README.txt — the becks</span>
          </div>
          <div class="p-6 md:p-8 font-mono text-[13px] leading-relaxed text-[#9AE6A0]/70 space-y-4">
            <p class="text-[#E0B458]">
              ;; A household manufacturing co-op, Toronto, ON
            </p>
            <p>
              It started with one quilt — a wedding gift that took a winter and
              became the thing everyone asked about. Now Mom pieces and
              hand-quilts, Dad turns bowls and boards in the garage, and the
              rest of us paint, place diamond dots, pack orders and taste-test.
            </p>
            <p>
              Nothing ships in bulk. Nothing ships in a hurry. If it's listed,
              one of us held it, finished it, and was a little sad to let it go.
            </p>
            <p class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <span><span class="text-[#E0B458]">$ uptime</span><br>10 years of making</span>
              <span><span class="text-[#E0B458]">$ threads</span><br>4 crafts, one roof</span>
              <span><span class="text-[#E0B458]">$ fuel</span><br>∞ cups of tea</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="border-t border-[#9AE6A0]/20 bg-[#0B0C09]">
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div class="grid md:grid-cols-2 gap-10 items-center pb-14 border-b border-[#9AE6A0]/15">
          <h2 class="font-display text-4xl md:text-5xl text-[#9AE6A0] leading-tight">
            Subscribe to<br>the thread<span class="cursor">▌</span>
          </h2>
          <form class="flex items-center gap-2 border border-[#9AE6A0]/30 bg-[#0E0F0C] px-4 py-3.5 font-mono text-sm focus-within:border-[#E0B458] transition-colors">
            <span class="text-[#E0B458] shrink-0 hidden sm:inline">~$</span>
            <input
              type="email"
              placeholder="subscribe you@email.com"
              class="flex-1 bg-transparent text-[#9AE6A0] placeholder:text-[#9AE6A0]/30 focus:outline-none"
            >
            <button
              type="submit"
              class="text-[#E0B458] hover:text-[#9AE6A0] transition-colors shrink-0"
            >
              [enter ↵]
            </button>
          </form>
        </div>
        <div class="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] tracking-[0.2em] text-[#9AE6A0]/40">
          <span>© {{ year }} THE BECK FAMILY</span>
          <span>QUILTS · DIAMOND DOTS · WOODWORK · ARTWORK</span>
          <span>EOF — HANDMADE IN TORONTO</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v8 {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
}
.font-display {
  font-family: 'VT323', 'IBM Plex Mono', monospace;
}
@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}
.cursor {
  animation: blink 1.1s steps(1) infinite;
}
</style>
