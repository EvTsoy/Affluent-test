<template>
  <vee-form @submit="submitForm" :validation-schema="schema" :initial-values="initialValues">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <vee-field name="title" :bails="false" v-slot="{ field, errors }">
        <input type="text" class="form-control" id="title" placeholder="Title" v-bind="field" />
        <small class="text-danger" v-for="error in errors" :key="error">{{ error }}</small>
      </vee-field>
    </div>

    <div class="mb-3">
      <label for="body" class="form-label">Body</label>
      <vee-field name="body" :bails="false" v-slot="{ field, errors }">
        <textarea class="form-control" id="body" rows="3" v-bind="field"></textarea>
        <small class="text-danger" v-for="error in errors" :key="error">{{ error }}</small>
      </vee-field>
    </div>
    <button class="btn btn-primary">Create</button>
  </vee-form>
</template>

<script>
export default {
  props: {
    submitForm: {
      type: Function,
      required: true,
    },

    initialValues: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  setup() {
    const schema = {
      title: 'required|min:5',
      body: 'required|min:10',
    };

    return { schema };
  },
};
</script>
