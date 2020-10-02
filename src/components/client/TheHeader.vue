<template>
  <header class="masthead py-5">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          <h1 class="font-weight-light">Vertically Centered Masthead Content</h1>
          <p class="font-weight-bold">A great starter layout for a landing page</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>
<style scoped>
h1,
p {
  color: mintcream;
}
.masthead {
  height: 100vh;
  background-image: url("https://source.unsplash.com/1920x1080");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>