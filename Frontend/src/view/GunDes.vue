<script setup>
import MainTopGun from '@/components/MainTopGun.vue'
import SliderGun from '@/components/SliderGun.vue'
</script>

<template>
  <div class="home_gun">
<MainTopGun/>
<div class="mem">
    <div class="name_gun">
      <div class="name_text">
        Magic Gunpack
      </div>
      <div class="name_text_bottom">
        Carabine Rifle
      </div>
        <div class="grey_line">__________________</div>
      <div class="category_bottom">
        <div class="category_bottom_text">Платные</div>
        <div class="price_gun">
          <p class="price_sum">499</p>
          <p class="price_val">₽</p>
        </div>
      </div>
      <div class="button_buy">
        <button class="btn_gun">Купить сейчас
          <img src="../../image/Cart-btn.png" alt=""/>
        </button>
      </div>
      <div class="desc">
        <p>С нашей помощью вы сможете быстро достичь новых уровней и наслаждаться игрой без ограничений.</p>
      </div>
    </div>
  <SliderGun/>
  </div>

  </div>
</template>





<style scoped>
.mem{
display: flex;
  align-items: center;
  justify-content: space-between;
}
.desc{
  padding-top: 100px;
  max-width: 300px;
}
.desc p{
  font-size: 12px;
  color: #737A85;
}
.button_buy{
  padding-top: 25px;
}
.btn_gun {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 18px;
  color: #fff;
  width: 200px;
  height: 45px;
  border: solid 3px #5C656C;
  border-radius: 25px;
  cursor: pointer;
  gap: 10px;
}

.btn_gun:hover {
  background-color: var(--Button);
  color: white;
  border: solid 3px var(--Button);
}
.price_val{
  color: var(--Line-text);
  font-size: 45px;
  font-weight: bold;
}
.price_sum{
  font-size: 45px;
  font-weight: bold;
  color: white;
}
.price_gun{
  display: flex;
}
.home_gun {
  display: flex;
  flex-direction: column;
  gap: 55px;
}
.name_text{
  font-size: 40px;
  font-weight: bold;
  color: white;
}
.name_text_bottom{
  font-size: 40px;
  font-weight: bold;
  color: var(--Line-text);
}
.grey_line{
  color: #737A85;
  font-weight: bold;
}
.category_bottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 280px;
  padding-top: 40px;
}
.category_bottom_text{
  font-size: 16px;
  color: #fff;
  width: 150px;
  height: 35px;
  border: solid 1px #5C656C;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>