<template>
  <div>
    <h2 class="lead">Regístrate y accede a contenido exclusivo</h2>
    <div class="card-body bg-white">
      <form action @submit.prevent="signup()">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" v-model="name">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" v-model.trim="email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <p class="text-danger my-3" v-if="errorMessage.length">{{ errorMessage }}</p>
        <div class="form-group">
          <submit-button :loading="loading">
            <template>Registrarme</template>
          </submit-button>
        </div>
      </form>
      <div>
        <p
          class="text-muted"
        >Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
      </div>
    </div>
  </div>
</template>

<script>
const firebase = require("../../firebaseConfig.js");

import SubmitButton from "./SubmitButton.vue";

export default {
  name: "register",
  components: {
    SubmitButton
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    signup() {
      this.loading = true;
      firebase.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          console.log(data.user);
          this.$store.commit("setCurrentUser", data.user);

          // create user info
          firebase.usersCollection
            .doc(data.user.uid)
            .set({
              name: this.name,
              image: "https://api.adorable.io/avatars/285/abott@adorable.png"
            })
            .then(() => {
              this.$store.dispatch("fetchUserProfile");
              this.loading = false;
              this.$router.push("/dashboard");
            })
            .catch(error => {
              this.loading = false;
            });
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
