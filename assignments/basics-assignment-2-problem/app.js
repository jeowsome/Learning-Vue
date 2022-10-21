const app = Vue.createApp({
  data() {
    return {
      userInput: 'OUTPUT',
      userInput2: 'OUTPUT',
    };
  },
  methods: {
    showAlert() {
      alert('You touched my tralala');
    },
    registerInput(event) {
      this.userInput = event.target.value;
    },
    registerInput2(event) {
      this.userInput2 = event.target.value;
    },
  },
});

app.mount('#assignment');
