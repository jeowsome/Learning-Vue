const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      expectedResult: 37,
    };
  },
  computed: {
    result() {
      return this.counter === this.expectedResult
        ? this.expectedResult
        : this.counter > this.expectedResult
        ? 'Too much!'
        : 'Not there yet';
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => (that.counter = 0), 5000);
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
});

app.mount('#assignment');
