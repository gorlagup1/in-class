<template>
<div>
    <h1> Hello this is my first program</h1>
   <!-- <h1>{{data}}</h1>
    <h1>{{msg}}</h1>-->
    <!-- we use "v-on" when we use the pass parameter function--> 
    <!--<button v-on:mouseover="hello('data')"> call Hello function</button>-->
    <h1 v-if="show">Conditional rendering in vue js </h1>
    <!--<h1 v-else>"else side"</h1>-->
    <button v-on:click="display">Toogle</button>
    </div>
</template>

<script>
export default {
    name:'Home',
    props:{
        data:String,
        msg:String,
      // methods is used when we pass the parameters
      //data is used when we want to show the conditional rendering in vue js
   },data()
   {
       return{
           show:false
       }
       },
       method:{
           display()
           {
               this.show=true
           }
       }
        }
    

</script>