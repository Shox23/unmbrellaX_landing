<template>
  <button :class="dynamicClasses" v-bind="$attrs">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { FilledButtonProps } from "./interfaces";

const props = defineProps<FilledButtonProps>();

const dynamicClasses = computed(() => {
  const baseClasses = [
    "rounded-[var(--rounded-btn)]",
    "h-[26px]",
    "font-semibold",
    "text-shadow-[var(--btn-text-shadow)]",
    "transition",
    "duration-200",
    "ease-in-out",
    "focus:outline-none",
    "focus:ring-2",
    "hover:ring-2",
  ];

  const conditionalClasses = {
    "w-full": props.fullWidth,
    "text-[11px]": props.smallText,
    "text-sm": !props.smallText
  };

  const typeClasses = {
    green: [
      "bg-[var(--green-color)]",
      "focus:ring-[var(--green-color)]",
      "hover:ring-[var(--green-color)]",
    ],
    yellow: [
      "bg-[var(--yellow-color)]",
      "focus:ring-[var(--yellow-color)]",
      "hover:ring-[var(--yellow-color)]",
    ],
    red: [
      "bg-[var(--red-color)]",
      "focus:ring-[var(--red-color)]",
      "hover:ring-[var(--red-color)]",
    ],
  };

  return [
    ...baseClasses,
    ...(typeClasses[props.type] || []),
    conditionalClasses,
  ];
});
</script>
