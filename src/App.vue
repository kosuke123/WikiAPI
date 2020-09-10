<template>
  <div id="app">
    <header class="header">
      <router-link to="/" class="main_name">
        WikiAPI
      </router-link>
      <div id="nav">
        <!-- <router-link to="/">Home</router-link> | -->
        <router-link to="/about">WikiAPIについて</router-link> |
        <router-link to="/start">クイズを始める</router-link>
      </div>
    </header>
    <router-view class="screen_adjustment" />
    <!-- ↑画面調節用に -->
    <footer class="footer"></footer>
  </div>
  <!-- <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  // components: {
  //   HelloWorld
  // },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
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

header {
  background-color: white;
  /* background-image: url(unnamed.jpg); */
  background-repeat: no-repeat;
  background-position: 35% 10%;
  height: 65px;
  width: 90%;
  font-weight: bold;
  display: flex;
  position: fixed;
  top: 15px;
  left: 60px;
  border: solid 0.6px black;
  border-radius: 45px 45px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  justify-content: space-between;
  align-items: center;
}

.main_name {
  color: rgba(87, 184, 35);
  font-family: "Londrina Solid", cursive;
  font-size: 50px;
  margin-left: 50px;
  text-decoration: none;
}

footer {
  color: white;
  height: 30px;
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
