<template>
  <div>
    <Banner text="Товары"></Banner>
    <div class="shop">
      <nav>
        <p>Окна</p>
        <p>Подоконники</p>
        <p>Ламинация</p>
      </nav>
      <div class="right-part">
        <div
            class="card"
            v-bind:key="index"
            v-for="(item, index) in items"
            @click="$router.push({ name: 'ShopItem', params: { id: item.id } })">
          <img :src="path+'/static/'+item.img">
          <p>{{item.title}}</p>
          <p>₽{{item.price}}</p>
        </div>
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
    axios.get(path+'/api/products')
    .then(response => {
      console.log(response.data)
      let resp = response.data;
      resp.forEach(r => {
        this.items.push(r);
      });
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop{
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: max-content auto;
}
nav{
  min-width: 200px;
  height: min-content;
  box-shadow: 0px 0px 10px rgb(233, 230, 230);
}
nav p{
  padding: 15px 10px;
  border-bottom: rgb(233, 230, 230) 1px solid;
  margin: 0 20px;
  text-align: left;
  color: black;
  font-size: 16px;
}
nav p:hover{
  cursor: pointer;
  color: #007CB7;
}
.right-part{
  margin-left: 50px;
}
.card{
  max-width: 200px;
  display: inline-block;
  justify-items: start;
  margin-right: 30px;
  margin-bottom: 60px;
  border: 0;
  vertical-align: top;
}
.card:hover{
  background:rgb(213, 238, 156);
  cursor: pointer;
}
.card img{
  height: 200px;
}
.card p{
  padding: 7px 15px;
  text-align: left;
  color: black;
  margin: 0;
}
</style>
