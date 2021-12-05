<template>
  <v-container class="container-schedule">
    <template>
      <div class="container-schedules">
        <v-card
            class="mx-auto"
            min-width="400"
            v-for="(cavaleiro, index)  of $store.state.cavaleiro" :key="index"
        >
          <v-card
              dark
              flat
          >
            <v-img
                v-bind:src="`https://diegochagas.com/saint-seiya-api/${cavaleiro.image}`"
                max-height= '560'
                max-width= '400'
            >
            </v-img>
          </v-card>
          <v-card-text class="py-0">
            <v-card-title style="max-width: 17rem">
              {{cavaleiro.name}}
            </v-card-title>

            <v-card-subtitle>
              {{cavaleiro.name}}
            </v-card-subtitle>

          </v-card-text>
        </v-card>
      </div>
    </template>
  </v-container>
</template>

<style>
.container-schedules {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

.container-schedule{
  display: block !important;
}

</style>
<script>
import store from "../store/index";
import moment from "moment";

export default {

  async created() {
    await store.dispatch("fetchCavaleiros");
  },

  data: () => ({
    baseImageUrl: 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
  }),

  methods: {},

  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    }
  }
}
</script>