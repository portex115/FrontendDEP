<template>

  <div class="weapon-grid">
    <div class="overview">
      <h2>Товары</h2>
    </div>
    <div v-for="(weapon, index) in weapons" :key="index" class="weapon-card-product">
      <div class="card_bas">
        <img :src="weapon.image" alt="" class="weapon-image">
        <div  class="text_bas">
          <h2 class="weapon-name">{{ weapon.name }}</h2>
          <p class="weapon-description">{{ weapon.description }}</p>
        </div>
        <p class="weapon-price">{{ weapon.price }}</p>
      </div>
      <div class="delete">
      <img  src="../../image/Cross.png" alt="" />
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
          image: 'image/GunCardSmall.png',
          name: 'Magic gun',
          description: 'Набор оружия',
          price: 'Цена : 499₽'
        },
        {
          image: 'image/GunCardSmall.png',
          name: 'Magic gun',
          description: 'Набор оружия',
          price: 'Цена : 499₽'
        },
        {
          image: 'image/GunCardSmall.png',
          name: 'Magic gun',
          description: 'Набор оружия',
          price: 'Цена : 499₽'
        },
        {
          image: 'image/GunCardSmall.png',
          name: 'Magic gun',
          description: 'Набор оружия',
          price: 'Цена : 499₽'
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
.delete{
   padding-left: 20px;
}
.card_bas{
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: var(--Card);
  padding: 10px;
  width: 640px;
}

.weapon-card-product {
  display: flex;
  align-items: center;
  height: 85px;
  width: 740px;
  text-align: center;
}

.text_bas{
  margin-left: 15px;
}
.overview {

}

.overview h2 {
  font-size: 24px;
  color: #fff;
}

.overview p {
  font-size: 16px;
  color: #fff;
}

.weapon-grid {
  display: grid;
  gap: 1px;
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
  margin-left: 255px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  color: var(--Button);
}

</style>
