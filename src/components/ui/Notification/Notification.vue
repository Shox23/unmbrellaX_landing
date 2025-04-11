<template>
  <div class="flex flex-col items-center gap-[5px]">
    <div class="relative">
      <div class="absolute rounded-full w-1.5 h-1.5 bg-[#ff6663] -right-2 -top-1"></div>
      <SvgIcon :name="icon" />
    </div>
    <p class="text-[9px] text-[#e0e0d1] max-w-16 text-center">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import type { NotificationProps } from "./interfaces";

defineProps<NotificationProps>();
</script>
