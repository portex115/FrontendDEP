<script setup>
import MainTop from '@/components/MainTop.vue'
import BlockRedux from '@/components/BlockReduxHome.vue'
import Slider from '@/components/Slider.vue'
import GunPack from '@/components/GunPack.vue'
import SliderTwo from '@/components/SliderTwo.vue'
import OurСloth from '@/components/OurСloth.vue'
import DashBoard from '@/components/DashBoard.vue'

</script>

<template>
  <div class="DashBoard">
    <DashBoard/>
  </div>
  <div class="home">
    <MainTop/>
    <Slider/>
    <BlockRedux/>
    <GunPack/>
    <SliderTwo/>
    <OurСloth/>
  </div>
</template>

<style scoped>
.home {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin-left: 80px;
}
</style>