const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname
    };
  },
  watch: {
    counter(value) {
      if (value > 60) {
        const that = this;
        setTimeout(() => (that.counter = 0), 2000);
      }
    },
    // name(value) {
    //   this.fullname = this.name ? this.name + ' ' + this.lastName : '';
    // },
    // lastName(value) {
    //   this.fullname = this.name ? this.name + ' ' + value : '';
    // },
  },
  computed: {
    fullname() {
      return this.name && this.lastName ? this.name + ' ' + this.lastName : '';
    },
  },
  methods: {
    outputFullName() {
      return this.name ? this.name + ' ' + 'Bayoguina' : '';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
