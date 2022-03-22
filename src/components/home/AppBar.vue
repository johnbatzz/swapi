<template>
  <!-- <v-card
    class="mx-auto overflow-hidden"
    height="400"
  > -->
  <div>
    <v-app-bar
      color="brown-1"
      tranparent
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true" />

      <v-toolbar-title>{{ selectedItem }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="route in routes"
            :key="route.label"
            @click="goTo(route)"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.label }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  <!-- </v-card> -->
  </div>
</template>

<script>
export default {
    name: 'AppBar',
    data:() => ({
      drawer: false,
      group: null,
      routes: [
        {
          label: 'Films',
          icon: 'mdi-movie-star',
          route: {
            name: 'films'
          }
        },
        {
          label: 'Starships',
          icon: 'mdi-rocket-launch',
          route: {
            name: 'starships'
          }
        }
      ],
      selectedItem: 'Films'
    }),
    methods: {
      goTo: function(route) {
        this.$router.push(route.route);
        this.selectedItem = route.label
      }
    }
}
</script>
