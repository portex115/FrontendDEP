<template>
  <div class="overview">

    <h2>Наше оружие</h2>
    <div class="button-group">
      <button class="btn">Лучшее</button>
      <button class="btn">Дорогое</button>
      <button class="btn">Дешевое</button>
    </div>
    <span class="cat">Каталог</span>
  </div>
  <div class="weapon-grid">
    <div v-for="weapon in data" :key="weapon.id" class="weapon-card">
      <img :src="weapon.image" alt="" class="weapon-image">
      <h2 class="weapon-name">{{ weapon.title }}</h2>
      <p class="weapon-description">{{ weapon.comment }}</p>
      <p class="weapon-price">{{ weapon.price }}</p>
      <div class="down-cart">
      <img src="../../image/Add.png" alt="" />
      <button class="add-to-cart"  @click="addToCart(weapon)" >
        Добавить в корзину
      </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref()

async function fetchProduct(){
  try {
    const res =  await fetch(import.meta.env.VITE_API_URL + "/api-mods/product", {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "69420",
      }
    })
    const response = await res.json()

    data.value = response.data.slice(0, 8)
  }
  catch (err){
    data.value = err
  }
}
function addToCart(weapon){
  console.log(weapon)
}
fetchProduct()

</script>

<style scoped>
.overview {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cat{
  color: var(--Title-h2);
}

.overview h2 {
  font-size: 24px;
  color: #fff;
}

.overview p {
  font-size: 16px;
  color: #fff;
}

.button-group {
  display: flex;
  gap: 20px
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
}

.btn:hover {
  background-color: var(--Button);
  color: white;
  border: solid 3px var(--Button);
}
.weapon-grid {
  display: grid;
  grid-template-columns: repeat(4, 225px);
  gap: 25px;
}

.weapon-card {
  height: 270px;
  width: 230px;
  background-color: var(--Card);
  border-radius: 12px;
  padding: 10px;
  text-align: center;
}

.weapon-image {
  object-fit: cover;
  max-height: 95px;
  width: 165px;
  border-radius: 15px;
}

.weapon-name {
  color: var(--Title-h1);
  font-size: 1.2em;
  margin: 10px 0;
}

.weapon-description {
  color: var(--Title-h2);
  font-size: 0.9em;
  margin-bottom: 10px;
}

.weapon-price {
  font-size: 1.1em;
  margin-bottom: 10px;
  color: var(--Button);
}

.add-to-cart {
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
}

.down-cart{
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
