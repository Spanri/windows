<template>
  <div>
    <Banner text="Товары"></Banner>
    <div class="shop">
      <nav>
        <p
            @click="navItem = item;"
            :class="navItem == item ? 'active' : ''"
            v-bind:key="index"
            v-for="(item, index) in navItems">
          {{item.category}}
        </p>
      </nav>
      <div class="right-part">
        <div
            class="card"
            v-bind:key="index"
            v-for="(item, index) in itemsFilter"
            @click="goToShopItem(item)">
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
      navItems: [],
      navItem: '',
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
      let resp = response.data;
      resp.forEach(r => {
        this.items.push(r);
      });
    })
    .catch(error => {
      console.log(error)
    })
    axios.get(path+'/api/productCategories')
    .then(response => {
      let resp = response.data;
      resp.forEach(r => {
        this.navItems.push(r);
      });
      this.items.forEach((el,i) => {
        let n = this.navItems.find(x => x.id === el.category);
        this.items[i].category = n.category;
      })
      console.log(this.items);
      this.navItem = resp[0];
    })
    .catch(error => {
      console.log(error)
    })
  },
  computed: {
    itemsFilter(){
      return this.items.filter(i => i.category == this.navItem.category)
    }
  },
  methods: {
    goToShopItem(item){
      let id = item.id.toString()
      this.$router.push({ name: 'ShopItem', params: { id: id } })
    }
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
  align-self: start;
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
  object-fit: cover;
  width: 200px;
  height: 200px;
  padding: 15px;
}
.card p{
  padding: 7px 15px;
  text-align: left;
  color: black;
  margin: 0;
}
.active{
  color: #007CB7;
}
@media screen and (max-width: 1300px){
  nav{
    margin-left: 20px;
  }
}
@media screen and (max-width: 600px){
  .shop{
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
  nav{
    margin-bottom: 20px;
    margin-left: 0;
  }
  nav p{
    text-align: center;
  }
}
</style>
