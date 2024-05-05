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
  <div class="sidebar_icons_menu_container">
    <div class="sidebar_icons_menu">
    <nav class="sidebar_icons">
      <div class="header">
        <div class="image-text">
          <span class="image">
            <img src="../../image/B.png" alt="logo"/>
            <img src="../../image/S.png" alt=""/>
          </span>
        </div>
      </div>
      <div class="menu-bar">
        <div class="menu">
          <ul>
          <li class="nav-link">
            <a href="#">
            <img src="../../image/Profile-icon.png" alt="" />
            </a>
          </li>
          </ul>
          <ul>
          <li class="nav-link">
            <a href="#">
              <img src="../../image/Like.png" alt=""/>
            </a>
          </li>
          </ul>
          <ul>
          <li class="nav-link">
            <a href="#">
              <img src="../../image/Search.png" alt=""/>
            </a>
          </li>
          </ul>
          <ul>
          <li class="nav-link">
            <router-link to="Catalog">
              <img src="../../image/Cart-btn-menu.png" alt="" />
            </router-link>
          </li>
          </ul>
        </div>


        <div class="category-list" >
          <span
               @click="showCategory()" class="menu-category">
              <img src="../../image/Arrow-down.png" alt=""/>

          </span>
        </div>


        <transition name="fade">
          <div v-show="category" class="menu-folder">
            <ul>
              <li class="nav-link">
                <a href="#">
                  <img src="../../image/Clothes.png" alt=""/>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <img src="../../image/Graphics.png" alt=""/>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <img src="../../image/Guns.png"  alt=""/>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <img src="../../image/Redux.png" alt="" />
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <img src="../../image/Maps.png" alt=""/>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <img src="../../image/Sounds.png" alt=""/>
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
              <img src="../../image/Discord.png" alt=""/>
            </a>
          </li>
          </ul>
          <ul>
          <li class="nav-link">
            <a href="#">
              <img src="../../image/Support.png" alt="" />
            </a>
          </li>
          </ul>
          <ul>
          <li class="nav-link">
            <a href="#">
              <img src="../../image/I.png" alt=""/>
            </a>
          </li>
          </ul>
        </div>

       </div>
      </div>
    </nav>
      </div>
      <div class="menu_icons">
        <div class="menu_price">
          <div class="price">Цена</div>
            <div class="price_range">
              <div class="price_number">
                <div class="start_price">10₽</div>
                <div class="start_price">9999₽</div>
              </div>
                <div class="range">
                  <input type="range" min="0" max="9999" step="10" value="50">
                </div>
              <div class="line_cat">____________________</div>
            </div>
          <div class="category">Категории</div>
            <div class="cat_card_container">
              <div class="cat_card">
                <div class="block_cat"></div>
                <div class="text_cat">Новые</div>
              </div>
              <div class="cat_card">
                <div class="block_cat"></div>
                <div class="text_cat">Старые</div>
              </div>
              <div class="cat_card">
                <div class="block_cat"></div>
                <div class="text_cat">Скидка</div>
              </div>
              <div class="cat_card">
                <div class="block_cat"></div>
                <div class="text_cat">Бесплатно</div>
              </div>
            </div>
          </div>
        <div class="line_cat">____________________</div>
          <div class="category">Год</div>
          <div class="cat_card_container">
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2024</div>
            </div>
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2023</div>
            </div>
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2022</div>
            </div>
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2021</div>
            </div>
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2020</div>
            </div>
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2019</div>
            </div>
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2018</div>
            </div>
            <div class="cat_card">
              <div class="block_cat"></div>
              <div class="text_cat">2017</div>
            </div>
          </div>
      </div>
  </div>
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
.price_number{
  padding-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;

}
.start_price{
  font-size: 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 60px;
  height: 20px;
  background-color: var(--Main-Background);
}
.range{
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
}
.category{
  font-weight: bold;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  background-color: var(--Button);
  border-radius: 0 25px 25px 0  ;
}
.cat_card_container{
  padding-bottom: 50px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  align-items: center;
  justify-content: center;

}
.block_cat{
  width: 20px;
  height: 20px;
  background-color: var(--Main-Background);
  border-radius: 6px;
}
.cat_card{
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top:15px;
}
.text_cat{
  font-size: 14px;
  color: white;
}
.line_cat{
  display: flex;
  justify-content: center;
  color: var(--Button);
  padding-bottom: 50px;
}






.sidebar_icons_menu_container {
  display: flex;
}
.menu_price{
  padding-top: 20px;
}
.price{
  font-weight: bold;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  background-color: var(--Button);
  border-radius: 0 25px 25px 0  ;
}

.menu_icons{
  width: 250px;
  height: 90vh;
  background-color: var(--Card);
  border-radius: 0 0 25px 25px;
}


.sidebar_icons_menu{
  z-index: 10;
  border-radius: 0 0 25px 25px;
  position: sticky;
  top: 0;
  left: 0;
  height: 90vh;
  width: 100px;
  padding: 25px 10px;
  background: var(--Dash-Board);
}
.sidebar_icons .image-text img{
  padding: 0;
  height: auto;
  width: auto;
}
.sidebar_icons .Best {
  padding-right: 80px;
  display: flex;
  height: auto;
  width: auto;
}
.image{
  padding-left: 10px;
  padding-right: 15px;
}
.menu-bar  img{
  width: auto;
  height: auto;
}
.sidebar_icons li a{
  display: flex;
  align-items: center;
  text-decoration: none;
}

.sidebar_icons li{
  padding-top: 25px;
  list-style: none;
  display: flex;
  align-items: center;
}
.nav-text{
  padding-left: 40px;
  color: var(--Title-h2);
  font-size: 16px;
}
.menu-bar{
  padding-top: 25px;
  padding-left: 20px;
}
.sidebar_icons .category-list img{
  padding-top: 25px;
  height: auto;
}
.category-size{
  padding-top: 24px;
  font-size: 18px;
  padding-left: 40px;
  color: var(--Title-h1);
}

</style>