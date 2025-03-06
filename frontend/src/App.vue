<script>
import NavBar from "@/components/navegacion/navbar.vue";
import Footer from "@/components/navegacion/footer.vue";
import { RouterView } from "vue-router";

export default {
  components: { NavBar, Footer },
};


</script>

<template>
  <div class="app-container">
    <NavBar></NavBar>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}

main {
  flex: 1;
}
</style>
