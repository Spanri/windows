<template>
  <div class="header">
    <header v-scroll="handleScroll" :style="{marginBottom: search ? '0' : '50px'}">
      <div class="header-inside">
        <router-link class="logo" to="/">
          <img src="../assets/logo2.svg" alt="Логотип">
          <!-- <p>ЮГ СТРОЙ ОКНО</p> -->
        </router-link>
        <div></div>
        <nav class="not-mobile">
          <router-link to="/">ГЛАВНАЯ</router-link>
          <router-link to="/shop">ТОВАРЫ</router-link>
          <router-link to="/calculator">КАЛЬКУЛЯТОР ОКОН</router-link>
          <router-link to="/contacts" style="margin-right:40px;">КОНТАКТЫ</router-link>
          <router-link class="cart" to="/cart" style="margin-right:20px;padding-top:25px;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 17 17">
              <path d="M13 4v-2.394c0-0.885-0.737-1.606-1.643-1.606h-5.699c-0.905 0-1.642 0.721-1.642 1.606v2.394h-3.016v13h15v-13h-3zM5.016 1.606c0-0.334 0.288-0.606 0.642-0.606h5.699c0.355 0 0.643 0.272 0.643 0.606v2.394h-6.984v-2.394zM15 16h-13v-8h13v8zM15 7h-13v-2h2.016v0.643h1v-0.643h6.984v0.643h1v-0.643h2v2z"/>
            </svg>
            <span style="font-size: 13px;padding-left:2px;vertical-align:middle">{{$store.getters.getShopItems.length}}</span>
          </router-link>
          <a id="search">
            <svg @click="search = !search" width="23px" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z" /></svg>
          </a>
        </nav>
        <div id="hamburger" :class="{open: hamOpen}" @click="hamOpen = !hamOpen;">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <nav class="mobile" v-if="hamOpen">
          <router-link v-on:click.native="hamOpen = false" to="/">ГЛАВНАЯ</router-link>
          <router-link v-on:click.native="hamOpen = false" to="/shop">ТОВАРЫ</router-link>
          <router-link v-on:click.native="hamOpen = false" to="/calculator">КАЛЬКУЛЯТОР ОКОН</router-link>
          <router-link v-on:click.native="hamOpen = false" to="/contacts">КОНТАКТЫ</router-link>
          <router-link v-on:click.native="hamOpen = false" to="/cart" style="margin-right:20px;padding-top:25px;" >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 17 17">
              <path d="M13 4v-2.394c0-0.885-0.737-1.606-1.643-1.606h-5.699c-0.905 0-1.642 0.721-1.642 1.606v2.394h-3.016v13h15v-13h-3zM5.016 1.606c0-0.334 0.288-0.606 0.642-0.606h5.699c0.355 0 0.643 0.272 0.643 0.606v2.394h-6.984v-2.394zM15 16h-13v-8h13v8zM15 7h-13v-2h2.016v0.643h1v-0.643h6.984v0.643h1v-0.643h2v2z" fill="#000000" />
            </svg>
          </router-link>
          <a id="search" v-on:click.native="hamOpen = false">
            <svg @click="search = !search;" width="23px" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z" /></svg>
          </a>
        </nav>
        <div v-if="search" id="search-panel">
          <b-navbar-nav>
            <b-nav-form>
            <b-form-input v-model="searchInput" size="sm" class="mr-sm-2 search-panel-input" placeholder="Введите название товара"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0">
                <svg @click="search = !search" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="white" d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"></path>
                </svg>
            </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </div>
    </header>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Header',
    data () {
        return {
            search: false,
            searchInput: '',
            hamOpen: false,
        }
    },
    methods: {
        handleScroll: function (evt, el) {
            // if (window.scrollY > 80) {
            //     el.setAttribute(
            //         'style',
            //         'max-width: 100%;'
            //     )
            // } else {
            //     el.setAttribute(
            //         'style',
            //         'max-width: 1200px;'
            //     )
            // }
            return false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  position:absolute;
  top:40px;
  width:100%;
  height:100px;
  z-index: 2;
}
header{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  position: sticky;
  top: 0;
  background: white;
}
.header-inside{
  max-width: 1200px;
  background: white;
  margin: 0 auto;
  display: grid;
  grid-template-columns: max-content auto max-content;
}
.not-mobile{
  display: grid;
  grid-template-columns: repeat(8,auto);
  margin: 0;
  padding: 0;
}
.mobile{
  display: grid;
  grid-template-rows: repeat(8,auto);
  margin: 0;
  padding: 0;
  transition: all .25s ease-out;
}
/**/
.logo{
  color: black;
  padding-left: 50px;
  padding-top: 17px;
  padding-bottom: 12px;
}
.logo p{
  display: inline-block;
  margin: 0;
  margin-left: 5px;
  vertical-align: middle;
}.logo img{
  height: 40px;
}
/**/
nav a{
  font-size: 12px;
  font-weight: 600;
}
.not-mobile a{
  color: black;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-right: 50px;
}
.mobile a{
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
}
nav a:hover, .logo:hover{
  cursor: pointer;
  color:#007CB7;
  text-decoration: none;
  transition: all 0.2s ease-out;
}
.router-link-active{
  color:#007CB7;
}
/**/
#search{
  padding-top: 25px;
}
#search:hover, .cart:hover > svg{
  cursor: pointer;
  fill:#007CB7;
  transition: all 0.2s ease-out;
}
#search a{
    margin-right: 0;
    padding-top: 11px !important;
}

#search-panel{
  width: 100%;
  background: linear-gradient(270deg, rgb(5, 149, 216) 0%, rgb(28, 98, 179) 100%);
  transition: all 0.2s ease-out;
}

.navbar-nav{
  max-width: 1200px;
  margin: 0 auto;
}

#search-panel input{
  background: none;
  color: white;
  border: 0;
  width: calc(100% - 90px);
  padding: 25px;
  margin-left: 20px;
  font-size: 14px;
}

#search-panel input:focus{
  border: 0;
  color: white;
  box-shadow: 0;
}

#search-panel input::placeholder{
  color: rgb(185, 211, 226);
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

/* Гамбургер */
#hamburger {
  width: 30px;
  height: 15px;
  position: relative;
  margin: 20px auto;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}
#hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #007CB7;
  border-radius: 5px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
#hamburger span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#hamburger span:nth-child(2) {
  top: 9px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#hamburger span:nth-child(3) {
  top: 18px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#hamburger.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -1.5px;
  left: 4px;
}

#hamburger.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 19.5px;
  left: 4px;
}

/**/
@media screen and (max-width: 820px){
  .logo{
    padding-left: 10px;
  }
  #search{
    margin-right: 20px;
  }
  .logo{
    margin-right: 10px;
  }
  .not-mobile{
    display: none;
  }
  #hamburger{
    display: grid;
    margin-right: 20px;
  }
  .mobile{
    display: grid;
  }
}
@media screen and (max-width: 819px){
  a{
    padding-top: 10px !important;
    margin-right: 0 !important;
  }
}
@media screen and (max-width: 1150px){
  .not-mobile a{
    margin-right: 15px;
  }
  .logo img{
    width: 160px;
  }
}
@media screen and (min-width: 820px){
  .not-mobile{
    display: grid;
  }
  #hamburger{
    display: none;
  }
  .mobile{
    display: none;
  }
  .logo p{
    font-size: 24px;
  }

}
@media screen and (max-width: 600px){
  .logo p{
    font-size: 18px;
  }
  .logo img{
    width: 150px;
  }
}
</style>
