<script setup lang="ts">
definePageMeta({ layout: 'variants' })

useHead({
  title: 'Beckcraft — Variant 9: Stickerbook',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Shrikhand&family=Caveat:wght@500;600;700&family=Karla:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap' }
  ]
})

const { products } = useProducts()
const year = new Date().getFullYear()

const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']
const chips = ['bg-[#2A9D8F]', 'bg-[#E4572E]', 'bg-[#EF7B9C]', 'bg-[#F2A541]']
const notes = ['mom made this!', 'dad made this!', 'sarah made this!', 'dad made this!']
</script>

<template>
  <div class="v9 min-h-screen bg-[#FBF5E9] text-[#2E2A24] antialiased overflow-x-clip">
    <!-- ═══════════ HEADER ═══════════ -->
    <header class="max-w-6xl mx-auto px-6 md:px-10 pt-8 pb-4 flex items-center justify-between">
      <!-- logo sticker -->
      <span class="sticker inline-block -rotate-2 px-5 py-2 font-display text-2xl text-[#EF7B9C]">
        beckcraft
      </span>
      <nav class="flex items-center gap-6 text-[13px] font-semibold">
        <a
          href="#goods"
          class="hidden sm:inline underline decoration-[#F2A541] decoration-4 underline-offset-4 hover:decoration-[#EF7B9C] transition-colors"
        >goods</a>
        <a
          href="#notebook"
          class="hidden sm:inline underline decoration-[#2A9D8F] decoration-4 underline-offset-4 hover:decoration-[#EF7B9C] transition-colors"
        >about us</a>
        <a
          href="#goods"
          class="sticker rotate-1 px-4 py-1.5 bg-[#F2A541] hover:-rotate-2 transition-transform"
        >say hi 👋</a>
      </nav>
    </header>

    <!-- ═══════════ HERO ═══════════ -->
    <section class="relative max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-24">
      <!-- floating doodles -->
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        class="absolute top-10 left-[8%] size-8 text-[#F2A541] animate-wiggle hidden md:block"
      >
        <path
          d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 20"
        class="absolute bottom-16 left-[4%] w-24 text-[#2A9D8F] animate-wiggle hidden md:block"
        style="animation-delay: -2s"
      >
        <path
          d="M2 10 Q 12 2, 24 10 T 48 10 T 72 10 T 98 10"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>

      <div class="grid lg:grid-cols-12 gap-14 items-center">
        <!-- Copy -->
        <div class="lg:col-span-6 relative">
          <p class="font-hand text-3xl text-[#E4572E] mb-4 -rotate-2 inline-block">
            hi! we're the Becks ✳
          </p>
          <h1 class="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-[#2E2A24]">
            Stuff we made,
            <span class="relative inline-block text-[#2A9D8F]">
              straight
              <svg
                aria-hidden="true"
                viewBox="0 0 200 14"
                class="absolute -bottom-1 left-0 w-full text-[#EF7B9C]"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 10 Q 30 3, 60 8 T 120 8 T 197 7"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            from our table.
          </h1>
          <p class="mt-7 max-w-md text-[16px] leading-relaxed text-[#2E2A24]/70">
            Quilts, diamond dots, bowls and paintings — all made at home in
            Toronto, all one of a kind, all stuck into this little book for you.
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#goods"
              class="sticker inline-block rotate-1 bg-[#EF7B9C] px-8 py-3.5 font-display text-xl text-white hover:-rotate-2 hover:scale-105 transition-transform"
            >
              see the goods ↓
            </a>
            <span class="font-hand text-2xl text-[#2E2A24]/60 -rotate-3 inline-block">
              peel one off! →
            </span>
          </div>
        </div>

        <!-- Polaroid sticker -->
        <div class="lg:col-span-6 relative flex justify-center">
          <div class="relative">
            <div class="sticker rotate-2 p-4 pb-5 max-w-sm w-full hover:rotate-0 transition-transform duration-500">
              <!-- tape -->
              <span class="tape bg-[#2A9D8F]/60 -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
              <NuxtImg
                src="/hero.png"
                alt="Handmade patchwork quilt on a wooden bed"
                class="w-full aspect-[4/5] object-cover rounded-lg"
              />
              <p class="pt-3 text-center font-hand text-2xl text-[#2E2A24]/70">
                the sunday quilt!
              </p>
            </div>
            <!-- badge stickers -->
            <span class="sticker absolute -top-6 -right-4 md:-right-10 size-24 rounded-full bg-[#E4572E] text-white flex items-center justify-center text-center font-display text-sm leading-tight rotate-12 animate-wiggle">
              one of a kind!
            </span>
            <span class="sticker absolute -bottom-5 -left-4 md:-left-10 px-4 py-2 bg-[#2A9D8F] text-white font-display text-sm -rotate-6">
              est. toronto
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRODUCTS ═══════════ -->
    <section
      id="goods"
      class="relative py-20 md:py-28"
    >
      <!-- washi strip divider -->
      <div class="absolute top-0 inset-x-0 h-8 bg-[#EF7B9C]/40 tape-strip -rotate-1 scale-x-105" />

      <div class="max-w-6xl mx-auto px-6 md:px-10">
        <div class="text-center mb-16">
          <p class="font-hand text-3xl text-[#2A9D8F] -rotate-1 inline-block mb-3">
            flip the page…
          </p>
          <h2 class="font-display text-4xl md:text-6xl text-[#2E2A24]">
            The sticker sheet
          </h2>
          <p class="mt-4 text-[15px] text-[#2E2A24]/60 max-w-md mx-auto">
            Four favourites from the kitchen table. Collect them all (there are only four).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          <article
            v-for="(p, i) in products"
            :key="p.name"
            class="sticker group relative p-4 pb-5 cursor-pointer transition-all duration-500 hover:rotate-0 hover:scale-[1.04] hover:z-10"
            :class="rotations[i % rotations.length]"
          >
            <span
              class="tape -top-2.5 right-6 rotate-6"
              :class="chips[i % chips.length] + '/60'"
            />
            <div class="overflow-hidden rounded-lg">
              <NuxtImg
                :src="p.image"
                :alt="p.name"
                class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="pt-4 px-1">
              <span
                class="inline-block px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.15em]"
                :class="chips[i % chips.length]"
              >
                {{ p.category }}
              </span>
              <h3 class="mt-2 font-display text-xl leading-snug text-[#2E2A24]">
                {{ p.name }}
              </h3>
              <div class="mt-3 flex items-center justify-between">
                <span class="font-hand text-xl text-[#2E2A24]/55">{{ notes[i % notes.length] }}</span>
                <span class="sticker size-12 rounded-full bg-[#F2A541] flex items-center justify-center font-display text-sm text-[#2E2A24] rotate-6">
                  ${{ p.price }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ NOTEBOOK ═══════════ -->
    <section
      id="notebook"
      class="max-w-6xl mx-auto px-6 md:px-10 pb-24 md:pb-32"
    >
      <div class="relative max-w-3xl mx-auto">
        <div class="lined relative p-8 md:p-12 pl-16 md:pl-20 shadow-[0_20px_50px_-20px_rgba(46,42,36,0.3)] -rotate-1">
          <span class="tape bg-[#F2A541]/60 -top-3 left-10 -rotate-6" />
          <span class="tape bg-[#EF7B9C]/60 -top-3 right-10 rotate-3" />
          <h2 class="font-hand text-4xl md:text-5xl text-[#2E2A24] mb-6">
            a note from our kitchen table ♡
          </h2>
          <div class="space-y-5 font-hand text-2xl md:text-[1.7rem] leading-[1.55] text-[#2E2A24]/80">
            <p>
              it all started with one quilt — a wedding gift that took a whole
              winter and became the thing everyone asked about at parties.
            </p>
            <p>
              now mom quilts, dad turns bowls in the garage, sarah paints, and
              the rest of us pack orders and test cookies. we make a few of
              each thing, list it when it's ready, and it finds its home.
            </p>
            <p class="text-[#E4572E]">
              thanks for stopping by our little book! — the becks xoxo
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="bg-[#2E2A24] text-[#FBF5E9] relative overflow-hidden">
      <div class="absolute top-0 inset-x-0 h-8 bg-[#2A9D8F]/50 tape-strip rotate-1 scale-x-105" />
      <div class="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-12">
        <div class="grid md:grid-cols-2 gap-10 items-center pb-14">
          <h2 class="font-display text-4xl md:text-5xl leading-tight">
            stick around! <span class="text-[#F2A541]">✳</span>
          </h2>
          <form class="sticker flex items-center gap-2 p-2 rotate-1 focus-within:-rotate-1 transition-transform">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 bg-transparent px-4 py-2.5 text-[15px] text-[#2E2A24] placeholder:text-[#2E2A24]/40 focus:outline-none"
            >
            <button
              type="submit"
              class="bg-[#E4572E] text-white font-display px-6 py-2.5 rounded-xl hover:bg-[#EF7B9C] transition-colors"
            >
              stick me on the list
            </button>
          </form>
        </div>
        <div class="pt-8 border-t border-[#FBF5E9]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-[#FBF5E9]/50">
          <span class="font-display text-lg text-[#EF7B9C]">beckcraft</span>
          <p>quilts · diamond dots · woodwork · artwork</p>
          <p>© {{ year }} the beck family — made with glue sticks in toronto</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.v9 {
  font-family: 'Karla', ui-sans-serif, system-ui, sans-serif;
}
.font-display {
  font-family: 'Shrikhand', Georgia, serif;
}
.font-hand {
  font-family: 'Caveat', cursive;
}
.sticker {
  background: #fff;
  border: 2.5px solid #fff;
  border-radius: 1.1rem;
  box-shadow:
    0 2px 0 rgba(46, 42, 36, 0.12),
    0 14px 28px -12px rgba(46, 42, 36, 0.28);
}
.sticker.rounded-full {
  border-radius: 999px;
}
.tape {
  position: absolute;
  width: 84px;
  height: 26px;
  display: block;
  box-shadow: 0 1px 3px rgba(46, 42, 36, 0.18);
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.3) 0 7px,
    rgba(255, 255, 255, 0) 7px 14px
  );
}
.tape-strip {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.25) 0 10px,
    rgba(255, 255, 255, 0) 10px 20px
  );
  box-shadow: 0 2px 6px rgba(46, 42, 36, 0.15);
}
.lined {
  background-color: #fff;
  border-radius: 4px;
  background-image:
    linear-gradient(90deg, transparent 2.9rem, rgba(228, 87, 46, 0.5) 2.9rem, rgba(228, 87, 46, 0.5) calc(2.9rem + 1.5px), transparent calc(2.9rem + 1.5px)),
    repeating-linear-gradient(to bottom, transparent 0 39px, rgba(42, 157, 143, 0.28) 39px 40px);
  background-position: 0 8px;
}
@keyframes wiggle {
  0%, 100% {
    transform: rotate(-5deg) scale(1);
  }
  50% {
    transform: rotate(6deg) scale(1.06);
  }
}
.animate-wiggle {
  animation: wiggle 3.5s ease-in-out infinite;
}
</style>
