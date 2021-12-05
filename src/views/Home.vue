<template>
  <v-container style="overflow: hidden" class="container-featured">

    <!--cards-->
    <v-carousel app>
      <v-carousel-item
          v-for="(cr_items, i) in cr_items"
          :key="i"
          :src="cr_items.image"
          reverse-transition="fade-transition"
          transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <div class="cards">
      <v-card
          class="mx-auto"
          width="400"
          app
          v-for="card of $store.state.series" :key="card"
      >
        <v-img
            :src="card.logo"
            height="200px"
            
        ></v-img>

        <v-card-title>
          {{ card.nome }}
        </v-card-title>

        <v-card-subtitle>
          {{ card.timebox }}
        </v-card-subtitle>

        <v-card-actions>

          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="cards--description">
              {{ card.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    cr_items: [
      {
        image: 'https://www.proibidoler.com/wp-content/uploads/2018/03/as-ideologias-politicas-dos-cavaleiros-do-zodiaco.jpg',
      },
      {
        image: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/09/legiao_xCZ9fQUltYzk.jpg.jpeg',
      },
      {
        image: 'https://s.aficionados.com.br/imagens/cavaleiros-de-ouro-mais-poderosos_f.jpg',
      },
      {
        image: 'https://t8j5n5j3.rocketcdn.me/wp-content/uploads/2015/05/detaque.jpg',
      },
    ]
  }),
};
</script>

<style lang="scss">
.container-featured{
  display: block !important;
}

.cards {
  display: flex;
  padding-top: 1rem;
  width: auto;

  &--description {
    white-space: pre-line
  }
}
</style>