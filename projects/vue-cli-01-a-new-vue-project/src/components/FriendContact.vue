<template>
  <li>
    <h2>{{ name }} {{ favorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">
      {{ detailVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
      <button @click="toggleFavorite">
        {{ !favorite ? 'Make' : 'Remove' }} Favorite
      </button>
    </ul>
  </li>
</template>

<script>
  export default {
    // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    props: {
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
        required: false,
        default: false,
      },
    },
    data() {
      return {
        detailVisible: false,
        favorite: this.isFavorite,
      };
    },
    methods: {
      toggleDetails() {
        this.detailVisible = !this.detailVisible;
      },
      toggleFavorite() {
        this.favorite = !this.favorite;
      },
    },
  };
</script>
