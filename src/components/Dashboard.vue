<template>
  <div class="container text-center mt-5">
    <h1 class="lead">Autenticación con Firebase</h1>
    <div class="row justify-content-center">
      <div>
        <div class="card">
          <img :src="userProfile.image" class="card-img-top" :alt="userProfile.name">
          <div class="card-body">
            <h5 class="card-title">{{ userProfile.name }}</h5>
            <p class="card-text lead">{{ currentUser.email }}</p>
            <a href="#" class="btn btn-danger" @click.prevent="logout()">Cerrar sesión</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const firebase = require("../firebaseConfig.js");
import { mapState } from "vuex";

export default {
  name: "dashboard",
  computed: {
    ...mapState(["currentUser", "userProfile"])
  },
  methods: {
    logout() {
      firebase.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.card {
  width: 100%;
}
</style>
