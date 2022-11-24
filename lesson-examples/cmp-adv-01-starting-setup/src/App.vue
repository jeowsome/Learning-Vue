<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectedComponent === 'active-goals'" />
    <ManageGoals v-if="selectedComponent === 'manage-goals'" /> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue';
  // import BadgeList from './components/BadgeList.vue';
  // import UserInfo from './components/UserInfo.vue';
  // import CourseGoals from './components/CourseGoals.vue';
  import ManageGoals from './components/ManageGoals.vue';
  import ActiveGoals from './components/ActiveGoals.vue';

  export default {
    components: {
      ManageGoals,
      ActiveGoals,
      TheHeader,
    },
    data() {
      return {
        selectedComponent: 'active-goals',
        activeUser: {
          name: 'Maximilian Schwarzmüller',
          description: 'Site owner and admin',
          role: 'admin',
        },
      };
    },
    methods: {
      setSelectedComponent(cmp) {
        this.selectedComponent = cmp;
      },
    },
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
