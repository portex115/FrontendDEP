<template>
  <div class="slider-wrapper">
    <div class="slider" :style="{ height: slideHeight + 'px' }">
      <div class="slider-container" :style="{ transform: 'translateY(-' + currentSlide * slideHeight + 'px)' }">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <div class="slide-image" :style="{ backgroundImage: 'url(' + slide.image + ')' }"></div>
          <p class="slide-text top">{{ slide.text }}</p>
          <p class="slide-text second">{{ slide.subtext }}</p>
          <div class="line"></div> <!-- Полоска -->
          <p class="slide-text bottom">{{ slide.thirdText }}</p> <!-- Третий текст -->
          <div class="button-group">
            <button class="btn buy-now">Купить сейчас</button>
            <button class="btn review">Отзыв</button>
          </div>
        </div>
      </div>
      <div class="slider-dots">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiWordSlider',
  data() {
    return {
      slides: [
        { image: '/image/Banner.png', text: 'LV Gunpack', subtext:  'Лучшие паки скинов на все сервера GTA V только у нас', thirdText: 'Скин для GTA 5, созданный нами, отлично подойдет для тех, кто хочет добавить немного индивидуальности в игру.' },
        { image: '/image/Banner.png', text: 'DMR Bundle', subtext: 'Top-tier accessories', thirdText: 'Third text' },
        { image: '/image/Banner.png', text: 'Sniper Pack', subtext: 'High-powered rifles', thirdText: 'Third text' },
        { image: '/image/Banner.png', text: 'Pistol Pack', subtext: 'Compact firearms', thirdText: 'Third text' }
      ],
      currentSlide: 0,
      slideHeight: 310 // Устанавливаем высоту слайда
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
};
</script>

<style scoped>
.slider-wrapper {
  padding-top: 35px;
  padding-left: 115px;
  position: relative;
}

.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 980px; /* Установите нужную ширину */
  margin: 0 auto;
}

.slider-container {
  position: relative;
  display: flex;
  flex-direction: column; /* Изменение направления слайдов */
  transition: transform 0.5s ease;
}

.slide {
  position: relative;
  width: 100%;
}

.slide-image {
  width: 100%;
  height: 310px; /* Установите нужную высоту */
  background-size: cover;
  background-position: center;
}

.slide-text {
  padding-top: 20px;
  position: absolute;
  left: 22%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 1;
}


.slide-text.top {
  color: var(--Text);
  top: 20px;
  font-size: 36px;
}

.slide-text.second {
  color: var(--Text);
  padding-top: 35px;
  padding-left: 25px;
  max-width: 250px;
  top: 50px; /* Начало второго текста */
  font-size: 14px;
}

.slide-text.bottom {
  color: var(--Text);
  padding-top: 60px;
  padding-left: 25px;
  max-width: 250px;
  top: 80px; /* Начало третьего текста */
  font-size: 14px;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #ffffff; /* Цвет полоски */
  margin: 10px 0; /* Расстояние между текстом и полоской */
}

.button-group {
  padding-left: 150px;
  position: absolute;
  bottom: 30px;
  left: 25%;
  transform: translateX(-50%);
  display: flex;
}

.btn {
  background-color: transparent;
  font-size: 16px;
  color: #fff;
  width: 200px;
  height: 45px;
  border: solid 3px #5C656C;
  border-radius: 25px;
  cursor: pointer;
  margin: 0 5px;
}
.btn:hover {
  background-color: var(--Button);
  color: white;
}

.slider-dots {
  position: absolute;
  padding-left: 50px;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.dot {
  display: block;
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  margin: 10px 0;
  cursor: pointer;
}

.dot.active {
  background-color: #ffffff;
}
</style>
