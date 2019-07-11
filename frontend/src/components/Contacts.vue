<template>
    <div>
			Контакты
      <v-app id="inspire">
        <div class="text-xs-center">
          <v-menu open-on-hover top offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
              >
                Dropdown
              </v-btn>
            </template>

            <v-list>
              <v-list-tile
                v-for="(item, index) in items"
                :key="index"
                @click=""
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-app>
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
