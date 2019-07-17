<template>
  <div class="home0">
    <div class="home">
      <h4 style="text-align:justify;padding: 20px;">
        Пластиковые окна ПВХ от производителя в Краснодаре предлагает компания «Юг Строй Окно».
На производстве задействованы квалифицированные кадры с большим стажем работы. Мы предлагаем полный спектр услуг по остеклению вашего помещения, от замеров и производства, до доставки и установки. Для того чтобы получить помощь специалиста, оставьте контактную информацию по форме для обратной связи.
      </h4>
      <div class="advantages">
        <div>
          <span>Бесплатная доставка окон</span>
        </div>
        <div style="border-left:1px solid rgb(233, 230, 230)"></div>
        <div>
          <span>Поддержка 24/7</span>
        </div>
        <div style="border-left:1px solid rgb(233, 230, 230)"></div>
        <div>
          <span>Гарантия на услуги</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created(){
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home0{
  background-image: url("../assets/common-banner2.jpg");
  background-position: right -65px;
  background-size: 1200px 200px;
  background-repeat: no-repeat;
}
.home{
  max-width: 1150px;
  margin: 150px auto 0px;
  width: 100%;
}
.advantages{
  display: grid;
  grid-template-columns: 1fr max-content 1fr max-content 1fr;
  box-shadow: 0px 0px 10px rgb(233, 230, 230);
  padding: 15px;
}
@media screen and (max-width: 600px){
  h4{
    font-size: 16px;
  }
}
</style>
