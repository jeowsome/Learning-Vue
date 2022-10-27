const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '2020202',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '303030',
          email: 'manuel@localhost.com',
        },
      ],
    };
  },
});

app.component('friend-info', {
  template: `
  <li>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">
{{ detailsVisibles ? 'Hide' : 'Show' }} Details
</button>
  <ul v-show="detailsVisibles">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</li>
  `,
  data() {
    return {
      detailsVisibles: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '2020202',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisibles = !this.detailsVisibles;
    },
  },
});
app.mount('#app');
