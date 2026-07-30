<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 10: Ephemera',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Special+Elite&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()

const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2']
</script>

<template>
  <div class="v10 min-h-screen bg-[#E8DCC6] text-[#3B2F23] antialiased selection:bg-[#A63A2E] selection:text-[#F7F1E3]">
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-6 flex items-center justify-between">
      <!-- manila tag logo -->
      <div class="relative inline-flex items-center gap-3 bg-[#D3BE9B] border border-[#3B2F23]/25 px-5 py-2.5 -rotate-2 shadow-[3px_3px_0_rgba(59,47,35,0.2)]">
        <span class="absolute -left-1.5 top-1/2 -translate-y-1/2 size-3 rounded-full bg-[#E8DCC6] border border-[#3B2F23]/35" />
        <span class="font-stamp text-lg tracking-[0.12em] uppercase">
          Beckcraft
        </span>
      </div>
      <nav class="flex items-center gap-7 font-stamp text-[11px] uppercase tracking-[0.25em] text-[#3B2F23]/65">
        <a
          href="#goods"
          class="hover:text-[#A63A2E] transition-colors hidden sm:inline"
        >Parcels</a>
        <a
          href="#letter"
          class="hover:text-[#A63A2E] transition-colors hidden sm:inline"
        >The letter</a>
        <span class="text-[#3E5C76]">Toronto, ON</span>
      </nav>
    </header>

    <!-- twine divider -->
    <div class="max-w-6xl mx-auto px-6 md:px-10">
      <div class="border-t-2 border-dashed border-[#3B2F23]/30" />
    </div>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="max-w-6xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-20 md:pb-28">
      <div class="grid lg:grid-cols-12 gap-14 items-center">
        <!-- Copy -->
        <div class="lg:col-span-6">
          <p class="font-stamp text-[11px] uppercase tracking-[0.35em] text-[#3E5C76] mb-7">
            Parcel № 001 — contents: handmade goods
          </p>
          <h1 class="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.06] font-medium">
            Handle with care —<br>
            <em class="text-[#A63A2E]">it's handmade.</em>
          </h1>
          <p class="mt-8 max-w-md font-serif text-lg leading-relaxed text-[#3B2F23]/75">
            Quilts, diamond dots, turned wood and paintings, wrapped in kraft
            paper and twine at our kitchen table in Toronto, and posted to
            good homes.
          </p>
          <!-- rubber stamp -->
          <div class="mt-9">
            <span class="inline-block -rotate-6 border-[3px] border-[#A63A2E]/75 outline outline-2 outline-offset-4 outline-[#A63A2E]/45 px-5 py-2 font-stamp text-[13px] uppercase tracking-[0.3em] text-[#A63A2E]/85">
              Handmade with care
            </span>
          </div>
          <div class="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#goods"
              class="inline-flex items-center gap-3 bg-[#3B2F23] text-[#F7F1E3] px-8 py-4 font-stamp text-[12px] uppercase tracking-[0.25em] hover:bg-[#A63A2E] transition-colors duration-300"
            >
              Open the parcel ↓
            </a>
            <a
              href="#letter"
              class="font-stamp text-[12px] uppercase tracking-[0.25em] text-[#3B2F23]/70 underline underline-offset-8 decoration-dashed decoration-[#3B2F23]/40 hover:text-[#A63A2E] transition-colors"
            >
              Read the letter
            </a>
          </div>
        </div>

        <!-- Stamp sheet image -->
        <div class="lg:col-span-6 relative flex justify-center">
          <div class="relative">
            <div class="bg-[#F7F1E3] p-3 pb-4 shadow-[0_24px_50px_-20px_rgba(59,47,35,0.45)] rotate-2 hover:rotate-0 transition-transform duration-700 max-w-md w-full">
              <div class="border border-dashed border-[#3B2F23]/40 p-2">
                <NuxtImg
                  src="/hero.png"
                  alt="Handmade patchwork quilt on a wooden bed"
                  class="w-full aspect-[4/5] object-cover"
                />
              </div>
              <p class="pt-3 text-center font-stamp text-[10px] uppercase tracking-[0.3em] text-[#3B2F23]/55">
                Beckcraft · first class · one of one
              </p>
            </div>
            <!-- postmark -->
            <svg
              aria-hidden="true"
              viewBox="0 0 120 120"
              class="absolute -top-8 -right-4 md:-right-10 size-28 md:size-32 rotate-12 text-[#3E5C76]/75"
            >
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
              <circle
                cx="60"
                cy="60"
                r="36"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
              />
              <defs>
                <path
                  id="postmark-arc"
                  d="M 60 16 a 44 44 0 0 1 0 88 a 44 44 0 0 1 0 -88"
                  fill="none"
                />
              </defs>
              <text
                font-size="10.5"
                letter-spacing="2.5"
                fill="currentColor"
                style="font-family: 'Special Elite', monospace"
              >
                <textPath href="#postmark-arc">TORONTO · ONTARIO · CANADA ·</textPath>
              </text>
              <text
                x="60"
                y="57"
                text-anchor="middle"
                font-size="13"
                letter-spacing="1.5"
                fill="currentColor"
                style="font-family: 'Special Elite', monospace"
              >EST</text>
              <text
                x="60"
                y="72"
                text-anchor="middle"
                font-size="13"
                letter-spacing="1.5"
                fill="currentColor"
                style="font-family: 'Special Elite', monospace"
              >2016</text>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="bg-[#DECFB2] border-y-2 border-dashed border-[#3B2F23]/25"
    >
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div class="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p class="font-stamp text-[11px] uppercase tracking-[0.35em] text-[#3E5C76] mb-4">
              Contents listing
            </p>
            <h2 class="font-serif text-4xl md:text-5xl font-medium">
              This dispatch
            </h2>
          </div>
          <p class="font-stamp text-[11px] uppercase tracking-[0.2em] text-[#3B2F23]/50 max-w-xs leading-relaxed">
            Inspected, wrapped &amp; tied with twine. Postage paid in full.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <article
            v-for="(p, i) in products"
            :key="p.name"
            class="group cursor-pointer transition-transform duration-500 hover:rotate-0 hover:-translate-y-2"
            :class="rotations[i % rotations.length]"
          >
            <!-- envelope -->
            <div class="bg-[#D3BE9B] border border-[#3B2F23]/25 shadow-[4px_4px_0_rgba(59,47,35,0.18)]">
              <div class="h-7 bg-[#C4AC83] border-b border-[#3B2F23]/25 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
              <div class="p-4">
                <div class="bg-[#F7F1E3] border border-[#3B2F23]/20 p-2">
                  <NuxtImg
                    :src="p.image"
                    :alt="p.name"
                    class="w-full aspect-[4/5] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <p class="mt-4 font-stamp text-[9px] uppercase tracking-[0.3em] text-[#3E5C76]">
                  Catalogue № 00{{ i + 1 }} · {{ p.category }}
                </p>
                <h3 class="mt-1.5 font-serif text-xl font-medium leading-snug">
                  {{ p.name }}
                </h3>
                <div class="mt-3 pt-3 border-t border-dashed border-[#3B2F23]/30 flex items-center justify-between">
                  <span class="font-serif italic text-[13px] text-[#3B2F23]/55">{{ p.maker }}</span>
                  <span class="font-stamp text-[13px] text-[#A63A2E]">${{ p.price }} pd.</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ LETTER ═══════════ -->
    <section
      id="letter"
      class="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28"
    >
      <div class="relative max-w-2xl mx-auto bg-[#F7F1E3] border border-[#3B2F23]/20 shadow-[0_24px_50px_-24px_rgba(59,47,35,0.4)] p-8 md:p-12 -rotate-1">
        <div class="absolute inset-x-0 top-1/2 border-t border-dashed border-[#3B2F23]/15" />
        <div class="relative">
          <p class="font-stamp text-[10px] uppercase tracking-[0.3em] text-[#3E5C76] mb-8 text-right">
            The Beck Family · Toronto
          </p>
          <div class="space-y-5 font-serif text-lg leading-relaxed text-[#3B2F23]/85">
            <p class="italic">
              Dear friend,
            </p>
            <p>
              Thank you for opening our parcel. Everything inside began at this
              kitchen table — one quilt for a wedding, one bowl from a fallen
              High Park limb, one painting of the lake on a good morning.
            </p>
            <p>
              We don't make much, and we don't make it fast. But everything we
              send is something we were a little sad to let go of. We hope it
              finds a good home with you.
            </p>
            <p class="italic">
              With love &amp; sawdust,<br>
              — The Becks
            </p>
          </div>
          <!-- wax seal -->
          <div class="mt-8 flex justify-end">
            <span class="wax-seal size-14 grid place-items-center bg-[#A63A2E] text-[#F7F1E3] font-serif italic text-2xl shadow-[0_4px_10px_rgba(59,47,35,0.35)] -rotate-6">
              B
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="bg-[#3B2F23] text-[#E8DCC6]">
      <div class="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <!-- shipping label -->
        <div class="max-w-2xl mx-auto bg-[#F7F1E3] text-[#3B2F23] border-2 border-[#3B2F23] p-6 md:p-8 rotate-1 shadow-[8px_8px_0_rgba(0,0,0,0.25)]">
          <div class="flex items-start justify-between gap-6 mb-6">
            <div>
              <p class="font-stamp text-[10px] uppercase tracking-[0.3em] text-[#3E5C76] mb-2">
                Ship to:
              </p>
              <p class="font-serif text-2xl font-medium leading-snug">
                Your good home
              </p>
            </div>
            <span class="inline-block rotate-6 border-2 border-[#A63A2E]/75 px-3 py-1.5 font-stamp text-[10px] uppercase tracking-[0.25em] text-[#A63A2E]/85 shrink-0">
              Do not bend
            </span>
          </div>
          <form class="flex border-2 border-[#3B2F23]">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 bg-transparent px-4 py-3.5 font-stamp text-sm tracking-wider placeholder:text-[#3B2F23]/35 focus:outline-none"
            >
            <button
              type="submit"
              class="bg-[#3B2F23] text-[#F7F1E3] px-6 font-stamp text-[11px] uppercase tracking-[0.25em] hover:bg-[#A63A2E] transition-colors"
            >
              Post it
            </button>
          </form>
          <div class="barcode mt-6 h-10 w-full" />
          <p class="mt-2 font-stamp text-[9px] uppercase tracking-[0.3em] text-[#3B2F23]/45 text-center">
            One quiet dispatch when new goods are listed
          </p>
        </div>

        <div class="mt-16 pt-8 border-t border-[#E8DCC6]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-stamp text-[10px] uppercase tracking-[0.25em] text-[#E8DCC6]/45">
          <span class="text-[#E8DCC6]">Beckcraft</span>
          <p>Quilts · Diamond dots · Woodwork · Artwork</p>
          <p>© {{ year }} — Return address: Toronto, ON</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v10 {
  font-family: 'EB Garamond', Georgia, serif;
}
.font-stamp {
  font-family: 'Special Elite', 'Courier New', monospace;
}
.font-serif {
  font-family: 'EB Garamond', Georgia, serif;
}
.wax-seal {
  border-radius: 47% 53% 52% 48% / 55% 49% 51% 45%;
}
.barcode {
  background-image: repeating-linear-gradient(
    90deg,
    #3b2f23 0 2px,
    transparent 2px 4px,
    #3b2f23 4px 8px,
    transparent 8px 10px,
    #3b2f23 10px 11px,
    transparent 11px 15px,
    #3b2f23 15px 19px,
    transparent 19px 21px
  );
}
</style>
