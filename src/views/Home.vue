<template>
  <div class="home-container">
    <!-- <h1 style="color: white;">こんにちは</h1> -->

    <img src="../assets/S__15261699.jpg" alt="main_image" />
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld
//   }
// };
</script>

<style lang="scss">
.home-container img {
  width: 100%;
}
// .screen_adjustment {
//   padding-top: -50px;
//   padding-bottom: -30px;
// }
// .home-container {
//   width: 1340px;
//   height: 680px;

//   // linear-gradient使いたい
//   background: linear-gradient(
//       90deg,
//       rgba(128, 207, 113, 0.5),
//       rgba(167, 206, 159, 0.5)
//     ),
//     url("~@/assets/S__15261699.jpg");
//   /* 画像ファイルの指定 */
//   // background-image: url("~@/assets/S__15261699.jpg");
//   //url('~@/assets/image.svg')←この書き方で書かなければいけなかった

//   /* 画像を常に天地左右の中央に配置 */
//   background-position: center center;

//   /* 画像をタイル状に繰り返し表示しない */
//   background-repeat: no-repeat;

//   /* コンテンツの高さが画像の高さより大きい時、動かないように固定 */
//   background-attachment: fixed;

//   /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
//   background-size: cover;

//   /* 背景画像が読み込まれる前に表示される背景のカラー */
//   background-color: linear-gradient(
//     90deg,
//     rgba(164, 188, 248, 0.5),
//     rgba(5, 53, 212, 0.5)
//   );
// }

// @media only screen and (max-width: 767px) {
//   .home-container {
//     background-image: url("~@/assets/S__15261699.jpg");
//   }
// }
</style>
