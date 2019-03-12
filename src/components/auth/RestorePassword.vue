<template>
  <div>
    <p class="lead">Introduce el correo electrónico con el que te registraste</p>
    <form @submit.prevent="restorePassword()">
      <div class="form-group">
        <input type="email" placeholder="Email" class="form-control" v-model="email">
      </div>
      <p class="text-danger" v-if="message.length">{{ message }}</p>
      <submit-button :loading="loading">
        <template>Recuperar cuenta</template>
      </submit-button>
    </form>
    <div class="text-center">
      <a @click="cancelResetPassword()" class="btn btn-link text-primary">Regresar</a>
    </div>
  </div>
</template>

<script>
const firebase = require("../../firebaseConfig.js");

import SubmitButton from "./SubmitButton.vue";

export default {
  name: "restore-password",
  components: {
    SubmitButton
  },
  data() {
    return {
      email: "",
      message: ""
    };
  },
  methods: {
    cancelResetPassword() {
      this.$emit("cancelResetPasswordEvent");
    },
    restorePassword() {
      firebase.auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.email = "";
          this.message =
            "Se ha enviado un mensaje al correo indicado, si no lo encuentras revisa tu bandeja de spam.";
        })
        .catch(error => {
          this.message = error.message;
        });
    }
  }
};
</script>

<style scoped>
</style>