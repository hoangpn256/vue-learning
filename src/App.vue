<template>
  <div id="app">
    <!-- The Nav and Header Image -->
    <TheNav></TheNav>
    <TheHeader></TheHeader>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <h2 class="font-weight-light">Page Content</h2>
        <ImageLists></ImageLists>
        <TheLists></TheLists>
      </div>
    </section>
    <!-- The Footer -->
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheNav from "./components/TheNav";
import TheHeader from "./components/TheHeader";
import TheLists from "./view/tasks/index";
import ImageLists from "./view/images/index";
import TheFooter from "./components/TheFooter";
export default {
  name: "App",
  components: {
    TheNav,
    TheHeader,
    TheLists,
    ImageLists,
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
.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url("https://source.unsplash.com/1920x1080");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
