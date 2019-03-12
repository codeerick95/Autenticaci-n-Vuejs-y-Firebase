<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-around">
      <div class="col-md-6">
        <img alt="Vue logo" src="../../assets/welcome.png" class="img-fluid d-none d-md-block">
      </div>
      <div class="col-md-4">
        <!-- Main card -->
        <div class="card p-3 text-center">
          <h1>Vuegram</h1>
          <register v-if="isRegister"></register>
          <login v-else-if="isLogin" @resetPasswordEvent="toggleForm('restorePassword')"></login>
          <restore-password
            v-else-if="isRestorePassword"
            @cancelResetPasswordEvent="toggleForm('login')"
          ></restore-password>
        </div>
        <!-- End main card -->
        <!-- bottom card -->
        <div class="card text-center mt-3" v-if="isRegister || isLogin">
          <div class="card-body p-1">
            <button
              class="btn btn-link text-primary"
              v-if="isRegister"
              @click="toggleForm('login')"
            >Tengo una cuenta</button>
            <button
              class="btn btn-link text-primary"
              v-else-if="isLogin"
              @click="toggleForm('register')"
            >Quiero registrarme</button>
          </div>
        </div>
        <!-- End bottom card -->
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";
import RestorePassword from "./RestorePassword";

export default {
  name: "auth",
  components: {
    Login,
    Register,
    RestorePassword
  },
  data() {
    return {
      form: "register"
    };
  },
  computed: {
    isRegister() {
      return this.form === "register";
    },
    isLogin() {
      return this.form === "login";
    },
    isRestorePassword() {
      return this.form === "restorePassword";
    }
  },
  methods: {
    toggleForm(typeForm) {
      this.form = typeForm;
    }
  }
};
</script>

<style>
</style>
