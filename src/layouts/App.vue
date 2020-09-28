<template>
  <div id="public-wrap">
    <!-- The Nav and Header Image -->
    <TheNav></TheNav>
    <!-- Page Content -->
    <TheHeader v-if="isIndex"></TheHeader>
    <section class="py-5 mt-3 container">
      <router-view />
    </section>
    <!-- The Footer -->
    <TheFooter></TheFooter>
  </div>
</template>
<script>
import TheNav from "@/components/client/TheNav";
import TheFooter from "@/components/client/TheFooter";
import TheHeader from "@/components/client/TheHeader";

export default {
  name: "PublicLayout",
  components: {
    TheNav,
    TheFooter,
    TheHeader
  },
  computed: {
    isIndex() {
      return this.$route.path == '/'
    }
  }
};
</script>
 