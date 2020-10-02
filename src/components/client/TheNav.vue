<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="shadow fixed-top">
      <b-container>
        <b-navbar-brand :to="{path: '/'}">Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item :to="{ path: '/' }">Home</b-nav-item>
              <b-nav-item :to="{ path: '/about' }">About</b-nav-item>
              <b-nav-item :to="{ path: '/login' }" v-if="!isLoggedIn">Login</b-nav-item>
              <b-nav-item-dropdown right v-else>
                <template v-slot:button-content>
                  <em>{{user.email}}</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#" @click.prevent="logout()">Logout</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TheHeader",
  data() {
    return {};
  },
  async created() {
    if (this.isLoggedIn) {
      await this.fetchProfile();
    }
  },
  methods: {
    ...mapActions({ fetchProfile: "Auth/fetchProfile", logoutAction: "Auth/logout" }),
    async logout() {
      await this.logoutAction();
      this.$router.push({ path: "/login" });
    }
  },
  computed: {
    ...mapGetters({
      user: "Auth/getProfile",
      token: "Auth/getToken",
      isLoggedIn: "Auth/isLoggedIn"
    }),
    routes() {
      return this.$router.options.routes.map(item => {
        return { name: item.name, path: item.path };
      });
    }
  }
};
</script>