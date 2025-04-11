<template>
  <div>
    <Vue3Lottie :animationData="animation" :height="200" :width="200" />
  </div>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from "@reslear/vue3-lottie";
import animation from "../../assets/lottie/coin.json";
</script>
