<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="saveGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="invalidInput">
        <button @click="closeError">X</button>
        <h2>Input is Invalid!</h2>
        <p>Please enter any value or atleast a few characters</p>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
  import ErrorAlert from './ErrorAlert.vue';

  export default {
    components: {
      ErrorAlert,
    },
    data() {
      return {
        invalidInput: false,
      };
    },
    methods: {
      saveGoal() {
        const enteredValue = this.$refs.goal.value;
        if (enteredValue === '') {
          this.invalidInput = true;
        }
      },
      closeError() {
        this.invalidInput = false;
      },
    },
  };
</script>
