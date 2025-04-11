<template>
  <div
    class="w-full flex items-center justify-between bg-[#181a20] rounded-t-(--rounded-base) px-(--inner-padding) py-[10px]"
  >
    <div class="flex items-center">
      <h3 class="text-sm text-shadow-2xs font-medium pr-[10px]">
        Баланс P2P Liqudity Flip:
      </h3>
      <AccentText> 1001$ </AccentText>
      <p class="uppercase text-[11px] pl-[5px]">umbrella/usdt</p>
    </div>
    <div class="flex items-center gap-[11px]">
      <div class="flex items-center gap-[2px]">
        <SvgIcon name="gift" />
        <AccentText> 12$ </AccentText>
        <p class="text-[#8e96bc] text-[10px]">Получено бонусов</p>
      </div>
      <FilledButton
        class="px-[17.5px]"
        text="Пополнить"
        type="yellow"
        :width="16"
      />
      <TextButton> Вывести </TextButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AccentText from "../ui/AccentText/AccentText.vue";
import FilledButton from "../ui/FilledButton/FilledButton.vue";
import SvgIcon from "../ui/SvgIcon/SvgIcon.vue";
import TextButton from "../ui/TextButton/TextButton.vue";
</script>
