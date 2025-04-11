<template>
  <section class="w-screen h-screen">
    <div class="wrapper">
      <div class="flex flex-col gap-4">
        <BalanceBar />
        <div
          class="px-(--inner-padding) py-[22px] bg-[#181a20] rounded-(--rounded-base) flex justify-between h-full"
        >
          <div class="flex flex-col gap-4">
            <DailyGifts />
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-[5px]">
                <SvgIcon name="discount" />
                <div class="font-medium text-[13px]">
                  <p>Приглашай и получай 10%</p>
                  <p>от комиссий и 10% скидка другу</p>
                </div>
              </div>
              <ClipboardCopy text="https://umbrellax.io/JLSL2342" />
            </div>
            <FriendList />
          </div>
          <div class="flex flex-col items-center relative max-h-[586px] h-full">
            <h2 class="font-medium z-1 text-[#e0e0d1]">
              P2P Liqudity Flip | Удваивай капитал
            </h2>
            <div class="-translate-y-6">
              <CoinAnimation />
              <div class="font-medium text-[#dfdfd0] text-center">
                Tap 1000/1000
              </div>
            </div>
            <div class="flex text-xs font-medium flex-col items-center mt-7">
              <h3 class="text-[#e0e0d1] text-sm mb-2">Удваивай капитал</h3>
              <div
                class="flex items-center w-[156px] justify-between p-1.5 rounded-(--rounded-base) bg-[#323543] shadow-(--inner-shadow) mb-7"
              >
                <div class="text-[#9fa6a9]">min 1$</div>
                <div class="uppercase font-semibold text-[#c75c5c]">max</div>
              </div>
              <div>
                <FilledButton
                  type="green"
                  text="Создать ордер"
                  class="px-[26.5px]"
                />
                <div class="font-medium text-[11px] text-[#8e96bc]">
                  0% комиссия
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[11px]">
            <Notification
              v-for="item in notifications"
              :key="item.icon"
              :icon="item.icon"
              :title="item.title"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <OrderBlock
          v-for="item in mockData"
          :key="item.title"
          :title="item.title"
          :grid-class="item.gridClass"
          :data="item.data"
          :space="item.space"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BalanceBar from "../components/BalanceBar/BalanceBar.vue";
import ClipboardCopy from "../components/ClipboardCopy/ClipboardCopy.vue";
import CoinAnimation from "../components/CoinAnimation/CoinAnimation.vue";
import DailyGifts from "../components/DailyGifts/DailyGifts.vue";
import FriendList from "../components/FriendList/FriendList.vue";
import OrderBlock from "../components/OrderBlock/OrderBlock.vue";
import FilledButton from "../components/ui/FilledButton/FilledButton.vue";
import Notification from "../components/ui/Notification/Notification.vue";
import SvgIcon from "../components/ui/SvgIcon/SvgIcon.vue";

const mockData = [
  {
    title: "Выбери готовые ордера P2P Liqudity Flip",
    gridClass: "p2p-grid",
    data: {
      titles: ["Финансирование", "Ордеров", "Total", "Сумма ордера"],
      items: [
        {
          finance: "0.1$",
          orderCount: 10,
          total: "20k",
          orderAmount: "10$",
        },
        {
          finance: 0,
          orderCount: 20,
          total: "12k",
          orderAmount: "10$",
        },
      ],
    },
  },
  {
    space: "small",
    title: "Мои Ордера P2P Liqudity Flip",
    gridClass: "my-grid",
    data: {
      titles: [
        "Сумма",
        "Гарантированный бонус",
        "Финансирование",
        "0.1% за отмену",
      ],
      items: [
        {
          amount: "$1",
          bonus: "0.0000125$",
          myFinance: 0,
          hasBtn: true,
        },
        {
          amount: "$10",
          bonus: "0.000125$",
          myFinance: "-0.01$",
          hasBtn: true,
        },
      ],
    },
  },
];

const notifications = [
  {
    icon: "large-gift",
    title: "Ежедневные задания USDT",
  },
  {
    icon: "lvl-up",
    title: "LVL UP",
  },
];
</script>
