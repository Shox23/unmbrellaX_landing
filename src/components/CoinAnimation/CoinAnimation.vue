<template>
  <div @click="setMousePosition" class="relative">
    <Vue3Lottie :animationData="animation" :height="200" :width="200" />
    <div
      ref="floatingContent"
      class="text-[#f1cf96] absolute font-medium text-sm opacity-0"
    >
      0.000001$
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from "@reslear/vue3-lottie";
import animation from "../../assets/lottie/coin.json";
import { ref, watchEffect } from "vue";

const isContentVisible = ref<boolean>(false);
const floatingContent = ref<HTMLDivElement | null>(null);

const setMousePosition = (event: MouseEvent) => {
  if (isContentVisible.value) {
    return;
  } else {
    if (floatingContent.value) {
      console.log(event.offsetX);
      console.log(event.offsetY);

      isContentVisible.value = true;
      let width = floatingContent.value.getBoundingClientRect().width;
      floatingContent.value.style.top = `${event.offsetY}px`;
      floatingContent.value.style.left = `${event.offsetX - width / 2}px`;
      setTimeout(() => {
        isContentVisible.value = false;
      }, 1200);
    }
  }
};

watchEffect(() => {
  if (floatingContent.value) {
    if (isContentVisible.value) {
      floatingContent.value.classList.add("animate-bounceUpFadeOut");
      floatingContent.value.style.opacity = "1";
    } else {
      floatingContent.value.style.opacity = "0";
      floatingContent.value.style.top = "auto";
      floatingContent.value.style.left = "auto";
      floatingContent.value.classList.remove("animate-bounceUpFadeOut");
    }
  }
});
</script>
