const app = Vue.createApp({
  template: `<h1>
  Hello from {{teamName}} and {{!isHello ? firstName + " " + lastName:
  ""}}
</h1>
<button @click="onChangeName">Change Name But Shorter</button>
<div class="modal" v-if="isShowModal">
  <h1>Modal content</h1>
</div>`,
  data() {
    return {
      teamName: "RHP Team",
      firstName: "Quan",
      lastName: "Nguyen",
      isHello: false,
      isShowModal: false,
    };
  },
  methods: {
    onChangeName() {
      this.firstName = "Sky";
      this.lastName = "Albert";
      this.isShowModal = !this.isShowModal;
    },
  },
});

app.mount("#contact");
