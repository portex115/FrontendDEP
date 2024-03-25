<script setup>

</script>

<template>
  <nav class="menu-top">
    <header>
      <div class="search_main">
            <img src="../../image/Search.png" alt="#" />
            <input class="text_search" type="search"  placeholder="Найти...">
      </div>
      <div class="menu-icons">
        <h2 class="text_nickname">Авторизация</h2>
        <a href="#"><img src="../../image/Avatar.png" alt="#" /></a>
        <img src="../../image/Like.png" alt="#" />
        <img src="../../image/Cart.png" alt="#" />
      </div>
    </header>
  </nav>
</template>

<style>
header {
  display: flex;
  justify-content: space-around;
}

.menu-top{
  padding-left: 110px;
  padding-top: 25px;
}
.search_main {
  padding: 8px 10px 8px 10px;
  width: 370px;
  height: 40px;

  display: flex;
  align-items: center;
  border-radius: 12.5px;
  background: var(--Rectangle7);
}
.search_main input{
  background: none;
  color: var(--Title-h1);
}
.search_main img {
  width: auto;
  height: auto;
  padding-right: 10px;
}
.menu-icons{
  padding-left: 70px;
  display: flex;
  align-items: center;

}
.text_nickname{
  font-size: 12px;
  color: white;
}
.menu-icons img{
  width: auto;
  height: auto;
  padding-left: 15px;
}

</style>