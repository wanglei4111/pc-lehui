<template>
  <div id="app">
      <all-configs></all-configs>
  </div>
  
</template>

<script>
import configs from '@/components/configs'
export default {
  name: 'App',
  components:{
    'all-configs':configs
  }
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
  min-width: 664px;
  max-width: 855px;
  margin:0 auto;
  padding: 35px;
  box-sizing: border-box;
}

</style>
