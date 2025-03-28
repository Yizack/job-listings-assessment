<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";
import { SITE } from "~/utils/site";

const isOpen = ref(false);
const mode = useColorMode();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="sticky top-0 bg-body-secondary px-6 py-2 w-full z-50 shadow-md">
    <!-- Desktop navbar -->
    <div>
      <div class="flex justify-between items-center w-full max-w-6xl mx-auto gap-4">
        <RouterLink to="/">
          <h1 class="text-xl font-bold">{{ SITE.name }}</h1>
        </RouterLink>
        <div class="hidden lg:flex gap-4 items-center ms-auto">
          <RouterLink v-for="(page, i) of SITE.pages" :key="i" :to="page.path" class="rounded-lg px-3 py-2 font-medium hover:underline hover:dark:bg-gray-500 hover:bg-gray-300">
            {{ page.name }}
          </RouterLink>
        </div>
        <div class="flex gap-4">
          <button class="rounded-lg py-2 cursor-pointer" role="button" title="Toogle Theme" @click="mode = mode === 'dark' ? 'light' : 'dark'">
            <Icon :icon="mode === 'dark' ? 'tabler:bulb-off' : 'tabler:bulb'" class="w-6 h-6" />
          </button>
          <Transition name="slide-right" mode="out-in">
            <button v-if="!isOpen" class="lg:hidden rounded-lg px-3 py-2 cursor-pointer" @click="toggleMenu">
              <Icon icon="tabler:menu-2" style="font-size: 1.5rem;" />
            </button>
          </Transition>
        </div>
      </div>
    </div>
    <!-- Off canvas menu -->
    <div v-if="isOpen" class="bg-body-secondary fixed inset-0 opacity-50 z-40 lg:hidden" @click="toggleMenu" />
    <Transition name="slide-left" mode="out-in">
      <div v-if="isOpen" class="bg-body-secondary w-80 shadow-xl fixed inset-y-0 left-0 z-50 transform transition-transform lg:hidden" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="flex items-center justify-between shadow p-4">
          <h2 class="text-lg font-bold">{{ SITE.name }}</h2>
          <button class="focus:outline-none rounded-lg p-1 cursor-pointer hover:bg-red-400" @click="toggleMenu">
            <Icon icon="tabler:x" class="w-6 h-6" />
          </button>
        </div>
        <div class="flex flex-col space-y-2 p-4">
          <RouterLink v-for="(page, i) of SITE.pages" :key="i" :to="page.path" class="rounded-lg px-3 py-3 text-sm font-medium hover:underline" @click="toggleMenu">
            {{ page.name }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>
