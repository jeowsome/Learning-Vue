const app = Vue.createApp({
  data() {
    return {
      counter: 40,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    addButton(num) {
      this.counter += num;
    },
    reduceButton(num) {
      if (this.counter <= 0) {
        return;
      }
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm() {},
  },
});

app.mount('#events');
