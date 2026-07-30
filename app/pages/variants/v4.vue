<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 4: Ember',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Marcellus&family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;1,300&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()
</script>

<template>
  <div class="v4 min-h-screen bg-[#1C241F] text-[#EFE7D8] antialiased selection:bg-[#C97B4A] selection:text-[#1C241F]">
    <!-- film grain over everything -->
    <div class="grain pointer-events-none fixed inset-0 z-40 opacity-[0.05]" />

    <!-- ═══════════ HEADER ═══════════ -->
    <header class="relative max-w-6xl mx-auto px-6 md:px-10 py-7 flex items-center justify-between">
      <span class="font-display text-2xl tracking-wide">
        beck<span class="text-[#C97B4A]">craft</span>
      </span>
      <nav class="flex items-center gap-7 text-[11px] uppercase tracking-[0.28em] text-[#EFE7D8]/55">
        <a
          href="#goods"
          class="hover:text-[#C97B4A] transition-colors hidden sm:inline"
        >Goods</a>
        <a
          href="#about"
          class="hover:text-[#C97B4A] transition-colors hidden sm:inline"
        >Workshop</a>
        <span class="text-[#C97B4A]">◆ Toronto</span>
      </nav>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="relative max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-24 md:pb-32">
      <div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <!-- Arched image -->
        <div class="relative order-2 lg:order-1">
          <div class="arch overflow-hidden border border-[#EFE7D8]/15">
            <NuxtImg
              src="/hero.png"
              alt="Handmade patchwork quilt on a wooden bed"
              class="w-full aspect-[4/5] object-cover scale-105 hover:scale-110 transition-transform duration-[1.5s]"
            />
          </div>
          <!-- ember glow -->
          <div class="absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(201,123,74,0.22),transparent_65%)]" />
          <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#C97B4A] text-[#1C241F] px-7 py-3 text-[11px] uppercase tracking-[0.3em] whitespace-nowrap">
            Quilt № 12 — finished this week
          </div>
        </div>

        <!-- Copy -->
        <div class="order-1 lg:order-2">
          <p class="text-[11px] uppercase tracking-[0.4em] text-[#C97B4A] mb-7 flex items-center gap-4">
            <span class="w-10 h-px bg-[#C97B4A]" />
            A family workshop
          </p>
          <h1 class="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.08]">
            By lamplight,<br>
            by hand,<br>
            <span class="text-[#C97B4A]">by us.</span>
          </h1>
          <p class="mt-8 max-w-md text-[15px] font-light leading-relaxed text-[#EFE7D8]/65">
            Quilts pieced at the table, diamond dots placed one sparkle at a time,
            boards and bowls turned from Ontario hardwood, paintings from the front
            room. Made slowly — then offered here.
          </p>
          <div class="mt-11 flex flex-wrap items-center gap-5">
            <a
              href="#goods"
              class="inline-flex items-center gap-3 bg-[#C97B4A] text-[#1C241F] px-8 py-4 text-[12px] uppercase tracking-[0.25em] font-medium hover:bg-[#EFE7D8] transition-colors duration-300"
            >
              Browse goods
            </a>
            <a
              href="#about"
              class="text-[12px] uppercase tracking-[0.25em] text-[#EFE7D8]/70 border-b border-[#C97B4A]/50 pb-1 hover:text-[#C97B4A] hover:border-[#C97B4A] transition-colors"
            >
              Step into the workshop
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="relative bg-[#161C18] border-y border-[#EFE7D8]/10"
    >
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div class="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p class="text-[11px] uppercase tracking-[0.4em] text-[#C97B4A] mb-4">
              The current shelf
            </p>
            <h2 class="font-display text-4xl md:text-5xl">
              Ready to send
            </h2>
          </div>
          <p class="text-xs font-light text-[#EFE7D8]/45 max-w-xs leading-relaxed">
            One of each, sometimes two. When a piece sells, the next one is already on the bench.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <article
            v-for="p in products"
            :key="p.name"
            class="group bg-[#1C241F] border border-[#EFE7D8]/10 hover:border-[#C97B4A]/50 transition-colors duration-500 cursor-pointer"
          >
            <div class="overflow-hidden">
              <NuxtImg
                :src="p.image"
                :alt="p.name"
                class="w-full aspect-square object-cover saturate-[0.85] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div class="p-5">
              <p class="text-[10px] uppercase tracking-[0.3em] text-[#C97B4A] mb-2">
                {{ p.category }}
              </p>
              <h3 class="font-display text-xl leading-snug">
                {{ p.name }}
              </h3>
              <div class="mt-4 pt-4 border-t border-[#EFE7D8]/10 flex items-center justify-between">
                <span class="text-[11px] font-light italic text-[#EFE7D8]/45">{{ p.maker }}</span>
                <span class="font-display text-lg text-[#C97B4A]">${{ p.price }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ ABOUT ═══════════ -->
    <section
      id="about"
      class="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <p class="text-[11px] uppercase tracking-[0.4em] text-[#C97B4A] mb-6 flex items-center gap-4">
            <span class="w-10 h-px bg-[#C97B4A]" />
            The workshop
          </p>
          <h2 class="font-display text-4xl md:text-5xl leading-tight">
            Evenings end with<br>thread, sawdust <span class="text-[#C97B4A]">& paint.</span>
          </h2>
          <div class="mt-8 space-y-5 max-w-lg text-[15px] font-light leading-relaxed text-[#EFE7D8]/65">
            <p>
              We're the Becks — a Toronto family that never quite learned to sit still
              after dinner. What began as gifts for friends became a shelf, then a
              market table, then this little shop.
            </p>
            <p>
              Nothing here is made in a hurry or in bulk. If it's on the shelf, one of
              us held it, finished it, and was a little sad to let it go.
            </p>
          </div>
          <div class="mt-12 flex gap-12">
            <div
              v-for="stat in [['10 yrs', 'of making'], ['04', 'crafts, one roof'], ['∞', 'cups of tea']]"
              :key="stat[1]"
            >
              <p class="font-display text-3xl text-[#C97B4A]">
                {{ stat[0] }}
              </p>
              <p class="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-[#EFE7D8]/45">
                {{ stat[1] }}
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5">
          <div class="arch overflow-hidden border border-[#EFE7D8]/15 relative">
            <NuxtImg
              src="/quilt.png"
              alt="Folded quilt on a wooden chair"
              class="w-full aspect-[4/5] object-cover saturate-[0.85]"
            />
          </div>
          <p class="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#EFE7D8]/35 text-center">
            The green quilt — kept, not sold
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="bg-[#12160F] border-t border-[#EFE7D8]/10">
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div class="grid md:grid-cols-2 gap-10 items-center pb-14 border-b border-[#EFE7D8]/10">
          <h2 class="font-display text-3xl md:text-4xl leading-snug">
            First word when new<br>pieces leave the bench.
          </h2>
          <form class="flex border border-[#EFE7D8]/20 focus-within:border-[#C97B4A] transition-colors">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 bg-transparent px-5 py-4 text-sm font-light placeholder:text-[#EFE7D8]/35 focus:outline-none"
            >
            <button
              type="submit"
              class="bg-[#C97B4A] text-[#1C241F] px-7 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-[#EFE7D8] transition-colors"
            >
              Join
            </button>
          </form>
        </div>
        <div class="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-[#EFE7D8]/40">
          <span class="font-display text-lg normal-case tracking-wide text-[#EFE7D8]">beck<span class="text-[#C97B4A]">craft</span></span>
          <p>Quilts · Diamond dots · Woodwork · Artwork</p>
          <p>© {{ year }} — Handmade in Toronto</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v4 {
  font-family: 'Hanken Grotesk', ui-sans-serif, system-ui, sans-serif;
}
.font-display {
  font-family: 'Marcellus', Georgia, serif;
}
.arch {
  border-radius: 999px 999px 12px 12px;
}
.grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
</style>
