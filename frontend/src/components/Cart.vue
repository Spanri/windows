<template>
  <div>
    <Banner text="Корзина"></Banner>
    <div class="cart">
        <table>
          <thead>
            <tr>
              <th>Товар</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Всего</th>
            </tr>
          </thead>
          <tbody>
            <tr
                v-bind:key="index"
                v-for="(item, index) in items">
              <td>
                <img :src="path+'/static/'+item.img">
                <p style="display:inline-block" @click="goToShopItem(item)">{{item.title}}</p>
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
            </tr>
          </tbody>
        </table>
        <button>ОФОРМИТЬ</button>
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
      price: '',
      title: '',
      description: '',
      quantity: 2,
      path: path
    }
  },
  created(){
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
  },
  methods: {
    goToShopItem(item){
      let id = item.id.toString();
      this.$router.push({ name: 'ShopItem', params: { id: id } });
    },
    deleteShopItem(item){
      this.$store.commit('deleteShopItem', this.item.id);
    },
    quantityUp(i){
      this.items[i].quantity=Number(this.items[i].quantity)+1;
      this.$store.commit('setShopItemId', this.items[i]);
    },
    quantityDown(i){
      this.items[i].quantity>1 ? this.items[i].quantity-=1 : '';
      this.$store.commit('setShopItemId', this.items[i]);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/quantity.css';
@import '../assets/css/button.css';

button{
  text-align: left;
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
@media screen and (max-width: 600px){
  .cart{
    font-size: 13px;
  }
  tr img{
    height: 40px;
    margin: 10px;
  }
}
</style>
