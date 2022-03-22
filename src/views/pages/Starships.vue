<template>
  <div>
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Loading films
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <Content
      :items="starships"
      :is-film="false"
    />
  </div>
</template>

<script>

import { mapGetters } from "vuex"; 
import { GET_STARSHIPS} from "@/store/home";
import Content  from '@/components/home/Content.vue'
export default ({
    name: 'Starships',
   components: {
        Content
    },
    data: () => ({
        dialog: true
    }),
    mounted() {
        this.dialog = true;
        this.$store.dispatch(GET_STARSHIPS).then(() => {
            this.dialog = false
        })
    },
    computed:  {
        ...mapGetters(['starships']),
    }
})
</script>
