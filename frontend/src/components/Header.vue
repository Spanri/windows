<template>
    <header v-scroll="handleScroll">
      <div class="header-inside">
        <router-link class="logo" to="/">
          <img src="../assets/logo.png" alt="Логотип" width="40px">
          <h4 style="display: inline-block;margin:0;vertical-align:middle">ЮГ СТРОЙ ОКНО</h4>
        </router-link>
        <div></div>
        <nav class="not-mobile">
          <router-link to="/">ГЛАВНАЯ</router-link>
          <router-link to="/">МАГАЗИН</router-link>
          <router-link to="#">БЛОГ</router-link>
          <router-link to="/contacts">КОНТАКТЫ</router-link>
          <a class="search">
            <svg @click="search = !search" width="23px" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z" /></svg>
          </a>
        </nav>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav class="mobile">
          <router-link to="/">ГЛАВНАЯ</router-link>
          <router-link to="/">МАГАЗИН</router-link>
          <router-link to="#">БЛОГ</router-link>
          <router-link to="/contacts">КОНТАКТЫ</router-link>
          <a class="search">
            <svg @click="search = !search" width="23px" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z" /></svg>
          </a>
        </nav>
      <b-navbar-nav v-if="search" class="search-panel">
          <b-nav-form>
          <b-form-input v-model="searchInput" size="sm" class="mr-sm-2 search-panel-input" placeholder="Введите название товара"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0">
              <svg @click="search = !search" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                  <path fill="white" d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"></path>
              </svg>
          </b-button>
          </b-nav-form>
      </b-navbar-nav>
    </header>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Header',
    data () {
        return {
            search: false,
            searchInput: '',
        }
    },
    methods: {
        handleScroll: function (evt, el) {
            if (window.scrollY > 80) {
                el.setAttribute(
                    'style',
                    'width: 100%;'
                )
            } else {
                el.setAttribute(
                    'style',
                    'width: 1200px;'
                )
            }
            return false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  position: sticky;
  top: 0;
  background: white;
}
.header-inside{
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: max-content auto max-content;
}
.not-mobile{
  display: grid;
  grid-template-columns: repeat(5,auto);
  margin: 0;
  padding: 0;
}
.mobile{
  display: grid;
  grid-template-rows: repeat(5,auto);
  margin: 0;
  padding: 0;
}
.logo{
  color: black;
  padding-left: 50px;
  padding-top: 17px;
  padding-bottom: 12px;
}
.not-mobile a{
  color: black;
  margin-right: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
}
.not-mobile a:hover, .logo:hover{
  cursor: pointer;
  color:#007CB7;
  text-decoration: none;
  transition: all 0.2s ease-out;
}
.search:hover{
  cursor: pointer;
  fill:#007CB7;
  transition: all 0.2s ease-out;
}
/* header
  width: 1200px
  margin: 0px auto 0
  /* margin-top: 50px;
  margin-bottom: 50px
  padding: 0
  background: white !important
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1)
  transition: all 0.2s ease-out
  position: sticky
  top: 0
  display: grid
  grid-template-columns: auto auto auto

nav
  max-width: 1200px
  margin: 0 auto
  padding: 0
  > *
    margin: 0
    padding: 0
    padding-top: 10px
    padding-bottom: 10px
    color:#007CB7
*/
.search a{
    margin-right: 0;
    padding-top: 11px !important;
}
.search:hover{
    fill:#007CB7;
}

.search-panel{
  width: 100%;
  background: linear-gradient(270deg, rgb(5, 149, 216) 0%, rgb(28, 98, 179) 100%);
  transition: all 0.2s ease-out;
}

.search-panel input{
  background: none;
  color: white;
  border: 0;
  width: calc(100% - 90px);
  padding: 25px;
  margin-left: 20px;
}

.search-panel input:focus{
  border: 0;
  color: white;
  box-shadow: 0;
}

.search-panel input::placeholder{
  color: rgb(238, 229, 229);
}

.form-control:focus{
    border-color: rgba(255, 0, 0, 0);
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075), 0 0 0px rgba(255, 0, 0, 0.6);
}

.btn-secondary{
    color: black;
    background: none;
    border: 0;
    padding-top: 0;
}

.btn-secondary:active, .btn-secondary:focus{
    color: black;
    background: none;
    border: 0;
    padding-top: 0;
}
@media screen and (max-width: 820px){
  .logo{
    padding-left: 10px;
  }
  nav a{
    margin-right: 20px;
  }
  .logo{
    margin-right: 10px;
  }
}
@media screen and (min-width: 600px){
  .not-mobile{
    display: block;
  }
  .mobile{
    display: none;
  }
}
@media screen and (max-width: 600px){
  .not-mobile{
    display: none;
  }
  .mobile{
    display: block;
  }
}
</style>
