<template>
  <v-app>
    <section class="start-image">
      <v-container fluid fill-height class="start-image__content">
        <div id="app" class="start">
          <h2>さあ挑戦してみよう！</h2>
          <div>
            <v-btn
              v-on:click="getContents()"
              color="primary"
              class="ma-2 white--text"
              :loading="loading3"
              :disabled="loading3"
              @click="loader = 'loading3'"
            >
              Let's start!
              <!-- <v-icon right dark>mdi-cloud-upload</v-icon> -->
            </v-btn>
          </div>

          <div v-show="words_hints" class="question">
            <h2>関連ワードは・・・</h2>
            <div class="back all">
              <h3
                v-for="(word, index) in selectWords"
                v-bind:key="`first-${index}`"
              >
                {{ word }}
              </h3>
            </div>
            <v-row justify="center" align-content="center">
              <div class="px-4 py-4">
                <div>
                  <v-btn @click="getAnswerLength" rounded color="primary" dark
                    >ヒント①</v-btn
                  >
                </div>
                <div class="back">
                  <h3 v-show="Length">文字数は、{{ answerLength }}文字</h3>
                </div>
              </div>
              <div class="px-4 py-4">
                <div>
                  <v-btn @click="getCategory" rounded color="primary" dark
                    >ヒント②</v-btn
                  >
                </div>
                <div class="back">
                  <h3 v-show="Category">
                    カテゴリーは、
                    <div
                      v-for="(category, index) in selectCategories"
                      v-bind:key="`second-${index}`"
                    >
                      {{ category }}
                    </div>
                  </h3>
                </div>
              </div>
              <dir class="px-4 py-4">
                <div>
                  <v-btn @click="getInitial" rounded color="primary" dark
                    >ヒント③</v-btn
                  >
                </div>
                <div class="back">
                  <h3 v-show="Initial">頭文字は、{{ initial }}</h3>
                </div>
              </dir>
            </v-row>
          </div>
          <div v-if="answer_button">
            <v-row justify="center" align-content="center">
              <v-col cols="12" sm="6">
                <v-text-field v-model="answerText" solo label="Answer" required>
                  <template v-slot:append-outer>
                    <v-btn color="primary" dark v-on:click="checkAnswer()"
                      >回答
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </div>
          <!-- ↑追加 -->
          <h1 id="correct"></h1>
          <!-- ここに「正解」が入る -->
          <h1 id="incorrect"></h1>
          <!-- ここに「不正解」が入る -->
          <!-- ↑追加 -->
          <div class="answer_area" v-show="answer_Area">
            <!--↓vuetifyのpaddingmarginの書き方-->
            <v-btn
              class="mt-6"
              rounded
              color="primary"
              dark
              v-if="answer_button"
              v-on:click="showAnswer()"
            >
              答えを見る
            </v-btn>
            <h2 class="answer_size">
              <a id="answer" v-show="wiki_title" target="_blank"
                >A. {{ title }}</a
              >
              <!-- target="_blank"で新しいタブで開く -->
            </h2>
            <!-- v-ifがhtmlから削除されるのに対してv-showはcssスタイルのdisplay: noneで見えなくしているだけ -->
          </div>
        </div>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      content: "",
      words: [],
      title: "",
      wiki_title: false, //追加
      answer_button: false, //追加
      words_hints: false, //ワード追加
      tips: false, //ヒント追加
      Length: false, //文字数追加
      Category: false, //カテゴリーヒント追加
      Initial: false, //イニシャルヒント追加
      answerText: "",
      categories: [],
      selectCategories: [],
      answerURL: "",
      loader: null, //追加
      loading3: false, //追加
      initial: "", //頭文字String型
      answerLength: 0, //文字数int型
      answerArea: false
    };
  },
  //追加ここから
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  //ここまで
  //参考url https://vuetifyjs.com/ja/components/buttons/
  computed: {},
  methods: {
    getContents: function() {
      let url =
        "https://ja.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&rvprop=content&indexpageids";

      // origin を本番環境と開発環境で切り替える
      url += "&origin=*";
      // const origin =
      //   process.env.NODE_ENV === "production"
      //     ? "https://mlbteam-dc1f0.web.app/"
      //     : "*";
      // url += "&origin=" + origin;

      // fetch(url);

      this.axios({
        url,
        method: "GET"
      }).then(res => {
        const pageId = res.data.query.pageids[0];
        this.content = res.data.query.pages[pageId].revisions[0]["*"];
        this.title = res.data.query.pages[pageId].title;
        this.content = res.data.query.pages[pageId].revisions[0]["*"];
        this.answerURL = "https://ja.wikipedia.org/wiki/" + this.title; //
        console.log(this.title);
        console.log(this.content);
        this.getWords(this.content);
        this.randomWordsSelect(); //
        this.getHint(); //ヒントを一つのメソッドにまとめました
        var target = document.getElementById("answer"); //
        target.href = this.answerURL; //
      });

      this.words_hints = true; //ワードとヒントを表示させる
      this.answer_button = true; //追加
      this.answer_Area = true;
    },
    getWords: function(str) {
      let array = str.split("");
      let isLink = false;
      let word = "";
      this.words = [];
      for (let i = 1; i < array.length - 1; i++) {
        if (array[i] == "]") {
          if (array[i + 1] == "]") {
            isLink = false;
            if (word.match(/Category:/)) {
              word = word.split("Category:").join("");
              this.categories.push(word);
            } else {
              this.words.push(word);
            }
            word = "";
          }
        }
        if (isLink) {
          word = word.concat(array[i]);
        }
        if (array[i] == "[") {
          if (array[i - 1] == "[") {
            isLink = true;
          }
        }
      }
      console.log(this.words);
      console.log(this.categories);
    },
    //追加
    showAnswer: function() {
      this.wiki_title = true;
    },
    checkAnswer: function() {
      if (this.answerText == this.title) {
        console.log("正解！");
        var correct = document.getElementById("correct");
        correct.innerHTML = "本当にすごい正解！";
        this.wiki_title = true; //「答えを見る」の中身も表示
      } else {
        console.log("残念！");
        var incorrect = document.getElementById("incorrect");
        incorrect.innerHTML = "残念、不正解！";
      }
      this.answerText = "";
      // this.wiki_title = true; //「答えを見る」の中身も表示
    }, //追加
    randomWordsSelect: function() {
      this.selectWords = this.words
        .slice()
        .sort(function() {
          return Math.random() - 0.5;
        })
        .slice(0, 9);
      console.log(this.selectWords);
    },
    getHint: function() {
      this.selectCategories = this.categories
        .slice()
        .sort(function() {
          return Math.random() - 0.5;
        })
        .slice(0, 3);
      console.log(this.selectCategories);

      this.initial = this.title.substr(0, 1);
      this.answerLength = this.title.trim().length;
      console.log(this.initial);
      console.log(this.answerLength);
    },
    getAnswerLength: function() {
      this.Length = true;
    },
    getCategory: function() {
      this.Category = true;
    },
    getInitial: function() {
      this.Initial = true;
    }
    //ここまで
  }
};
</script>

<style lang="scss">
.start-image__content {
  min-height: 100vh;
  background: url("../assets/887752_l.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  width: 100%;
  height: 50vh;

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

.question {
  display: inline-block;
  height: 100%;
  background-color: #f1f1f1;
  border: solid 2px black;
  margin-top: 20px;
  padding: 20px;
}

button {
  background-color: #333;
  color: #fff;
}

button:hover {
  background-color: #59b1eb;
}

.start {
  display: inline-block;
  padding-top: 100px;
  padding-bottom: 30px; /*ヘッダーとフッターの高さの分調節-->*/
  width: 70%;
  padding: 20px;
  margin-bottom: 60px;
  border: solid 1px black;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
}

.back {
  border-radius: 80px 80px;
  background-color: #00ccff;
  display: inline-block;
  margin: 5px;
  .all {
    padding: 10px 10px;
  }
}

#correct {
  color: red;
}

#incorrect {
  color: blue;
}

//追加ここから
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.answer_size {
  padding-top: 20px;
  padding-bottom: 20px;
}

.answer_area {
  display: inline-block;
  border: solid 2px black;
  width: 100%;
  height: 100%;
}

//ここまで
</style>
