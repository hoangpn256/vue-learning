<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home page</router-link>
      <button
        class="navbar-toggler"
        type="button"
        @click="isShow = !isShow"
        data-toggle="collapse"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class=" isShow ? 'show': ''">
        <ul class="navbar-nav ml-auto">
          <li>
            <router-link to="/" class="nav-link text-capitalize">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link text-capitalize">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes.map(item => {
        return { name: item.name, path: item.path };
      });
    }
  }
};
</script>