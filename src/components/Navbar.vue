<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">Vuegram</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <span class="lead">{{ userProfile.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
const firebase = require("../firebaseConfig.js");
import { mapState } from "vuex";

export default {
  name: "navbar",
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

<style lang="scss">
.userImage {
  max-width: 45px;
}
</style>