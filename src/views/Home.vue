<template>
  <div class="home-container">
    <div class="top_image">
      <img src="../assets/S__15261699.jpg" alt="main_image" />
      <!-- <div class="mainvisual_content"> -->
      <h2>知識のラビリンスへようこそ</h2>
      <p>
        100万以上の記事を持つWikipedia。そこから無作為に抽出されたタイトルを関連ワードとヒントをもとに導き出そう！人間はこの迷宮を突破できるか？
      </p>
      <!-- </div> -->
      <div class="my-2">
        <v-btn x-large color="success" dark to="/start" width="300px"
          >迷宮に挑む!</v-btn
        >
      </div>
    </div>
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
//なんか自然に変化してしまうので調整
.home-container {
  margin-top: -60px;
}

// .mainvisual_content {
//   border-left: solid 1px white;
//   // display: inline-block;
//   // width: 100%;
//   // height: 100%;
//   // position: absolute;
//   // padding-left: 4.68vw;
// }

// @media only screen and (max-width: 920px) {
//   .mainvisual_content {
//     position: absolute;
//     bottom: 100px;
//     left: 0;
//   }
// }

.top_image {
  position: relative;
  h2 {
    width: 600px;
    position: absolute; /*絶対配置*/
    color: white; /*文字は白に*/
    font-weight: bold; /*太字に*/
    font-style: italic;
    font-size: 40px;
    font-family: Quicksand, sans-serif; /*Google Font*/
    top: 47%;
    left: 30%;
    // -ms-transform: translate(-50%, -50%);
    // -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    line-height: 109px;
    letter-spacing: 0.05em;
    margin: 0;
    padding: 0;
    border-left: solid 1px white;
  }
  p {
    position: absolute;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0.07em;
    top: 57%;
    left: 28%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 50px;
  }
  .my-2 {
    position: absolute;
    top: 60%;
    left: 60%;
    font-weight: bold;
  }
  img {
    width: 100%;
  }
  @media only screen and (max-width: 920px) {
    .top_image {
      position: absolute;
      bottom: 100px;
      left: 0;
    }
  }
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
