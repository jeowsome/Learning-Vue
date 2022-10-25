const app = Vue.createApp({
  data() {
    return {
      userClass: '',
      bgColor: '',
      paragraphIsVisible: true,
    };
  },
  methods: {
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userClass === 'user1',
        user2: this.userClass === 'user2',
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
});

app.mount('#assignment');
