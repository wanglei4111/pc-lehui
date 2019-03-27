<template>
  <div id="app">
      <router-view name="pcHeader"></router-view>
      <router-view name="pcC"></router-view>
      <router-view name="pcScan"></router-view> 
      <router-view name="pcMoney"></router-view>   
      <router-view name="pcPrint"></router-view>   
      <router-view name="pcUpdate"></router-view>   
      <router-view/> 
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(250, 250, 250);
  color: #2c3e50;
  min-width: 760px;
  max-width: 954px;
  margin:0 auto;
  padding: 35px;
  box-sizing: border-box;
}

</style>
