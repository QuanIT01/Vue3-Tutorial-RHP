<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <header-app ref="header"></header-app>
  <h1>Hello from vue cli</h1>
  <button @click="onChange">Change me</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderApp from "./components/HeaderApp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderApp: HeaderApp,
  },
  data() {
    return {};
  },
  methods: {
    onChange() {
      console.log("running here...");
      console.log(this.$refs.hello);
      console.log(this.$refs.header);
      this.$refs.hello.onConsologTestting();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
