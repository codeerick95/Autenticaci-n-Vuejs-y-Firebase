<template>
  <div>
    <template v-if="currentUser">
      <navbar></navbar>
      <dashboard></dashboard>
    </template>
    <auth v-else></auth>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "../components/Navbar";
import Dashboard from "@/components/Dashboard.vue";
import Auth from "@/components/auth/Auth.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["currentUser", "userProfile"])
  },
  components: {
    Navbar,
    Dashboard,
    Auth
  }
};
</script>
