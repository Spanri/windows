<template>
  <div>
    <Banner text="Товары"></Banner>
    <div class="shop-item">
      <img :src="path+'/static/'+item.img">
      <p>{{item.title}}</p>
      <p>{{item.price}}</p>
      <p>{{item.description}}</p>
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
    }
  },
  created(){
    axios.post(path+'/api/product', {id: 1})
    .then(response => {
      this.item = response.data;
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
.shop-item{
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: max-content auto;
}
img{
  height: 200px;
}
</style>
