<template>
  <div class="banner0">
    <div class="banner">
      <div></div>
      <div>
        <h1 style="font-family: 'Exo 2', sans-serif;">{{text}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Banner',
  props: {
    text: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner0{
  background-image: url("../assets/common-banner2.jpg");
  background-position: 100px 0;
  background-size: 1500px 280;
  background-repeat: no-repeat;
}
.banner{
  color:white;
  display: grid;
  grid-template-columns: auto max-content;
  padding: 220px 0 0 0;
  max-width: 1000px;
  margin: 0px auto;
  width: 100%;
}
.banner h1{
  text-align: left;
  padding-left: 30px;
  margin-top: -80px;
}
@media screen and (min-width: 1200px){
  .banner0{
    background-size: 100% 280px;
  }
}
@media screen and (max-width: 1200px){
  .banner0{
    background-position: -350px 0;
  }
  .banner{
    padding-right: 40px;
  }
}
@media screen and (max-width: 840px){
  .banner0{
    background-position: -550px 0;
  }
}
@media screen and (max-width: 680px){
  .banner0{
    background-size: 1300px 280px;
    background-position: -440px 0;
  }
}
@media screen and (max-width: 500px){
  .banner0{
    background-size: 1400px 280px;
    background-position: -700px 0;
  }
}
</style>

