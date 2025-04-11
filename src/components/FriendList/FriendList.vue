<template>
  <div class="w-full max-w-[210px]">
    <div
      class="flex items-center justify-between text-[13px] font-medium mb-1.5"
    >
      <h3>Список друзей</h3>
      <div class="flex items-center gap-[2px]">
        <div>2/5</div>
        <SvgIcon name="glow-gift" />
        <Tag>5$</Tag>
      </div>
    </div>
    <ul
      class="bg-[#323543] px-3 py-2.5 rounded-(--rounded-base) flex flex-col gap-[5px] w-full h-[121px]"
    >
      <li class="flex items-center justify-between max-w-[186px]">
        <div class="relative w-max mr-2 translate-y-2">
          <div
            class="flex items-center justify-center rounded-full h-[13px] w-[13px] font-extrabold text-[8px] bg-[#0098ea] shadow-(--indicator-shadow) absolute -top-2 -right-[5px]"
          >
            1
          </div>
          <SvgIcon name="chat" />
        </div>
        <div class="text-sm font-medium text-[#dfdfd0]">@mikitas</div>
        <div class="flex items-center gap-2">
          <SvgIcon name="gift" />
          <Tag>1$</Tag>
        </div>
      </li>
      <li class="flex items-center justify-between max-w-[186px] mb-[5px]">
        <div class="relative w-max mr-2 translate-y-2">
          <div
            class="flex items-center justify-center rounded-full h-[13px] w-[13px] font-extrabold text-[8px] bg-[#0098ea] shadow-(--indicator-shadow) absolute -top-2 -right-[5px]"
          >
            1
          </div>
          <SvgIcon name="chat" />
        </div>
        <div class="text-sm font-medium text-[#dfdfd0]">@mikitas</div>
        <div class="flex items-center gap-2">
          <SvgIcon name="gift" />
          <Tag>1$</Tag>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from "../ui/SvgIcon/SvgIcon.vue";
import Tag from "../ui/Tag/Tag.vue";
</script>
