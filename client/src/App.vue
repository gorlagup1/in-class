<template>
  <div id="app">
    <MyNav />
    <div class="container">
      <router-view/>
    </div>

    <div id = "fb-root"></div>
    <div class="fb-customerchat"
      attribution="fb-customerchat"
      page_id="267612484194">
    </div>
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
         window.fbAsyncInit = function() {
          FB.init({
            appId      : '509660520411411',
            cookie     : true,
            xfbml      : true,
            version    : 'v10.0'
          });
      
          FB.AppEvents.logPageView();   
      
        }; 

        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          JS.SRC = 'https://connect.facebook.net/en_US/sdk.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        
</script>
  
<style lang="scss">

</style>

