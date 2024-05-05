<template>
  <div class="swiper">
    <swiper
      :direction="'vertical'"
      :pagination="{
      clickable: true,
    }"
      :modules="modules"
      :space-between="20"
      class="swiper-slide">
      <swiper-slide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">LV Gunpack</h2>
            <p class="Opis">Лучшие паки скинов на все сервара GTA V только у нас</p>
            <p class="Opis">Скин для GTA 5, созданный нами, отлично подойдет для тех, кто хочет добавить немного индивидуальности в игру.</p>
          </div>
          <button class="button">Купить сейчас</button>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">LV Gunpack</h2>
            <p class="Opis">Лучшие паки скинов на все сервара GTA V только у нас</p>
            <p class="Opis">Скин для GTA 5, созданный нами, отлично подойдет для тех, кто хочет добавить немного индивидуальности в игру.</p>
          </div>
          <button class="button">Купить сейчас</button>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">LV Gunpack</h2>
            <p class="Opis">Лучшие паки скинов на все сервара GTA V только у нас</p>
            <p class="Opis">Скин для GTA 5, созданный нами, отлично подойдет для тех, кто хочет добавить немного индивидуальности в игру.</p>
          </div>
          <button class="button">Купить сейчас</button>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-content">
          <div class="slide-content__content">
            <h2 class="Title">LV Gunpack</h2>
            <p class="Opis">Лучшие паки скинов на все сервара GTA V только у нас</p>
            <p class="Opis">Скин для GTA 5, созданный нами, отлично подойдет для тех, кто хочет добавить немного индивидуальности в игру.</p>
          </div>
          <button class="button">Купить сейчас</button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
.swiper{

  width: 980px;
  height: 310px;
  border-radius: 12.5px;

}
.swiper-slide {

  font-size: 36px;
  display: flex;
}
.slide-content {
  background-image: url("image/Banner__3 2.png");
  padding: 30px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Title{
  color: #ffffff;
}
.Opis{
  max-width: 300px;
  font-size: 14px;
  color: var(--Text);
}
.button {
  background-color: transparent;
  font-size: 16px;
  color: #fff;
  width: 200px;
  height: 45px;
  border: solid 3px #5C656C;
  border-radius: 25px;
  cursor: pointer;
}

.button:hover {
  background-color: var(--Button);
  color: white;
  border: solid 3px var(--Button);
}
.slide-content__content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
</style>