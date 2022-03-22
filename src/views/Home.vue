<template>
  <v-row class="main-container">
    <v-col>
      <AppBar />
      <router-view />
    </v-col>
  </v-row>
</template>

<script>
  import AppBar from '@/components/home/AppBar.vue'
  export default {
    name: 'Home',

    components: {
      AppBar
    },
  }
</script>
<style scoped>
.main-container {
  height:100vh;
}
</style>
