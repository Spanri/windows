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
              <td>{{item.quantity}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
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
      path: path
    }
  },
  created(){
    let shopItem = this.$store.getters.getShopItems;
    shopItem.forEach(id => {
      axios.post(path+'/api/product', {id: id})
      .then(response => {
        console.log(response.data)
        this.items.push(response.data);
      })
      .catch(error => {
        console.log(error)
      })
    })
  },
  methods: {
    goToShopItem(item){
      let id = item.id.toString()
      this.$router.push({ name: 'ShopItem', params: { id: id } })
    },
    deleteShopItem(item){
      this.$store.commit('deleteShopItem', this.item.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
