<template>
  <div class="shop-item0">
    <div class="shop-item">
      <img :src="path+'/static/'+item.img">
      <div class="info">
        <h2 style="margin: 0 0 10px 0;color:black"><strong>{{item.title}}</strong></h2>
        <h4 style="color:#007CB7;margin: 0 0 20px 0;">₽{{item.price}}</h4>
        <p style="margin: 15px 0 25px;">Категория: {{item.category}}</p>
        <hr>
        <p style="margin: 25px 0 0">{{item.description}}</p>
        <p style="margin: 55px 10px 0 0;display:inline-block">Количество:</p>
        <div class="quantity">
          <input class="quantity-number" min="1" type="number" v-model="quantity">
          <div class="quantity-nav">
            <div @click="quantity=Number(quantity)+1" class="quantity-button quantity-up">+</div>
            <div @click="quantity>1 ? quantity-=1 : ''" class="quantity-button quantity-down">-</div>
          </div>
        </div>
        <button @click="addToCart()">В КОРЗИНУ</button>
        <p v-if="added">{{added}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './Banner'
import {path} from '../config'

export default {
  name: 'Shop',
  components: { Banner },
  props: {
    id: String,
  },
  data () {
    return {
      item: {},
      path: path,
      quantity: 1,
      added: '',
    }
  },
  created(){
    axios.post(path+'/api/product', {id: this.id})
    .then(response => {
      this.item = response.data;
      axios.get(path+'/api/productCategories')
      .then(response => {
        let resp = response.data;
        let n = resp.find(x => x.id === this.item.category);
        this.item.category = n.category;
      })
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    addToCart(){
      this.$store.commit('setShopItem', {
        id: this.item.id,
        quantity: this.quantity
      });
      this.added = this.$store.getters.getStatus == 200 ? 'Добавлено.' : 'Этот товар уже есть в корзине.';
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

.shop-item0{
  background-image: url("../assets/common-banner2.jpg");
  background-position: right -65px;
  background-size: 1200px 200px;
  background-repeat: no-repeat;
}
.shop-item{
  max-width: 1150px;
  margin: 200px auto 50px;
  width: 100%;
  display: grid;
  grid-template-columns: max-content auto;
  color: #777777;
}
img{
  height: 340px;
  margin: 0 15px;
}
.info{
  text-align: left;
  margin: auto 0;
  margin-left: 60px;
}
.info > p{
  margin: 15px 0;
}
/**/
.quantity {
  width: 68px;
  border:rgb(202, 201, 201) 1px solid;
  vertical-align: middle;
  display: inline-block;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
}
input[type=number]
{
  -moz-appearance: textfield;
}
.quantity-number{
  display: inline-block;
  padding: 9px 10px 0;
  vertical-align: top;
  width: 35px;
  border: 0;
  font-size: 13px;
}
.quantity-nav {
  display: inline-block;
  height: 42px;
}
.quantity-button {
  cursor: pointer;
  border-left: 1px solid #eee;
  width: 24px;
  text-align: center;
  color: #333;
  font-size: 13px;
  font-family: "Trebuchet MS", Helvetica, sans-serif !important;
  line-height: 1.7;
  user-select: none;
}
.quantity-button.quantity-up {
  height: 50%;
  top: 0;
  border-bottom: 1px solid #eee;
}
.quantity-button.quantity-down {
  bottom: -1px;
  height: 50%;
}

@media screen and (max-width: 700px){
  .shop-item{
    grid-template-columns: auto;
    grid-template-rows: max-content auto;
  }
  img{
    margin: 0 auto;
  }
  .info{
    margin: 35px;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 400px){
  img{
    max-height: 200px;
  }
  button{
    margin-top: 30px;
    margin-left: 0;
  }
}
</style>
