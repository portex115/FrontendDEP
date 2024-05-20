<script setup>
import MainTop from '@/components/MainTop.vue'
import BlockReduxBasket from '@/components/BlockReduxBasket.vue'
import DashBoard from '@/components/DashBoard.vue'
</script>

<template>
  <DashBoard/>
  <div  class="home">
  <MainTop/>
    <div class="container-cart">
      <BlockReduxBasket/>
      <div class="payment">
        <div class="text-payment">
          <h2>Детали оплаты</h2>
          <p>Выбор платежной системы</p>
        </div>
        <div class="image-payment">
          <img src="../../image/Visa.png" alt="#" width="65" height="20"/>
          <img src="../../image/Paypal.png" alt="#" width="89" height="23" />
          <img src="../../image/Mastercardd.png" alt="#" width="123" height="20"/>
        </div>
        <div class="card-payment">
          <input class="input_payment-long" type="number" placeholder="номер карты" >
          <div class="line-payment">_________________________________________</div>
        </div>
        <div class="in-payment-container">
          <div  class="in-payment">
            <div class="row-line">
            <input class="input_payment" type="number" placeholder="дд">
            <div class="line-payment">______</div>
            </div>

            <div class="row-line">
            <input class="input_payment" type="number" placeholder="мм">
            <div class="line-payment">______</div>

            </div>
            <div class="row-line">
            <input class="input_payment" type="number" placeholder="гг">
            <div class="line-payment">______</div>
            </div>
          </div>
          <div>
            <div class="row-line-cvv">
            <input class="input_payment"  type="number" placeholder="CVV">
              <div class="line-payment">______</div>
            </div>
          </div>
        </div>
        <div  class="button-payment">
        <button class="button-pay">Оплтатить</button>
        </div>
        <div class="folder-payment">
          <div class="text-payment-folder">
          <p>С нашей помощью вы сможете быстро достичь новых уровней и наслаждаться игрой без ограничений.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="button_back">
        <router-link to="back_main">
          <div class="back">
            <img src="../../image/Arrow-left.png" alt=""/>
            Вернуться на главную</div>
        </router-link>
        <router-link to="back_catalog">
          <div class="back">
            <img src="../../image/Arrow-left.png" alt=""/>
            Вернуться в каталог </div>
        </router-link>
          <div class="back">Всего:  499₽</div>
      </div>

  </div>
</template>

<style>
.text-payment-folder p{
  color: #BC9AF3;
}
.text-payment-folder{
  text-align: center;
  max-width: 400px;
  padding-left: 90px;
  padding-top: 20px;
}
.folder-payment{
  border-radius:  0  0 15px 15px;
  background-color: #7440C5;
  width: 500px;
  height: 100px;
}
.in-payment-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  padding-left: 70px;
  max-width: 430px;
}
.button-payment{
  padding-bottom: 60px;
  padding-top: 60px;
  padding-left: 90px;
}
.button-pay{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  border-radius: 15px;
  height: 40px;
  background-color: var(--Big-card);
  color: white;
  font-size: 18px;
}
.row-line{
  display: grid;
  align-items: center;
  justify-content: center;
}
.container-cart {
  display: flex;
}
.line-payment{
  color: white;
}
.row-line-cvv{
  display: grid;
  align-items: center;
}
.card-payment input{
  padding-top: 90px;
  padding-left: 20px;
  color: white;
}
.in-payment input{
  color: white;
}
.input_payment{
  text-align: center;
  width: 50px;
  color: white;
  background: none;

}
.input_payment-long{
  color: white;
  background: none;
}
.card-payment{
  display: grid;
  align-items: center;
  justify-content: center;
}
.in-payment{
  display: flex;
  align-items: center;
  gap: 15px;

}
.payment{
  width: 500px;
  height: 600px;
  background-color: #411C7B;
  border-radius: 20px;
}
.text-payment{
  display: grid;
  align-items: center;
  padding: 25px 0 0 65px;
}
.text-payment p{
  font-size: 24px;
  color: #BF9EF4;
}
.text-payment h2{
  font-size: 30px;
  color: white;
}
.image-payment{
  padding:25px 0 0 65px;
  display: flex;
  align-items: center;
  gap: 25px;
}
.back{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 80px;
  border-radius: 12.5px;
  background-color: var(--Dash-Board);
  color: var(--Title-h2);
  font-size: 14px;
  gap: 10px;
}
.button_back{
  display: flex;
  gap: 20px;

}
.sidebar_fav{
  z-index: 10;
  border-radius: 0 0 25px 25px;
  position: sticky;
  top: 0;
  left: 0;
  height: 850px;
  width: 70px;
  padding: 25px 10px;
  background: var(--Dash-Board);
}
.home {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin-left: 80px;
}
</style>