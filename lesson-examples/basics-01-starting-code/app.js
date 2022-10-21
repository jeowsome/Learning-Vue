const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Learn Vue!',
      courseGoalB: 'Master Vue!',
      vueLink: 'https://vuejs.org/',
      htmlContent: '<h3>I am here</h3>',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
