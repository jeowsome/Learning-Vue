<template>
  <li>
    <h2>{{ name }} {{ favoriteFriend }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
      <button @click="toggleFavorite">{{ favoriteLabel }}</button>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
      },
    },
    emits: ['toggle-friend-fave'],
    // emits: {
    //   'toggle-friend-fave': function (id) {
    //     if (id) {
    //       return true;
    //     }
    //     console.log('Missing ID');
    //     return false;
    //   },
    // },
    data() {
      return {
        detailsAreVisible: false,
      };
    },
    computed: {
      favoriteFriend() {
        if (this.isFavorite) {
          return '(Favorite)';
        }
        return '';
      },
      favoriteLabel() {
        if (this.isFavorite) {
          return 'Unfavorite';
        }
        return 'Favorite';
      },
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.$emit('toggle-friend-fave', this.id);
      },
      deleteFriend() {
        this.$emit('delete-friend', this.id);
      },
    },
  };
</script>
