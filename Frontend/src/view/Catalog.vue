<script setup>
import MainTop from '@/components/MainTop.vue'
import BlockReduxCatalog from '@/components/BlockReduxCatalog.vue'
import DashBoardIcons from '@/components/DashBoardIcons.vue'

</script>

<template>
  <div class="DashBoard">
    <DashBoardIcons/>
  </div>
  <div class="home">
    <MainTop/>
    <BlockReduxCatalog/>
  </div>
</template>

<style scoped>
.home {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin-left: 20px;
}
</style>