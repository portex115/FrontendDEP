<script>
export default {
  props: {
    price: Number,
    title: String,
    description: String,
  pink: Boolean,
  }
}
</script>

<template>
  <div class="weapon-card" :class="{pink}">
    <img src="../../image/PackGuns.png"/>
    <div class="weapon-card__content"
         >

      <div class="Opis">
        <span :class="{'white':pink}" >Начало у нас</span>
        <p class="weapon-price" :class="{'white':pink}" >{{price}}₽</p>
        <h2 class="weapon-name" :class="{'white':pink}">{{title}}</h2>
        <p class="weapon-description" :class="{'white':pink}" >{{description}}</p>
      </div>
      <div class="down-cart">
        <img v-if="!pink" src="../../image/Arrow-krug.png" alt=""  />
        <img v-else src="../../image/Button_White.png" alt=""/>
        <router-link to="Catalog">
        <button class="add-to-cart">Перейти к каталогу</button>
        </router-link>
      </div>                          
    </div>
  </div>
</template>

<style scoped>
.weapon-card {
  padding: 20px 45px ;
  height: 275px;
  width: 475px;
  background-color: var(--Card);
  border-radius: 12px;
  position: relative;
  img {
    right: -50px;
    position: absolute;
    top: -25px;
  }
}

.pink{
  background-color: var(--Button);
}
.Opis{
  span{
    font-size: 14px;
    color: var(--Title-h2);
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.weapon-card__content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.weapon-price {
  font-size: 20px;
  font-weight: bold;
  color: var(--Button);

}
.weapon-name {
  color: var(--Title-h1);
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
}
.weapon-description {
  max-width: 250px;
  color: var(--Title-h2);
  font-size: 13px;
}
.add-to-cart {
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
}
.down-cart{
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  img {
    right: 0;
    top: 0;
    position: relative;
  }
}
.white{
  color: #ffffff !important;
}
</style>