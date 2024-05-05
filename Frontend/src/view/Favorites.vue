<script setup>
import MainTop from '@/components/MainTop.vue'
import BlockReduxFavorites from '@/components/BlockReduxFavorites.vue'
import DashBoard from '@/components/DashBoard.vue'

</script>

<template>
  <DashBoard/>
  <div  class="home">
    <MainTop/>
    <BlockReduxFavorites/>
    <div class="button_back">
      <router-link to="back_main">
      <div class="back">
        <img src="../../image/Arrow-left.png" alt=""/>
        Вернуться на главную</div>
      </router-link>
      <router-link to="back_catalog">
      <div class="back">
        <img src="../../image/Arrow-left.png" alt=""/>
        Вернуться в каталог</div>
      </router-link>
    </div>
  </div>

</template>

<style>
.back{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 80px;
  border-radius: 12.5px;
  background-color: var(--Dash-Board);
  color: var(--Title-h2);
  font-size: 14px;
  gap: 10px;

}
.button_back{
  display: flex;
  gap: 20px;

}
.sidebar_fav{
  z-index: 10;
  border-radius: 0 0 25px 25px;
  position: sticky;
  top: 0;
  left: 0;
  height: 850px;
  width: 70px;
  padding: 25px 10px;
  background: var(--Dash-Board);
}
.home {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin-left: 80px;
}
</style>