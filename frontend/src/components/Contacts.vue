<template>
  <div class="contacts">
    <div class="contacts2">
      <h1 style="padding-right: 40px;font-family: 'Exo 2', sans-serif;text-align:right">Контакты</h1>
      <p style="padding-right: 40px;font-family: 'Roboto', sans-serif;text-align:right">Какой-то текст.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contacts',
  data () {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contacts{
  background-image: url("../assets/common-banner2.jpg");
  background-position: 45% 50%;
  background-size: 120% auto;
  background-repeat: no-repeat;
}
.contacts2{
  padding: 40px 0 100px 0;
  color:white;
  max-width: 1000px;
  margin: 150px auto 0px;
  width: 100%;
}
</style>
