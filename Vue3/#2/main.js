const app = Vue.createApp({
  data() {
    return {
      // x: 0,
      // y: 0,
      classTesting: "flex",
      products: [
        {
          thumb: "./assets/p1.jpg",
          name: "SP A",
          price: 100.0,
          isCart: false,
        },
        {
          thumb: "./assets/p2.jpg",
          name: "SP B",
          price: 150.0,
          isCart: false,
        },
        {
          thumb: "./assets/p3.jpg",
          name: "SP C",
          price: 200.0,
          isCart: true,
        },
      ],
    };
  },
  methods: {
    onToggleCart(event, product) {
      this.isCart = !product.isCart;
    },
    // onLogEvent(event, newX, newY) {
    //   console.log("running evrnt...", event);
    //   this.x = newX;
    //   this.y = newY;
    // },
    // onMouseMoveEvent(event) {
    //   console.log("running mose move event ...", event);
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    // },
  },
  computed: {
    productsComputed() {
      return this.products.filter((product) => product.price < 160);
    },
  },
});

app.mount("#contact");
