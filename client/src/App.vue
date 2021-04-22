<template>
  <div id="app">
    <MyNav />
    <div class="container">
      <router-view/>
    </div>

    <div id = "fb-root"></div>
    <div>


 </div>
</template>


<script>
import MyNav from "./components/Nav";

export default {
  components: {
    MyNav  
  }
}
        /*global fb*/
        window.fbAsyncInit = function(){
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };

        (function(d, s, id){
          var js, fjs = d.getElementByTagName(s)[0];
          if(d.getElementByiD(ID)) RETURN;
          JS = D.CREATEeLEMENT(S); JS.ID = ID;
          JS.SRC = 'https://connect.facebook.net/en_us/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        
</script>

<style lang="scss">

</style>