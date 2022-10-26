const app = Vue.createApp({
  data() {
    return { goals: [], userEnteredGoal: '' };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userEnteredGoal);
      this.userEnteredGoal = '';
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
