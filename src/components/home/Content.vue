<template>
  <v-row> 
    <div
      class="content"
      v-if="isFilm"
    >
      <v-expansion-panels
        popout
        light
        multiple
      >
        <v-expansion-panel
          v-for="(item,i) in contents"
          :key="i"
        >
          <v-expansion-panel-header  color="brown">
            <div class="content-header">{{item.title}}</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

          <v-parallax src="../../assets/film-bg.jpg">
            <div class="content-items">
              <label>Episode:</label> {{item.episode_id}}
            </div>
            <div class="content-items">
              <label>Year Released:</label> {{formatDate(item.release_date)}}
            </div>
            <div class="content-items">
              <label>Director:</label> {{item.director}}
            </div>
            <div class="content-items">
              <label>Producer:</label> {{item.producer}}
            </div>

            <div class="content-items">
              <label>Opening Crawl:</label> <span v-html="item.opening_crawl"></span>
            </div>
          </v-parallax>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div 
      class="content" 
      v-else
    >
      <v-expansion-panels
        multiple
      >
        <v-expansion-panel
          v-for="(item,i) in contents"
          :key="i"
        >
          <v-expansion-panel-header color="brown">
            <div class="content-header">{{item.name}}</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content transition="fab-transition">
            <v-parallax src="../../assets/background.png">
              <div class="content-items">
                <label>Model:</label> {{item.model}}
              </div>
              <div class="content-items">
                <label>Manufacturer:</label> {{item.manufacturer}}
              </div>
              <div class="content-items">
                <label>Max Atmosphering Speed:</label> {{item.max_atmosphering_speed}}
              </div>
              <div class="content-items">
                <label>Length:</label> {{item.length}}
              </div>
              <div class="content-items">
                <label>Crew:</label> {{item.crew}}
              </div>
              <div class="content-items">
                <label>Passengers:</label> {{item.passengers}}
              </div>
              <div class="content-items">
                <label>Cargo Capacity:</label> {{item.cargo_capacity}}
              </div>
              <div class="content-items">
                <label>Consumables:</label> {{item.consumables}}
              </div>
              <div class="content-items">
                <label>Hyperdrive Rating:</label> {{item.hyperdrive_rating}}
              </div>
              <div class="content-items">
                <label>MGLT:</label> {{item.MGLT}}
              </div>
              <div class="content-items">
                <label>Class:</label> {{item.starship_class}}
              </div>
            </v-parallax>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-row>
</template>

<script>
  export default {
    name: 'Content',
    props: {
      isFilm: {
        default: true
      },
      items: {
        default: []
      }
    },
    computed: {
      contents() {
        return this.items.map((item, index) => {
          item.id = index
          return item
        })
      }
    },
    methods: {
      formatDate(date) {
        return (new Date(date)).getFullYear('en-US')
      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    width: 100%;
    margin: 50px;
    .v-expansion-panel {
      margin: 5px;
    }
    .v-expansion-panel-content .v-expansion-panel-content__wrap {
      padding: 0px !important;
    }
    .content-header {
      font-family: "Star Jedi";
      font-size: 25px;
      font-weight: 500;
      color: white;
    }
    .content-items {
      label {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
</style>
