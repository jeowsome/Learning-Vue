<template>
  <section>
    <form @submit.prevent="addUser">
      <div>
        <label>Name</label>
        <input type="text" v-model="username" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" v-model="age" />
      </div>
      <button>Add User</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        age: '',
      };
    },
    methods: {
      addUser() {
        this.$emit('add-user', this.username, this.age);
      },
    },
  };
</script>
