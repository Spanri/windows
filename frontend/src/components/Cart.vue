<template>
  <div>
    <Banner text="Корзина"></Banner>
    <div class="cart">
        <table>
          <thead>
            <tr>
              <th>Товар</th>
              <th>Цена</th>
              <th>{{quantity}}</th>
              <th>Всего</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
                v-bind:key="index"
                v-for="(item, index) in items">
              <td>
                <img :src="path+'/static/'+item.img">
                <p class="title" @click="goToShopItem(item)">{{item.title}}</p>
              </td>
              <td>{{item.price}}</td>
              <td>
                <div class="quantity">
                  <input class="quantity-number" min="1" type="number" v-model="item.quantity">
                  <div class="quantity-nav">
                    <div @click="quantityUp(index)" class="quantity-button quantity-up">+</div>
                    <div @click="quantityDown(index)" class="quantity-button quantity-down">-</div>
                  </div>
                </div>
              </td>
              <td>{{item.price*item.quantity}}</td>
              <td class="delete" @click="deleteShopItem(item)">{{deleteText}}</td>
            </tr>
            <tr
                v-bind:key="index"
                v-for="(item, index) in items2">
              <td>
                <img :src="path+'/static/'+item.img">
                <p class="title2">
                  Окно на заказ {{item.formFactor}}, {{item.width}}*{{item.height}}, подоконник {{item.windowSill}},
                  отлив {{item.tint}}, ламинация {{item.lamination}}
                </p>
              </td>
              <td>{{item.price}}</td>
              <td>
                <div class="quantity">
                  <input class="quantity-number" min="1" type="number" v-model="item.quantity">
                  <div class="quantity-nav">
                    <div @click="quantityUp2(index)" class="quantity-button quantity-up">+</div>
                    <div @click="quantityDown2(index)" class="quantity-button quantity-down">-</div>
                  </div>
                </div>
              </td>
              <td>{{item.price*item.quantity}}</td>
              <td class="delete" @click="deleteShopItem2(item)">{{deleteText}}</td>
            </tr>
            <tr>
              <td v-for="(e,i) in 5" :key="i"><hr></td>
            </tr>
            <tr>
              <td v-for="(e,i) in totalTh" :key="i"></td>
              <td>Всего:</td>
              <td>{{total}}</td>
            </tr>
          </tbody>
        </table>
        <form prevent-default class="contacts" v-if="items.length != 0">
          <p>Номер телефона:</p>
          <input required v-model="phone" type="text" placeholder="Введите номер телефона">
          <p>Email:</p>
          <input required v-model="email" type="email" placeholder="Введите email">
          <p>Адрес:</p>
          <textarea required v-model="address" type="text" placeholder="Введите адрес"></textarea>
          <br>
          <button @click.prevent="goToConfirmation">ОФОРМИТЬ</button>
          <p v-if="process" style="margin-top: -30px; margin-bottom: 40px;">{{process}}</p>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './Banner'
import {path} from '../config'

export default {
  name: 'Cart',
  components: { Banner },
  props: {
    text: String,
  },
  data () {
    return {
      items: [],
      items2: [],
      price: '',
      title: '',
      description: '',
      quantity: '',
      path: path,
      phone: '',
      email: '',
      address: '',
      deleteText: '',
      windowWidth: 0,
      totalTh: '',
      process: '',
    }
  },
  created(){
    this.windowWidth = window.innerWidth;
    let shopItems = this.$store.getters.getShopItems;
    shopItems.forEach(s => {
      axios.post(path+'/api/product', {id: s.id})
      .then(response => {
        let sRes = response.data;
        sRes.quantity = s.quantity;
        this.items.push(sRes);
      })
      .catch(error => {
        console.log(error)
      })
    })
    this.items2 = this.$store.getters.getShopItems2;
  },
  watch: {
    windowWidth(newHeight, oldHeight) {
      if(newHeight > 600) {
        this.deleteText = 'Удалить';
        this.quantity = 'Количество';
        this.totalTh = 3;
      } else {
        this.deleteText = 'Х';
        this.quantity = 'Кол-во';
        this.totalTh = 2;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      });
    })
  },
  computed:{
    total(){
      let t = 0;
      this.items.forEach(s => {
        t += s.quantity*s.price;
      })
      return t;
    },
  },
  methods: {
    goToShopItem(item){
      let id = item.id.toString();
      this.$router.push({ name: 'ShopItem', params: { id: id } });
    },
    deleteShopItem(item){
      this.$store.commit('deleteShopItem', item.id);
      this.items = this.items.filter(e => e.id != item.id);
    },
    deleteShopItem2(item){
      this.$store.commit('deleteShopItem2', item.id);
      this.items2 = this.items2.filter(e => e.id != item.id);
    },
    quantityUp(i){
      this.items[i].quantity=Number(this.items[i].quantity)+1;
      this.$store.commit('setShopItemQuantity', this.items[i]);
    },
    quantityDown(i){
      this.items[i].quantity>1 ? this.items[i].quantity-=1 : '';
      this.$store.commit('setShopItemQuantity', this.items[i]);
    },
    quantityUp2(i){
      this.items2[i].quantity=Number(this.items2[i].quantity)+1;
      this.$store.commit('setShopItem2Quantity', this.items2[i]);
    },
    quantityDown2(i){
      this.items2[i].quantity>1 ? this.items2[i].quantity-=1 : '';
      this.$store.commit('setShopItem2Quantity', this.items2[i]);
    },
    goToConfirmation(){
      this.process = 'Обработка... (ничего не произойдет)'

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/quantity.css';
@import '../assets/css/button.css';

button{
  margin-bottom: 50px;
}
.cart{
  padding: 0;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 10px;
  width: 100%;
}
tr > *{
  margin: auto 0;
}
tr img{
  height: 80px;
  margin: 15px;
}
tr p{
  padding: 7px 15px;
  text-align: left;
  color: black;
  margin: 0;
}
thead th{
  text-align:left;border-top: 0px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #777777;
  border-bottom: 1px rgb(233, 230, 230) solid;
  padding: .75rem;
}
table {
  border-collapse: collapse;
  width: 100%;
}
tr{
  border: 0;
  padding: 15px;
}
td{
  text-align: left;
}
td p:hover{
  cursor: pointer;
}
.title, .title2{
  display:inline-block;
  color: #777777;
  max-width: 480px;
  word-wrap: break-word;
}
.delete{
  color: #777777;
}
.delete:hover, .title:hover{
  cursor: pointer;
  color: #007CB7;
}
.contacts{
  text-align: left;
  padding-left: 25px;
}
.contacts p{
  margin: 10px;
  margin-left: 0;
  margin-top: 20px;
}
.contacts input, .contacts textarea{
  min-width: 250px;
  border: rgb(202, 201, 201) 1px solid;
  padding: 7px 12px;
}
button{
  margin-top: 20px;
  margin-left: 0;
}
@media screen and (max-width: 600px){
  .cart{
    font-size: 13px;
  }
  tr img{
    height: 40px;
    margin: 10px;
  }
  .delete{
    padding-right: 10px;
  }
  .quantity{
    width: 52px;
    height: 40px;
    margin-right: 10px;
  }
  .quantity-number{
    font-size: 12px;
    padding: 9px 5px 0;
    width: 25px;
  }
  .quantity-nav{
    height: 40px;
    width: 20px;
  }
  .contacts input, .contacts textarea{
    min-width: 180px;
  }
}
</style>
