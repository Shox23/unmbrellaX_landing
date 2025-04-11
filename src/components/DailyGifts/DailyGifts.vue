<template>
  <div class="text-[13px] font-medium flex flex-col gap-2">
    <h3 class="text-[#dfdfd0]">Забирай каждый день USDT</h3>
    <div
      class="relative rounded-(--rounded-base) bg-[#3f4354] max-w-[186px] w-full py-1.5 px-4"
    >
      <div class="grid grid-cols-3 gap-y-1.5 gap-x-4">
        <div
          v-for="item in data"
          :key="item.title"
          class="flex flex-col items-center relative"
        >
          <div
            :class="`text-[15px] ${
              item.checked ? 'line-through text-[#4d5166]' : 'text-[#6d7391]'
            } ${item.current ? 'text-[#e0e0d1]' : ''}`"
          >
            {{ item.title }}
          </div>
          <div v-if="item.checked || item.current" class="absolute right-[3px] top-[19px]">
            <SvgIcon v-if="item.checked" name="checked" />
            <div
              v-if="item.current"
              class="rounded-full w-1.5 h-1.5 bg-[#ff6663] -translate-x-[5.8px] translate-y-[3px]"
            ></div>
          </div>
          <SvgIcon :name="item.icon" />
          <div v-if="item.price">
            <div v-if="item.checked" class="line-through text-[#4d5166]">
              {{ item.price }}
            </div>
            <div v-else class="mt-1">
              <Tag>0.04$</Tag>
            </div>
          </div>
        </div>
      </div>
      <div
        class="left-0 right-0 absolute top-0 bottom-0 flex items-center justify-center flex-col"
      >
        <SvgIcon name="lock" />
        <div class="font-medium text-[13px] text-[#dfdfd0]">Пополни P2P LF</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from "../ui/SvgIcon/SvgIcon.vue";
import Tag from "../ui/Tag/Tag.vue";

const data = [
  {
    title: "1 day",
    icon: "inactive-gift",
    checked: true,
    price: "0.01$",
  },
  {
    title: "2 day",
    icon: "gift",
    current: true,
  },
  {
    title: "3 day",
    icon: "gift",
  },
  {
    title: "4 day",
    icon: "gift",
  },
  {
    title: "5 day",
    icon: "gift",
  },
  {
    title: "6 day",
    icon: "gift",
  },
  {
    title: "7 day",
    icon: "gift-blue",
    price: "0.04$",
  },
];
</script>
