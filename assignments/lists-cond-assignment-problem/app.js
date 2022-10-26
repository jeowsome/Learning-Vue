const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: '',
      toggled: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    },
    toggleList() {
      this.toggled = !this.toggled;
    },
  },
  computed: {
    captions() {
      if (this.tasks.length === 0) {
        return 'Hide / Show List';
      } else if (this.tasks.length > 0 && this.toggled) {
        return 'Hide List';
      } else {
        return 'Show List';
      }
    },
  },
});

app.mount('#assignment');
