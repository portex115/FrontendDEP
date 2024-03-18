<script setup>

</script>

<template>
  <nav class="menu-top">
    <header>
      <div class="search_main">
        <ul>
          <li>
            <input class="text_search" type="search"  placeholder="Найти...">
          </li>
        </ul>
      </div>
      <div class="menu-icons">
        <h2 class="text_nickname">NickName</h2>
        <img src="../../image/Avatar.png" height="32" width="33" />
        <img src="../../image/Like.png" height="24" width="25" />
        <img src="../../image/Cart.png" height="24" width="23" />
      </div>
    </header>
  </nav>
</template>

<style>

.menu-top{

  padding-left: 375px;
  padding-top: 25px;
}
.search_main input{
  background: var(--Rectangle7);
  border-radius: 12.5px;
  width: 370px;
  height: 40px;
}
.text_search{

  padding-left: 20px;
}
.menu-icons{
  display: flex;
  align-items: center;
  padding-left: 800px;
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