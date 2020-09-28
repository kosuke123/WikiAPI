<template>
  <v-app>
    <div id="app">
      <AppHeader />
      <v-main>
        <router-view />
      </v-main>
      <AppFooter />
    </div>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
// .screen_adjustment {
//   padding-top: 50px;
//   padding-bottom: 30px; /*ヘッダーとフッターの高さの分調節-->*/
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
  color: #2c3e50;
  // padding-bottom: 30px; /*←footerの高さ*/
  // box-sizing: border-box; //この二つはfooterが被らないように調節したもの 参考リンク→https://techacademy.jp/magazine/19410
}

#nav {
  padding: 60px;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}

.main_name {
  color: rgba(87, 184, 35);
  font-family: "Londrina Solid", cursive;
  font-size: 50px;
  margin-left: 50px;
  text-decoration: none;
}

.footer {
  margin: auto;
}
</style>
