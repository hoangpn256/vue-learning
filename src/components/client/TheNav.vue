<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
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
          <li v-for="(item, index) in routes" :key="index">
            <router-link :to="item.path" class="nav-link text-capitalize">{{ item.name }}</router-link>
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