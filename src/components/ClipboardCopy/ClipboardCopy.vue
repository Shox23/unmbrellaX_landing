<template>
  <div class="flex items-center gap-2">
    <div
      class="text-xs text-[#f1cf96] rounded-(--rounded-base) bg-[#4d5166] py-[5px] px-[9px]"
    >
      {{ text }}
    </div>
    <button class="cursor-pointer"><SvgIcon name="copy" /></button>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from "../ui/SvgIcon/SvgIcon.vue";
import type { ClipboardCopyProps } from "./interfaces";

defineProps<ClipboardCopyProps>();
</script>
