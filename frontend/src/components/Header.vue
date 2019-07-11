<template>
    <header v-scroll="handleScroll">
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">
                <img src="../assets/logo.png" alt="Логотип" width="40px">
                <h4 style="display: inline-block;margin:0;vertical-align:middle">ЮГ СТРОЙ ОКНО</h4>
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" >ГЛАВНАЯ</b-nav-item>
                    <b-nav-item-dropdown no-caret class="dropdown">
                        <div slot="button-content" class="custom">МАГАЗИН</div>
                        <b-dropdown-item href="#">КАТЕГОРИИ</b-dropdown-item>
                        <b-dropdown-item href="#">ДЕТАЛИ ТОВАРА</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown no-caret>
                        <div slot="button-content" class="custom">БЛОГ</div>
                        <b-dropdown-item href="#">КАТЕГОРИИ</b-dropdown-item>
                        <b-dropdown-item href="#">ДЕТАЛИ ТОВАРА</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown no-caret>
                        <div slot="button-content" class="custom">СТРАНИЦЫ</div>
                        <b-dropdown-item href="#">КАТЕГОРИИ</b-dropdown-item>
                        <b-dropdown-item href="#">ДЕТАЛИ ТОВАРА</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="#">КОНТАКТЫ</b-nav-item>
                    <b-nav-item class="search">
                        <svg @click="search = !search" width="23px" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z" /></svg>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div class="dropdown">
            <button 
                class="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                Валюты
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button class="dropdown-item">USD</button>
                <button class="dropdown-item">EUR</button>
            </div>
        </div>
        <b-navbar-nav v-if="search" class="search-panel">
            <b-nav-form>
            <b-form-input v-model="searchInput" size="sm" class="mr-sm-2 search-panel-input" placeholder="Введите название товара"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
                <svg @click="search = !search" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="white" d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"></path>
                </svg>
            </b-button>
            </b-nav-form>
        </b-navbar-nav>
        <p>{{ searchInput }}</p>
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
                    'max-width: 100%;'
                )
            } else {
                el.setAttribute(
                    'style',
                    'max-width: 1200px;'
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
    max-width: 1200px;
    margin: 0px auto 0;
    /* margin-top: 50px; */
    margin-bottom: 50px;
    padding: 0;
    background: white !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-out;
    position: sticky;
    top: 0;
}
nav{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
}
nav > *, nav span{
    margin: 0;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    color:#007CB7;
}
.navbar-brand {
    margin: 5px;
    margin-left: 50px;
    color:#007CB7;
    letter-spacing: -1px;
}
.navbar-collapse, .navbar-toggler{
    margin-right: 50px;
    border: 0;
}
/* change the background color */
.nav-link, .custom{
    font-size: 12px;
    color: black !important;
    margin: 0;
    padding: 0 !important;
    padding-top: 15px !important;
    padding-bottom: 5px !important;
}
.nav-item{
    vertical-align: middle !important;
}
.custom{
    font-size: 12px;
    padding-top: 7px !important;
    color: black;
}
.custom a{
    padding: 0 !important;
}
.dropdown-toggle {
  display: none !important;
  background: rgb(19, 78, 146) !important;
}
.dropdown:hover > .dropdown-menu {
  display: block !important;
  background: #6a8592;
}
.dropdown-menu{
    border: 0 !important;
    background: #6a8592;
}
/**/
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
.form-control:focus {
    border-color: rgba(255, 0, 0, 0);
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075), 0 0 0px rgba(255, 0, 0, 0.6);
}
/**/
.btn-secondary{
    color: black;
    background: none;
    border: 0;
    padding-top:0;
}
.nav-link:hover, .custom:hover{
    color: #007CB7 !important;
    transition: all 0.2s ease-out;
}
.nav-item{
    margin-left: 0;
    margin-right: 45px;
}
</style>