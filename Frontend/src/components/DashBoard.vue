<script>
export default {
  data() {
    return {
      category: false
    }
  },
  methods: {
    showCategory() {
      console.log(this.category)
      this.category = !this.category
    }
  }
}
</script>
<template>
  <nav class="sidebar">
    <header>
      <div class="image-text">
        <span class="image">
          <router-link to="/">
          <img src="../../image/B.png" alt="/" />
          <img src="../../image/S.png" alt="/" />
          </router-link>
        </span>
      </div>
      <div class="bestmods">
      <span class="Best">
          <img src="../../image/BEST MODS.png" alt="" />
        </span>
      </div>
    </header>
    <div class="menu-bar">
      <div class="menu">
        <ul>
          <li class="nav-link">
            <a href="#">
              <img src="../../image/Profile-icon.png" alt="" />
              <router-link to="profile">
                <span class="text nav-text">Профиль</span>
              </router-link>
            </a>
          </li>
        </ul>
        <ul>
          <li class="nav-link">
            <a href="#">
              <img src="../../image/Search.png" alt="" />
              <router-link to="gundes">
                <span class="text nav-text">Поиск</span>
              </router-link>
            </a>
          </li>
        </ul>
        <ul>
          <li class="nav-link">
            <router-link to="Catalog">
              <img src="../../image/Cart-btn-menu.png" alt="" />
              <span class="text nav-text">Каталог</span>
            </router-link>
          </li>
        </ul>
      </div>


      <div class="category-list">
        <span
          @click="showCategory()" class="menu-category">
            <img src="../../image/Arrow-down.png" alt="" />
            <span class="category-size">Категории</span>
        </span>
      </div>

      <transition name="fade">
        <div v-show="category" class="menu-folder">
          <ul>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Clothes.png" alt="" />
                <span class="text nav-text">Одежда</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Graphics.png" alt="" />
                <span class="text nav-text">Графика</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Guns.png" alt="" />
                <span class="text nav-text">Оружие</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Redux.png" alt="" />
                <span class="text nav-text">Редукс</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Maps.png" alt="" />
                <span class="text nav-text">Карты</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Sounds.png" alt="" />
                <span class="text nav-text">Звуки</span>
              </a>
            </li>
          </ul>
        </div>
      </transition>
      <div class="menu-folder-now">
        <div class="menu-folder">
          <ul>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Discord.png" alt="" />
                <span class="text nav-text">Discord</span>
              </a>
            </li>
          </ul>
          <ul>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/Support.png" alt="" />
                <span class="text nav-text">Помощь</span>
              </a>
            </li>
          </ul>
          <ul>
            <li class="nav-link">
              <a href="#">
                <img src="../../image/I.png" alt="" />
                <span class="text nav-text">Инфо</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sidebar {
  z-index: 10;
  border-radius: 0 0 25px 25px;
  position: sticky;
  top: 0;
  left: 0;
  height: 90vh;
  width: 250px;
  padding: 25px 10px;
  background: var(--Dash-Board);
}

.sidebar .image-text img {
  padding: 0;
  height: auto;
  width: auto;
}

.sidebar .Best {
  padding-right: 80px;
  display: flex;
  height: auto;
  width: auto;
}

.image {
  padding-left: 10px;
  padding-right: 15px;
}

.menu-bar img {
  width: auto;
  height: auto;
}

.sidebar li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.sidebar li {
  padding-top: 25px;
  list-style: none;
  display: flex;
  align-items: center;
}

.nav-text {
  padding-left: 40px;
  color: var(--Title-h2);
  font-size: 16px;
}

.menu-bar {
  padding-top: 25px;
  padding-left: 20px;
}

.sidebar .category-list img {
  padding-top: 25px;
  height: auto;
}

.category-size {
  padding-top: 24px;
  font-size: 18px;
  padding-left: 40px;
  color: var(--Title-h1);
}

</style>