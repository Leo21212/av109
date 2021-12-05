<template>
  <v-container class="container-locale">
    <template>
      <v-card
          class="mx-auto"
          max-width="400"
          v-for="(world, index) in $store.state.world" :key="index"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            :src="world.img"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ world.nome }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ world.local }}</div>
        </v-card-text>

      </v-card>
    </template>
  </v-container>
</template>

<style>
.container-locale {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}
</style>