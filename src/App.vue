<template>
  <div id="app">

    <img src="./assets/logo.png">
    <router-view/>
    <vue-slide-bar v-model="simpleValue"/>
    <br />

    <radio name="robot" value="1" checked>
  	   I'm a robot 🤖
    </radio>
    <radio name="robot" value="0">
    	I'm not a robot
    </radio>

    <br />
    <checkbox
    id="input-terms"
    class-name="terms"
    name="terms"
    value="1"
    v-model="model"
    checked
    required>
    I agree to <a href="https://www.facebook.com/nakdcoffee/">buy Steph a coffee</a>
    </checkbox>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      simpleValue: 50
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.checkbox-component > input + label > .input-box > .input-box-tick,
.radio-component > input + label > .input-box > .input-box-circle {
  display: none;
}
.radio-component > input:checked + label > .input-box {
  background: url("http://cdn.shopify.com/s/files/1/1061/1924/products/Robot_Emoji_Icon_abe1111a-1293-4668-bdf9-9ceb05cff58e_grande.png?v=1485573487") no-repeat center center;
  background-size: 100% 100%;
}
.checkbox-component > input:checked + label > .input-box {
  background: url("https://cdn.shopify.com/s/files/1/1061/1924/products/Hot_Coffee_Emoji_large.png?v=1480481030") no-repeat center center;
  background-size: 100% 100%;
}
</style>
