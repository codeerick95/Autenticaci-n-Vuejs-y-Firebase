<template>
  <button class="btn btn-block btn-success" type="submit" :disabled="loading">
    <span v-if="!loading">
      <slot></slot>
      <!-- Registrarme, Ingresar, etc... -->
    </span>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-else></span>
  </button>
</template>

<script>
export default {
  name: "submit-button",
  props: ["loading"]
};
</script>

<style scoped>
</style>