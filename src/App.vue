<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<style lang="scss">
// Main demo style scss
@import "assets/sass/style";
@font-face {
  font-family: "Star Jedi";
  src: local("Star Jedi"), 
  url('/assets/fonts/Starjedi.tff')
  format("truetype")
}
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
