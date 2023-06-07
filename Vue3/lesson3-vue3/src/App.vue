<template>
  <!-- <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <header-app ref="header"></header-app> -->

  <h1 class="fade">Hello from vue cli</h1>
  <base-modal />
  <!-- <button @click="onChange">Change me</button> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import HeaderApp from "./components/HeaderApp.vue";
import ModalApp from "./components/ModalApp.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // HeaderApp: HeaderApp,
    BaseModal: ModalApp,
  },
  data() {
    return {};
  },
  methods: {
    // onChange() {
    //   console.log("running here...");
    //   console.log(this.$refs.hello);
    //   console.log(this.$refs.header);
    //   this.$refs.hello.onConsologTestting();
    // },
  },
};
</script>
