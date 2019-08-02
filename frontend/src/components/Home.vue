<template>
  <div class="home0">
    <div class="home">
      <div class="banner">
        <p>
          Пластиковые окна ПВХ от производителя в Краснодаре предлагает компания «Юг Строй Окно».
          На производстве задействованы квалифицированные кадры с большим стажем работы.
          Мы предлагаем полный спектр услуг по остеклению вашего помещения от замеров и
          производства до доставки и установки. Для того, чтобы получить помощь специалиста,
          оставьте контактную информацию в форме для обратной связи во вкладке «Контакты».
        </p>
      </div>
      <p class="title">
        Пластиковые окна от производителя «Юг Строй окно»
      </p>
      <div class="advantages">
        <div>
          <img src="../assets/icons-car.png">
          <p>Бесплатная доставка окон</p>
        </div>
        <div style="border-left:1px solid rgb(233, 230, 230)"></div>
        <div>
          <img src="../assets/icons-support.png">
          <p>Поддержка 24/7</p>
        </div>
        <div style="border-left:1px solid rgb(233, 230, 230)"></div>
        <div>
          <img src="../assets/icons-guarantee.png">
          <p>Гарантия на услуги</p>
        </div>
      </div>
      <div class="pictures">
        <div>
          <img src="../assets/w1.jpg">
          <p>
            Пластиковые окна от <strong>5000</strong>₽
          </p>
        </div>
        <div>
          <img src="../assets/w3.jpg">
          <p>Балконы от <strong>7000</strong>₽</p>
        </div>
        <div>
          <img src="../assets/w2.jpg">
          <p>Арки от <strong>2000</strong>₽</p>
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
.banner{
  height: 420px;
  background-image: url("../assets/index.png");
  background-position: left 0px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  margin: 30px;
}
.banner p{
  padding-left: 450px;
  padding-top: 60px;
  text-align: left;
  font-size: 18px;
}
.title{
  font-size: 30px;
  padding: 30px;
  margin-bottom: 0;
  padding-bottom: 0;
  text-align: center;
}
.advantages{
  display: table;
  width: 100%;
  box-shadow: 0px 0px 10px rgb(233, 230, 230);
  padding: 30px;
  margin: 50px 0;
}
.advantages > *{
  display: table-cell;
  vertical-align: middle;
}
.advantages img{
  width: 36px;
}
.advantages p{
  margin: 0;
  /* vertical-align: middle; */
  padding: 10px;
}
.pictures{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.pictures img{
  object-fit: cover;
  width: 250px;
  height: 200px;
}
.pictures p{
  padding: 15px;
  margin-bottom: 50px;
}
@media screen and (max-width: 1020px){
  .pictures img{
    object-fit: cover;
    width: 200px;
    height: 150px;
  }
}
@media screen and (max-width: 850px){
  .banner{
    height: 280px;
    margin: 20px;
  }
  .banner p{
    font-size: 14px;
    padding-left: 280px;
    padding-top: 20px;
  }
  .advantages{
    font-size: 14px;
  }
  .title{
    font-size: 22px;
    padding: 20px;
    padding-bottom: 0;
  }
  .pictures img{
    object-fit: cover;
    width: 150px;
    height: 150px;
  }
}
@media screen and (max-width: 600px){
  .banner{
    height: auto;
    margin: 20px;
    background-image: none;
  }
  .banner p{
    font-size: 14px;
    padding-left: 0px;
    padding-top: 20px;
  }
  .title{
    font-size: 18px;
  }
  .pictures img{
    object-fit: cover;
    width: 100px;
    height: 100px;
  }
  .pictures p{
    font-size: 12px;
  }
}
</style>
