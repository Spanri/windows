<template>
  <div>
    <Banner text='Калькулятор'></Banner>
    <div class="calc">
      <div class="calc-window">
        <p>ФОРМ-ФАКТОР:</p>
        <div class="form-factor">
          <div></div>
          <div class="img" @click="formFactor = 1" :class="{formFactorActive: formFactor==1 ? true : false}">
            <img src="../assets/f1.png">
          </div>
          <div></div>
          <div class="img" @click="formFactor = 2" :class="{formFactorActive: formFactor==2 ? true : false}">
            <img src="../assets/f2.png">
          </div>
          <div></div>
          <div class="img" @click="formFactor = 3" :class="{formFactorActive: formFactor==3 ? true : false}">
            <img src="../assets/f3.png">
          </div>
          <div></div>
          <div class="img" @click="formFactor = 4" :class="{formFactorActive: formFactor==4 ? true : false}">
            <img src="../assets/f4.png">
          </div>
          <div></div>
        </div>
        <p>РАЗМЕРЫ:</p>
        <div class="dimensions">
          <div>
            <div class="w">{{width}}</div>
            <input class="w" type="range" v-model="width" step="20" value="0,10">
            <br><br>
            <img src="../assets/f4.png">
            <input class="h" type="range" v-model="height" step="20" value="0,10" style="transform: rotate(90deg)">
            <div class="h p" style="transform: rotate(90deg);">{{height}}</div>
          </div>
          <div class="drop-down">
            <p>Тип окна:</p>
            <select v-model="windowSill">
              <option>Глухое</option>
              <option>Одностворчатое поворотно - откидное</option>
              <option>Двустворчатое: поворотное + поворотно - откидное</option>
            </select>
            <p>Отлив:</p>
            <select v-model="tint">
              <option>100</option>
              <option>150</option>
              <option>200</option>
              <option>250</option>
              <option>300</option>
              <option>350</option>
              <option>400</option>
              <option>450</option>
            </select>
            <p>Ламинация:</p>
            <select v-model="lamination">
              <option>Односторонняя</option>
              <option>Двусторонняя</option>
              <option>Белая</option>
            </select>
          </div>
        </div>
        <p>Вы можете добавить в корзину это окно, однако его точная стоимость будет известна после замера нашими специалистами.
           Количество таких окон можно будет выбрать в корзине.</p>
        <div class="total">
          <p>ИТОГО: {{formFactor}} {{width}} {{height}} {{windowSill}} {{tint}} {{lamination}} (для отладки - 100)</p>
          <button @click="addToCart()">ДОБАВИТЬ В КОРЗИНУ</button>
        </div>
        <p v-if="added">{{added}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './Banner'

export default {
  name: 'Calculator',
  components: { Banner },
  data () {
    return {
      formFactor: '',
      width: '50',
      height: '50',
      windowSill: '',
      tint: '',
      lamination: '',
      total: 100,
      added: '',
    }
  },
  methods: {
    addToCart(){
      this.$store.commit('setShopItem2', {
        formFactor: this.formFactor,
        width: this.width,
        height: this.height,
        windowSill: this.windowSill,
        tint: this.tint,
        lamination: this.lamination,
        price: this.total
      });
      this.added = 'Добавлено.';
      setTimeout(() => {
          this.added = '';
        }, 3000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/button.css';

.calc{
  padding: 0;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
.calc-window{
  max-width: 800px;
  margin: 50px auto;
  text-align: left;
  border: rgb(202, 201, 201) 2px solid;
  border-radius: 5px;
}
.form-factor{
  display: grid;
  grid-template-columns: auto max-content auto max-content auto max-content auto max-content auto
}
.calc-window > p{
  padding: 25px;
  padding-bottom: 0;
}
.form-factor img{
  height: 150px;
}
.form-factor .img{
  border: white 2px solid;
}
.form-factor .img:hover, .formFactorActive{
  cursor: pointer;
  border: rgb(32, 165, 226) 2px solid !important;
}
.dimensions{
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 25px;
}
.dimensions p{
  margin-bottom: 5px;
}
.dimensions img{
  height: 200px;
}
.dimensions .w{
  width: 325px;
  text-align: center;
  color: rgb(114, 113, 113);
}
.dimensions .h{
  width: 190px;
  margin-left:-60px;
}
.dimensions .p{
  margin-left: 300px;
  color: rgb(114, 113, 113);
}
select{
  border: rgb(202, 201, 201) 2px solid;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 150px;
}
select:hover{
  cursor: pointer
}

input[type=range] {
  -webkit-appearance: none;
	width: 160px;
	height: 5px;
	background: rgb(230, 229, 229);
	outline: none;
}

/* Специальные правила для браузеров на движках WebKit/Blink */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: rgb(32, 165, 226);
  cursor: pointer;
}

/* Тоже самое для Firefox */
input[type=range]::-moz-range-thumb {
  border: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: rgb(32, 165, 226);
  cursor: pointer;
}

/* Тоже самое для IE */
input[type=range]::-ms-thumb {
  border: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: rgb(32, 165, 226);
  cursor: pointer;
}
.total{
  display: grid;
  grid-template-columns: auto max-content;
  margin: 30px;
}
.total p{
  margin: auto 0;
}
@media screen and (max-width: 680px){
  .form-factor img{
    height: 80px;
  }
  .dimensions img{
    height: 110px;
  }
  .dimensions .w{
    width: 180px;
  }
  .dimensions .h{
    width: 105px;
    margin-left: -30px;
  }
  .dimensions .p{
    margin-left: 185px;
  }
  .drop-down{
    margin-left: -35px;
  }
  select{
    min-width: 120px;
  }
}
@media screen and (max-width: 500px){
  .form-factor img{
    height: 60px;
  }
  .dimensions{
    width: 80%;
  }
  .dimensions img{
    height: 100px;
  }
  .dimensions .w{
    width: 160px;
  }
  .dimensions .h{
    width: 95px;
  }
  .dimensions .p{
    margin-left: 165px;
    margin-top: -10px;
  }
  .drop-down{
    margin-left: 0;
  }
  .dimensions{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
  .total{
    grid-template-columns: auto;
    grid-template-rows: auto max-content;
  }
  button{
    max-width: 212px;
    margin: 0;
    margin-top: 15px;
  }
}
</style>
