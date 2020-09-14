<template>
  <div class="about-container">
    <div class="about-image">
      <div class="about">
        <h2>
          これはWikipediaAPIを使ったクイズゲームを主とするWebアプリケーションです
        </h2>
      </div>
      <img src="../assets/Desktop - 1.png" alt="1" />
      <img src="../assets/Desktop - 2.png" alt="2" />
      <img src="../assets/Desktop - 3.png" alt="3" />
    </div>
  </div>
</template>

<style lang="scss">
.about-container {
  display: inline-block;
  min-height: 175vw;
  background-image: url("../assets/402079_l.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  width: 100%;
  // height: 200vh;

  /* ここから追加 */
  @include display_pc {
    height: 100vh;
  }
  /* ここまで追加 */

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    /* ここから追加 */
    @include display_pc {
      font-size: 40px;
    }
    /* ここまで追加 */
  }
}

.about {
  padding-top: 100px;
  padding-bottom: 30px; /*ヘッダーとフッターの高さの分調節-->*/
  h2 {
    color: white;
    background-color: #6fcf97;
    padding: 13px;
    border-radius: 10px;
  }
}

.about-image {
  width: 70%;
  margin: 10px auto;

  img {
    width: 90%;
    height: auto;
  }
}
</style>
