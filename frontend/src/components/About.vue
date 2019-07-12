<template>
  <div class="shop">
    Магазин
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      randomNumber: 0
    }
  },
  created(){
    this.getRandomFromBackend();
  },
  methods: {
    getRandomFromBackend () {
      const path = `http://localhost:5000/api/random`
      axios.get(path)
      .then(response => {
        this.randomNumber = response.data.randomNumber
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop{
  max-width: 1000px;
  margin: 150px auto 0px;
  width: 100%;
}
</style>
