<template>
  <component :is="iconComponent" :style="dynamicClasses" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, type Component } from "vue";
import type { SvgIconProps } from "./interfaces";

const props = withDefaults(defineProps<SvgIconProps>(), {
  size: 24,
  color: "currentColor",
});

const dynamicClasses = computed(() => {
  return [
    `heigth-${props.size}px`,
    `width-${props.size}px`,
    `color-${props.color}`,
  ];
});

const iconModules = import.meta.glob<{ default: Component }>(
  "../../../assets/icons/*.svg"
);

const iconComponent = computed(() => {
  const iconPath = `../../../assets/icons/${props.name}.svg`;

  if (iconModules[iconPath]) {
    return defineAsyncComponent(() => iconModules[iconPath]());
  }
});
</script>
