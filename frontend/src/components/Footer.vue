<template>
  <div class="footer0">
  <footer class="footer">
    <div>
      <h6>О нас</h6>
      <p>
        Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений.
      </p>
    </div>
    <div>
      <div class="single-footer-widget">
        <h6>Новости</h6>
        <p>Оставайтесь в курсе наших последних новостей</p>
        <!-- <div class="" id="mc_embed_signup">

          <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
            method="get" class="form-inline">

            <div class="d-flex flex-row">

              <input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                required="" type="email">


              <button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
              <div style="position: absolute; left: -5000px;">
                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">
              </div>

              <!-- <div class="col-lg-4 col-md-4">
                    <button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
                  </div>  --
            </div>
            <div class="info"></div>
          </form>
        </div> -->
      </div>
    </div>
    <div>
      <div class="single-footer-widget mail-chimp">
        <h6 class="mb-20">Инстаграм</h6>
        <ul class="instafeed d-flex flex-wrap">
          <li><img src="img/i1.jpg" alt=""></li>
          <li><img src="img/i2.jpg" alt=""></li>
          <li><img src="img/i3.jpg" alt=""></li>
          <li><img src="img/i4.jpg" alt=""></li>
          <li><img src="img/i5.jpg" alt=""></li>
          <li><img src="img/i6.jpg" alt=""></li>
          <li><img src="img/i7.jpg" alt=""></li>
          <li><img src="img/i8.jpg" alt=""></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="single-footer-widget">
        <h6>Follow Us</h6>
        <p>Let us be social</p>
        <div class="footer-social d-flex align-items-center">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-dribbble"></i></a>
          <a href="#"><i class="fa fa-behance"></i></a>
        </div>
      </div>
    </div>
	</footer>
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
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer0{
  background: #222222;
}
.footer{
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  padding: 50px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
}
h6{
  text-align: left;
  font-family: 'Exo 2', sans-serif;
  margin-bottom: 25px;
  font-weight: 600;
}
p{
  text-align: left;
  font-family: 'Roboto', sans-serif;
  color:#777777;
}
@media screen and (max-width: 500px){
  .footer{
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
  }
}
</style>
