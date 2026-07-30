<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 2: Barnwood',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()
</script>

<template>
  <div class="v2 min-h-screen bg-[#F6F3EC] text-[#3A352C] antialiased">
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="max-w-5xl mx-auto px-6 pt-8 pb-6">
      <div class="flex items-center justify-between border-b border-dashed border-[#3A352C]/30 pb-5">
        <span class="font-display text-2xl">
          beck<span class="text-[#6C7250]">craft</span>
          <span class="ml-2 text-[10px] font-body uppercase tracking-[0.25em] text-[#3A352C]/50 align-middle">family made</span>
        </span>
        <div class="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-[#3A352C]/60">
          <a
            href="#goods"
            class="hover:text-[#6C7250] transition-colors hidden sm:inline"
          >Goods</a>
          <a
            href="#about"
            class="hover:text-[#6C7250] transition-colors hidden sm:inline"
          >About</a>
          <span class="border border-dashed border-[#6C7250]/60 text-[#6C7250] px-3 py-1.5">Toronto, ON</span>
        </div>
      </div>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="max-w-5xl mx-auto px-6 pt-10 pb-20 md:pt-16 md:pb-28 text-center relative">
      <!-- stitched frame -->
      <div class="absolute inset-x-4 sm:inset-x-0 top-0 bottom-0 border border-dashed border-[#3A352C]/20 rounded-3xl pointer-events-none" />

      <div class="relative">
        <p class="font-hand text-3xl md:text-4xl text-[#6C7250] mb-4">
          handmade goods, from our family
        </p>
        <h1 class="font-display text-5xl md:text-7xl leading-[1.05] font-medium tracking-tight max-w-3xl mx-auto">
          Warm things for<br>a slower home.
        </h1>
        <p class="mt-6 max-w-lg mx-auto text-[15px] leading-relaxed text-[#3A352C]/65">
          Quilts, diamond dot paintings, small wooden pieces and artwork —
          each one made by hand at our place in Toronto, in small unhurried batches.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#goods"
            class="bg-[#6C7250] text-[#F6F3EC] px-9 py-4 rounded-full text-[12px] uppercase tracking-[0.2em] hover:bg-[#3A352C] transition-colors duration-300"
          >
            See what's made
          </a>
          <a
            href="#about"
            class="px-9 py-4 rounded-full text-[12px] uppercase tracking-[0.2em] border border-dashed border-[#3A352C]/40 hover:border-[#6C7250] hover:text-[#6C7250] transition-colors duration-300"
          >
            Our story
          </a>
        </div>

        <!-- Image strip -->
        <div class="mt-16 grid grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto">
          <div class="overflow-hidden rounded-xl rotate-[-2deg] shadow-md hover:rotate-0 transition-transform duration-500">
            <NuxtImg
              src="/sunday-quilt.png"
              alt="Handmade quilt folded on a chair"
              class="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div class="overflow-hidden rounded-xl rotate-[1.5deg] -mt-4 shadow-md hover:rotate-0 transition-transform duration-500">
            <NuxtImg
              src="/hero.png"
              alt="Patchwork quilt on a bed"
              class="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div class="overflow-hidden rounded-xl rotate-[2.5deg] shadow-md hover:rotate-0 transition-transform duration-500">
            <NuxtImg
              src="/walnut-bowls.png"
              alt="Hand-turned walnut bowls"
              class="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="bg-[#EFEAE0] border-y border-dashed border-[#3A352C]/25"
    >
      <div class="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div class="text-center mb-14">
          <p class="font-hand text-2xl text-[#6C7250] mb-2">
            fresh off the workbench
          </p>
          <h2 class="font-display text-4xl md:text-5xl font-medium tracking-tight">
            This month's goods
          </h2>
        </div>

        <div class="space-y-6">
          <article
            v-for="(p, i) in products"
            :key="p.name"
            class="group grid grid-cols-[96px_1fr] sm:grid-cols-[140px_1fr_auto] items-center gap-5 sm:gap-8 bg-[#F6F3EC] rounded-2xl p-4 sm:p-5 border border-dashed border-[#3A352C]/20 hover:border-[#6C7250]/60 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div class="overflow-hidden rounded-xl">
              <NuxtImg
                :src="p.image"
                :alt="p.name"
                class="w-24 h-24 sm:w-32 sm:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p class="text-[10px] uppercase tracking-[0.22em] text-[#6C7250] mb-1">
                {{ p.category }} · № 0{{ i + 1 }}
              </p>
              <h3 class="font-display text-xl sm:text-2xl">
                {{ p.name }}
              </h3>
              <p class="mt-1 text-xs italic text-[#3A352C]/55">
                {{ p.maker }}
              </p>
            </div>
            <!-- kraft tag price -->
            <div class="col-start-2 sm:col-start-3 justify-self-start sm:justify-self-end">
              <span class="inline-block bg-[#E4DCCB] border border-dashed border-[#3A352C]/30 rounded-md px-4 py-2 font-display text-lg rotate-[2deg] group-hover:rotate-0 transition-transform duration-300">
                ${{ p.price }}
              </span>
            </div>
          </article>
        </div>

        <p class="text-center mt-10 text-xs uppercase tracking-[0.2em] text-[#3A352C]/50">
          Diamond dot paintings & more listed as they're finished
        </p>
      </div>
    </section>

    <!-- ═══════════ ABOUT ═══════════ -->
    <section
      id="about"
      class="max-w-5xl mx-auto px-6 py-20 md:py-28"
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="font-hand text-3xl text-[#6C7250] mb-3">
            pull up a chair
          </p>
          <h2 class="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            One house,<br>three busy pairs of hands.
          </h2>
          <div class="mt-7 space-y-5 text-[15px] leading-relaxed text-[#3A352C]/70">
            <p>
              Beckcraft is what happens at our kitchen table after supper: Mom's quilt
              pieces spread out next to a diamond dot canvas, Dad's sketch of the next
              serving board tucked under a paint palette.
            </p>
            <p>
              Everything here is made by someone you'll meet at a Toronto market —
              stitched, dotted, sanded or painted between everyday life, and finished
              only when it feels right.
            </p>
          </div>
          <ul class="mt-8 space-y-3">
            <li
              v-for="line in ['Small batches — when it\'s gone, it\'s gone', 'Honest materials, mostly local', 'Custom quilts by conversation']"
              :key="line"
              class="flex items-start gap-3 text-sm text-[#3A352C]/75"
            >
              <span class="mt-1.5 size-2 rounded-full bg-[#6C7250] shrink-0" />
              {{ line }}
            </li>
          </ul>
        </div>
        <div class="relative">
          <div class="overflow-hidden rounded-2xl rotate-[1.5deg] shadow-xl">
            <NuxtImg
              src="/quilt.png"
              alt="Folded quilt resting on an old wooden chair"
              class="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div class="absolute -bottom-5 -left-3 sm:-left-6 bg-[#3A352C] text-[#F6F3EC] rounded-xl px-6 py-4 rotate-[-2deg] shadow-lg">
            <p class="font-hand text-2xl text-[#C9CBA9]">
              — the Becks
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="bg-[#3A352C] text-[#F6F3EC]">
      <div class="max-w-5xl mx-auto px-6 py-16">
        <div class="text-center max-w-md mx-auto">
          <p class="font-hand text-3xl text-[#C9CBA9] mb-3">
            stay in the loop
          </p>
          <h2 class="font-display text-3xl font-medium">
            A note when new goods land
          </h2>
          <form class="mt-7 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 bg-transparent border border-dashed border-[#F6F3EC]/40 rounded-full px-5 py-3 text-sm placeholder:text-[#F6F3EC]/40 focus:outline-none focus:border-[#C9CBA9]"
            >
            <button
              type="submit"
              class="bg-[#6C7250] rounded-full px-7 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-[#C9CBA9] hover:text-[#3A352C] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div class="mt-14 pt-7 border-t border-dashed border-[#F6F3EC]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F6F3EC]/55">
          <span class="font-display text-base text-[#F6F3EC]">beck<span class="text-[#C9CBA9]">craft</span></span>
          <p>Quilts · Diamond dots · Woodwork · Artwork</p>
          <p>© {{ year }} — Handmade in Toronto</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v2 {
  font-family: 'Nunito Sans', ui-sans-serif, system-ui, sans-serif;
}
.font-display {
  font-family: 'Bitter', Georgia, serif;
}
.font-hand {
  font-family: 'Dancing Script', cursive;
}
</style>
