<script setup lang="ts">
const route = useRoute()

const variants = [
  { to: '/variants/v1', label: 'V1', name: 'Homestead' },
  { to: '/variants/v2', label: 'V2', name: 'Barnwood' },
  { to: '/variants/v3', label: 'V3', name: 'Cottage' },
  { to: '/variants/v4', label: 'V4', name: 'Ember' },
  { to: '/variants/v5', label: 'V5', name: 'Patchwork' },
  { to: '/variants/v6', label: 'V6', name: 'Blueprint' },
  { to: '/variants/v7', label: 'V7', name: 'Risograph' },
  { to: '/variants/v8', label: 'V8', name: 'Loom' },
  { to: '/variants/v9', label: 'V9', name: 'Stickerbook' },
  { to: '/variants/v10', label: 'V10', name: 'Ephemera' }
]

const expanded = ref(false)
const current = computed(() => variants.find(v => v.to === route.path))
</script>

<template>
  <div class="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] font-sans">
    <!-- Expanded panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
    >
      <div
        v-if="expanded"
        class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 max-h-[70vh] overflow-y-auto rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-md shadow-2xl p-2 origin-bottom"
      >
        <p class="px-3 pt-2 pb-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Design variants
        </p>
        <NuxtLink
          v-for="v in variants"
          :key="v.to"
          :to="v.to"
          class="flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors"
          :class="v.to === route.path
            ? 'bg-white/10 text-white'
            : 'text-neutral-400 hover:text-white hover:bg-white/5'"
          @click="expanded = false"
        >
          <span>{{ v.name }}</span>
          <span class="text-[10px] font-mono text-neutral-500">{{ v.label }}</span>
        </NuxtLink>
        <div class="border-t border-white/10 mt-2 pt-2">
          <NuxtLink
            to="/"
            class="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            @click="expanded = false"
          >
            <span>Current site</span>
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-3.5"
            />
          </NuxtLink>
        </div>
      </div>
    </Transition>

    <!-- Pill bar -->
    <div class="flex items-center gap-1 max-w-[calc(100vw-2.5rem)] overflow-x-auto no-scrollbar rounded-full border border-white/10 bg-neutral-900/95 backdrop-blur-md shadow-2xl px-2 py-1.5">
      <button
        class="flex shrink-0 items-center gap-2 pl-2 pr-3 py-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
        @click="expanded = !expanded"
      >
        <UIcon
          :name="expanded ? 'i-lucide-chevron-down' : 'i-lucide-chevron-up'"
          class="size-3.5"
        />
        <span class="font-medium">{{ current?.name ?? 'Variants' }}</span>
      </button>

      <div class="w-px h-4 shrink-0 bg-white/10" />

      <NuxtLink
        v-for="v in variants"
        :key="v.to"
        :to="v.to"
        class="size-7 shrink-0 rounded-full flex items-center justify-center text-[10px] font-mono transition-all"
        :class="v.to === route.path
          ? 'bg-white text-neutral-900 font-bold'
          : 'text-neutral-400 hover:text-white hover:bg-white/10'"
        :title="v.name"
      >
        {{ v.label.replace('V', '') }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
