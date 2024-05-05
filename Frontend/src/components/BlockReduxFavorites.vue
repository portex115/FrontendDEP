<template>
  <div class="overview-f">
    <h2>Избранное</h2>
  <div class="weapon-grid-f">
    <div v-for="(weapon, index) in weapons" :key="index" class="weapon-card">
      <img :src="weapon.image" alt="" class="weapon-image">
      <h2 class="weapon-name">{{ weapon.name }}</h2>
      <p class="weapon-description">{{ weapon.description }}</p>
      <p class="weapon-price">{{ weapon.price }}</p>
      <div class="down-cart">
        <img src="../../image/Heard.png" alt="" />
        <img src="../../image/Add.png" alt="" />
        <button class="add-to-cart"  @click="addToCart(weapon)" >
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weapons: [
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
        {
          image: 'image/GunCard.png',
          name: 'Magic gun',
          description: 'Gunpack',
          price: '5.67₽'
        },
      ]
    }
  },
  methods: {
    addToCart(weapon) {
      // Здесь должен быть код для добавления оружия в корзину
      console.log('Добавлено в корзину:', weapon.name);
    }
  }
}
</script>

<style scoped>
.overview {

}
.cat{
  color: var(--Title-h2);
}
.icon_menu{
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 35px;
}

.overview-f h2 {
  font-size: 24px;
  color: #fff;
}

.overview p {
  font-size: 16px;
  color: #fff;
}

.weapon-grid-f {
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
  max-width: 100%;
  height: auto;
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
  justify-content: space-around;
}
</style>
