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
</style>
