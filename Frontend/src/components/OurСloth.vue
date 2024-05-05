<script setup>

</script>

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
  <div class="carts">
    <div class="carts__content">
      <div class="weapon-card">
        <img src="../../image/FonsCard.png" alt="" />
      </div>
      <div class="description">
        <div class="text__content">
          <h2>BagWood</h2>
          <p>Водолазка №2</p>
        </div>
        <div class="img__content">
          <img src="../../image/Heard.png" alt="" />
          <img src="../../image/Add.png" alt="" />
        </div>
      </div>
    </div>
    <div class="carts__content">
      <div class="weapon-card2">
        <img src="../../image/FonsCard.png" alt="" />
      </div>
      <div class="description">
        <div class="text__content">
          <h2>BagWood</h2>
          <p>Водолазка №2</p>
        </div>
        <div class="img__content">
          <img src="../../image/Heard.png" alt="" />
          <img src="../../image/Add.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

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

.carts{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.weapon-card {
  display: flex;
  justify-content: center;

  height: 275px;
  width: 475px;
  background-color: var(--Card);
  border-radius: 12px;
  padding: 20px 30px;
  text-align: center;
}
.weapon-card2{
  display: flex;
  justify-content: center;
  height: 275px;
  width: 475px;
  background-color: var(--Card);
  border-radius: 12px;
  padding: 20px 30px;
  text-align: center;
}
.button-group {
  display: flex;
  gap: 20px
}
.description{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 30px;
}
.img__content{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.text__content{
  padding-top: 15px;
}
.text__content p{
  font-size: 14px;
  color: var(--Title-h2);
}
.text__content h2{
  font-size: 20px;
  color: #fff;
}
</style>