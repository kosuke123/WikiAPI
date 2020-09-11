<template>
  <v-app>
    <div id="app" class="start">
      <h2>ボタンをクリックして問題を始めてね！</h2>
      <div>
        <div>
          <v-btn
            v-on:click="getContents()"
            color="blue-grey"
            class="ma-2 white--text"
            :loading="loading3"
            :disabled="loading3"
            @click="loader = 'loading3'"
          >
            Let's start!
            <!-- <v-icon right dark>mdi-cloud-upload</v-icon> -->
          </v-btn>
        </div>
        <div v-show="words_tips">
          <h2>関連ワードは・・・</h2>
          <div class="back">
            <h3
              v-for="(word, index) in selectWords"
              v-bind:key="`first-${index}`"
            >
              {{ word }}
            </h3>
          </div>
          <h2>ヒントは・・・</h2>
          <div class="back">
            <h3
              v-for="(category, index) in selectCategories"
              v-bind:key="`second-${index}`"
            >
              {{ category }}
            </h3>
          </div>
        </div>
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
      <h2 id="correct"></h2>
      <!-- ここに「正解」が入る -->
      <h2 id="incorrect"></h2>
      <!-- ここに「不正解」が入る -->
      <!-- ↑追加 -->
      <div>
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
          <a id="answer" v-show="wiki_title" target="_blank">A.{{ title }}</a>
          <!-- target="_blank"で新しいタブで開く -->
        </h2>
        <!-- v-ifがhtmlから削除されるのに対してv-showはcssスタイルのdisplay: noneで見えなくしているだけ -->
      </div>
    </div>
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
      words_tips: false, //ワードとヒント用追加
      answerText: "",
      categories: [],
      selectCategories: [],
      answerURL: "",
      loader: null, //追加
      loading3: false //追加
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
      this.axios({
        url:
          "https://ja.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&rvprop=content&indexpageids",
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
        this.randomCategoriesSelect(); //
        var target = document.getElementById("answer"); //
        target.href = this.answerURL; //
      });
      this.words_tips = true; //ワードとヒントを表示させる
      this.answer_button = true; //追加
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
        correct.innerHTML = "まじすごい正解！";
        this.wiki_title = true; //「答えを見る」の中身も表示
      } else {
        console.log("残念！");
        var incorrect = document.getElementById("incorrect");
        incorrect.innerHTML = "残念不正解！";
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
    randomCategoriesSelect: function() {
      this.selectCategories = this.categories
        .slice()
        .sort(function() {
          return Math.random() - 0.5;
        })
        .slice(0, 3);
      console.log(this.selectCategories);
    }
    //ここまで
  }
};
</script>

<style lang="scss">
button {
  background-color: #333;
  color: #fff;
}

button:hover {
  background-color: #59b1eb;
}

.start {
  padding-top: 100px;
  padding-bottom: 30px; /*ヘッダーとフッターの高さの分調節-->*/
}

.back {
  border-radius: 80px 80px;
  background-color: greenyellow;
  display: inline-block;
}

#correct {
  color: greenyellow;
}

#incorrect {
  color: red;
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
}
//ここまで
</style>
