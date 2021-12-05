<template>
  <v-app id="inspire">
    <div>
      <v-system-bar window dark app class="system-bar">
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
    </div>

    <v-card class="overflow-hidden">
      <v-app-bar
        color="#6A76AB"
        dark
        shrink-on-scroll
        src="https://cdn.ome.lt/m2r5oP76F0eBaYIWJLFvZsA_FVA=/770x0/smart/uploads/conteudo/fotos/02-ougondensetsukanketsuhen.jpg"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
        class="app-bar"
        absolute
        app
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title> Saint Seiya </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension> </template>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto">
        <v-container>
          <v-main>
            <router-view />
          </v-main>
        </v-container>
      </v-sheet>
    </v-card>

    <div class="navigator-container">
      <v-card class="navigator-bar">
        <v-navigation-drawer permanent expand-on-hover>
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="https://img.utdstc.com/icon/e27/0a3/e270a3dd7c2429575ebd4f5c839dc5e96f575c4f5d2a1c5cfea890718a06ccee:200"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Leonardo
                </v-list-item-title>
                <v-list-item-subtitle>Leonardo@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item href="/">
              <v-list-item-icon>
                <v-icon>mdi-home-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item href="/knights">
              <v-list-item-icon>
                <v-icon>mdi-chess-knight</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cavaleiros de Ouro</v-list-item-title>
            </v-list-item>
            <v-list-item href="/world">
              <v-list-item-icon>
                <v-icon>mdi-earth</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Locais</v-list-item-title>
            </v-list-item>
            <v-list-item href="/random">
              <v-list-item-icon>
                <v-icon>mdi-account-question-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Todos os Cavaleiros</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

    <v-footer dark padless app>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Redes Sociais</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Leonardo</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-bottom-navigation app>
      <router-link to="/">
        <v-btn
          class="footer-btn"
          :class="{
            selected: this.$route.fullPath.split('/')[1],
          }"
        >
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/knights">
        <v-btn
          class="footer-btn"
          :class="{
            selected: this.$route.fullPath.split('/')[1] === 'knights',
          }"
        >
          <v-icon>mdi-chess-knight</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/world">
        <v-btn
          class="footer-btn"
          :class="{
            selected: this.$route.fullPath.split('/')[1] === 'world',
          }"
        >
          <v-icon>mdi-earth</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/random">
        <v-btn
          class="footer-btn"
          :class="{
            selected: this.$route.fullPath.split('/')[1] === 'random',
          }"
        >
          <v-icon>mdi-account-question-outline</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style lang="scss">
.v-btn__content {
  i {
    margin: 0 !important;
  }
}
header {
  height: auto !important;
  position: fixed !important;
}
.v-toolbar {
  &__content,
  &__image {
    height: 3rem !important;
  }
}
.v-app-bar-title__content {
  width: auto !important;
}
v-footer,
.header,
.v-bottom-navigation {
  z-index: 999;
}
template {
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
}
v-app-bar {
  max-height: 1;
}
.selected {
  border-radius: 0 0 3rem 3rem !important;
}
router-link,
a {
  text-decoration: none;
}
.footer-btn {
  height: 3.5rem !important;
}
v-img {
  border: none;
}
.navigator-bar {
  position: fixed;
  left: 0;
  z-index: 99;
  height: 42.4rem;
  box-shadow: none !important;
}
.navigator-container {
  position: fixed;
  z-index: 99;
  top: 8rem;
}
</style>