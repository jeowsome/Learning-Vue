const app = Vue.createApp({
  data() {
    return {
      myName: 'Jeomar Bayoguina',
      myAge: 27,
      someIMGUrl:
        'https://wl-brightside.cf.tsp.li/resize/728x/jpg/0bb/959/ba16a05fa7b18c5f21767d2b1c.jpg',
    };
  },
  methods: {
    outputRandomNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
