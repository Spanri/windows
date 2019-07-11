<template>
    <footer>
			Подвал сайта
		</footer>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>