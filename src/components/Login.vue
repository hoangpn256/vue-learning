<template>
  <div class="container">
    <div class="wrap-login">
      <div class="title bg-danger rounded d-flex align-items-center justify-content-center">
        <h1 class="text-white">SIGN IN</h1>
      </div>
      <div class="form bg-gray">
        <b-row>
          <b-col cols="8" class="mx-auto mt-4">
            <form>
              <b-row class="my-4">
                <b-col
                  cols="2"
                  class="d-flex align-items-center justify-content-center text-secondary"
                >
                  <b-icon icon="person-fill" aria-hidden="true" scale="2"></b-icon>
                </b-col>
                <b-col cols="10">
                  <b-form-input placeholder="Your account" v-model="userName"></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-2">
                <b-col
                  cols="2"
                  class="d-flex align-items-center justify-content-center text-secondary"
                >
                <b-icon icon="key" aria-hidden="true" scale="2"></b-icon>
                </b-col>
                <b-col cols="10" class="position-relative">
                  <b-form-input :type="isShowPassword ? 'text' : 'password'" placeholder="Your password" v-model="password"></b-form-input>
                  <b-icon :icon="isShowPassword ? 'eye-fill' : 'eye-slash-fill'" scale="2" class="position-absolute text-secondary icon" @click="isShowPassword = !isShowPassword"></b-icon>
                </b-col>
              </b-row>
              <b-row class="d-flex align-items-center justify-content-center mt-5">
                <b-button class="rounded-10 btn-info btn-150px" size="lg">Login</b-button>
              </b-row>
            </form>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      isShowPassword: false
    };
  },
  methods: {
    formatter(string) {
      return string.toLowerCase();
    }
  }
};
</script>
<style scoped>
body {
  background-color: gray
}
.wrap-login .title {
  min-height: 400px;
  background-image: url("https://source.unsplash.com/OWq8w3BYMFY/1920x600");
}
.wrap-login .form {
  min-height: 500px;
}
.icon{
  right: 25px;
  top: 10px;
  z-index: 2;
}
.rounded-10{
  border-radius: 5rem;
}
.btn-150px{
  min-width: 150px;
}
</style>