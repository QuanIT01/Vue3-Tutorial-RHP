<template>
  <!-- <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <header-app ref="header"></header-app> -->

  <h1 class="fade">Hello from vue cli</h1>
  <teleport to="body"
    ><base-modal
      v-if="isShowModal"
      title="this is new title from app component"
      content="this is content modal"
      theme="example"
      @cancel="onToggleModal"
    >
      <template v-slot:header>
        <h2>This is the header</h2>
      </template>
      <template v-slot:footer>
        <button @click="onToggleModal">Cancel</button>
      </template>
      <label for="">Name</label>
      <input type="password" /> </base-modal
  ></teleport>

  <button @click="onToggleModal">Toggle modal</button>
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
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
    },
    // onChange() {
    //   console.log("running here...");
    //   console.log(this.$refs.hello);
    //   console.log(this.$refs.header);
    //   this.$refs.hello.onConsologTestting();
    // },
  },
};
</script>
