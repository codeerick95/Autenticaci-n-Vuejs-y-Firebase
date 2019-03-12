<template>
  <div>
    <h2 class="h2 lead">Ingresa a tu cuenta y continúa divirtiéndote</h2>
    <div class="card-body">
      <form action @submit.prevent="login()">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" v-model.trim="email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <p class="text-danger my-3" v-if="errorMessage.length">{{ errorMessage }}</p>
        <div class="form-group">
          <submit-button :loading="loading">
            <template>Ingresar</template>
          </submit-button>
        </div>
      </form>
      <div>
        <button
          class="btn btn-link text-primary"
          @click="$emit('resetPasswordEvent')"
        >Olvidé mi contraseña</button>
      </div>
    </div>
  </div>
</template>

<script>
const firebase = require("../../firebaseConfig.js");

import SubmitButton from "./SubmitButton.vue";

export default {
  name: "login",
  components: {
    SubmitButton
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    login() {
      this.loading = true;
      firebase.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          this.$store.commit("setCurrentUser", response.user);
          this.$store.dispatch("fetchUserProfile");
          this.loading = false;
          this.$router.push("/dashboard");
        })
        .catch(error => {
          this.loading = false;
          this.errorMessage = error.message;
        });
    }
  }
};
</script>

<style>
</style>
