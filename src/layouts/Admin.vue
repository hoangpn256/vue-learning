<template>
  <div class="admin-wrap">
    <TheNav></TheNav>
    <TheSideBar></TheSideBar>
    <h1>Admin Layout</h1>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>
<script>
import TheFooter from '../components/admin/TheFooter';
import TheNav from '../components/admin/TheNav';
import TheSideBar from '../components/admin/TheSideBar';
export default {
  name: "AdminLayout",
  components: {TheFooter, TheNav, TheSideBar}
};
</script>