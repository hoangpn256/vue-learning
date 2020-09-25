<template>
  <div id="app">
    <!-- The Nav and Header Image -->
    <TheNav></TheNav>
    <TheHeader></TheHeader>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <h2 class="font-weight-light">Page Content</h2>
      </div>
    </section>
    <!-- The Footer -->
    <TheFooter></TheFooter>
  </div>
</template>
<script>
import TheNav from "../components/client/TheNav";
import TheHeader from "../components/client/TheHeader";
import TheFooter from "../components/client/TheFooter";

export default {
  name: "PublicLayout",
  components: {
    TheNav,
    TheHeader,
    TheFooter
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
