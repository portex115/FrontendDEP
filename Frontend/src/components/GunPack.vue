
<template>
  <div class="overview">
    <h2>Наши Ганпаки</h2>
    <span class="cat">Каталог</span>
  </div>
  <div class="carts">
    <WeaponCard title="Magic Gunpack" price="16.00" description="С нашей помощью вы сможете быстро достичь новых уровней и наслаждаться игрой без ограничений."/>
    <WeaponCard title="Magic Gunpack" price="16.00" description="С нашей помощью вы сможете быстро достичь новых уровней и наслаждаться игрой без ограничений."
    :pink="true"/>
  </div>

</template>

<script>

import { defineComponent } from 'vue'
import WeaponCard from '@/components/WeaponCard.vue'

export default defineComponent({
  components: { WeaponCard }
})
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
.carts{
  display: flex;
  justify-content: space-between;
}

</style>