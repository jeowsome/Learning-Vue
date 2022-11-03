<template>
  <div>
    <active-user-data
      v-for="user in users"
      :key="user"
      :name="user.name"
      :age="user.age"
    ></active-user-data>
    <user-data @add-user="addUser"></user-data>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [],
      };
    },
    methods: {
      addUser(name, age) {
        this.users.push({
          name: name,
          age: age,
        });
      },
    },
  };
</script>
