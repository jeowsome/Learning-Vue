<template>
  <base-dialog v-if="invalidInput" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately, atleast one input is invalid</p>
      <p>
        Please check all input and make sure to input atleast 1 character for
        each input field
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          row="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResources'],
  data() {
    return {
      invalidInput: false,
    };
  },
  methods: {
    submitData() {
      const { titleInput, descInput, linkInput } = this.$refs;

      if (
        !titleInput.value.trim() ||
        !descInput.value.trim() ||
        !linkInput.value.trim()
      ) {
        this.invalidInput = true;
        return;
      }

      this.addResources(titleInput.value, descInput.value, linkInput.value);
    },
    confirmError() {
      this.invalidInput = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
