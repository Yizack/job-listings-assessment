
<script setup lang="ts">
import { useNProgress } from "@vueuse/integrations/useNProgress";
import { onMounted, watch } from "vue";

const { isLoading, start, done } = useNProgress();

isLoading.value = true;

watch(isLoading, (loading) => {
  if (loading) start();
  else done();
});

onMounted(() => {
  isLoading.value = false;
});
</script>


<template>
  <span />
</template>

<style>
/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-blue-600);
  &:where(.dark, .dark *) {
    background-color: var(--color-blue-300);
  }
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  opacity: 1;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);

  box-shadow: 0 0 10px var(--color-blue-600), 0 0 5px var(--color-blue-600);
  &:where(.dark, .dark *) {
    box-shadow: 0 0 10px var(--color-blue-300), 0 0 5px var(--color-blue-300);
  }
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
