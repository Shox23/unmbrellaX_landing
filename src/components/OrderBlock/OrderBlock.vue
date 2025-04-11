<template>
  <div
    class="py-3 bg-[#181a20] rounded-(--rounded-base) grow"
    :class="{ 'px-3': space === 'small', 'px-[15px]': space !== 'small' }"
  >
    <h2 class="font-medium mb-4 text-center">{{ title }}</h2>

    <!-- Заголовки -->
    <div class="flex items-center justify-between text-sm text-gray-400 mb-3.5">
      <h3 v-for="item in data.titles" :key="item">{{ item }}</h3>
    </div>

    <!-- Элементы данных -->
    <div class="flex flex-col gap-3.5">
      <div class="flex items-center justify-between" v-for="item in data.items">
        <template v-for="(entity, key) in item" :key="key">
          <component :is="renderEntityComponent(key, entity)" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FilledButton from "../ui/FilledButton/FilledButton.vue";
import SvgIcon from "../ui/SvgIcon/SvgIcon.vue";
import Tag from "../ui/Tag/Tag.vue";
import { h } from "vue";
import type { OrderBlockProps } from "./interfaces";

const props = withDefaults(defineProps<OrderBlockProps>(), {
  space: "base",
});

/**
 * Определяет и рендерит соответствующий компонент в зависимости от ключа и значения
 */
const renderEntityComponent = (key, entity) => {
  const commonClass = "text-sm";

  // Компоненты для разных типов данных
  const componentMap = {
    finance: () =>
      h("div", { class: `${commonClass} flex items-center gap-1.5` }, [
        h(SvgIcon, { name: "gift" }),
        entity > 0
          ? h(Tag, {}, { default: () => entity })
          : h("div", { class: "font-medium text-sm" }, entity),
      ]),

    total: () => h("div", { class: commonClass }, entity),

    orderAmount: () =>
      h(FilledButton, {
        text: entity,
        type: "green",
        class: "px-9",
      }),

    hasBtn: () =>
      entity
        ? h(FilledButton, {
            text: "Отменить",
            type: "red",
            smallText: true,
            class: "px-[13px]",
          })
        : null,

    amount: () => h("div", { class: `${commonClass} font-medium` }, entity),

    bonus: () =>
      h("div", { class: `${commonClass} text-(--green-color)` }, entity),

    myFinance: () =>
      h(
        "div",
        {
          class: `${commonClass} ${entity < 0 ? "text-[#f6465d]" : ""}`,
        },
        entity
      ),

    // Для всех остальных ключей
    default: () => h("div", { class: commonClass }, entity),
  };

  // Используем нужный компонент или дефолтный, если ключа нет в карте
  return (componentMap[key] || componentMap.default)();
};
</script>
