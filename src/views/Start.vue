<template>
  <v-app>
    <div id="app" class="start">
      <h2>ボタンをクリックして問題を始めてね！</h2>
      <div>
        <v-btn
          v-on:click="getContents()"
          color="blue-grey"
          class="ma-2 white--text"
        >
          Let's start!
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
        <h3>ワードは、</h3>
        <h3 v-for="(word, index) in words" :key="index">
          {{ word }}
        </h3>
        <h3>ヒントは、</h3>
        <h3 v-for="(category, index) in categories" :key="index">
          {{ category }}
        </h3>
        <!-- <h3>ワードは、</h3>
      <h3>{{ "→" + this.words }}</h3>
      <h3>ヒントは、</h3>
      <h3>{{ "→" + this.categories }}</h3> -->
      </div>
      <div v-if="answer_button">
        <v-row justify="center" align-content="center">
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="answerText"
              solo
              :rules="nameRules"
              label="Answer"
              required
            >
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
        <v-btn
          rounded
          color="primary"
          dark
          v-if="answer_button"
          v-on:click="showAnswer()"
        >
          答えを見る
        </v-btn>
        <h2 v-if="wiki_title">{{ "正解は" + this.title }}</h2>
        <!-- <h3 v-if="wiki_title">{{ "解説" + this.content }}</h3> -->
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
      answerText: "",
      categories: []
    };
  },
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
        console.log(this.title);
        console.log(this.content);
        this.getWords(this.content);
      });
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
      } else {
        console.log("残念！");
        var incorrect = document.getElementById("incorrect");
        incorrect.innerHTML = "残念不正解！";
      }
      this.answerText = "";
      this.wiki_title = true; //「答えを見る」の中身も表示
    } //追加
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

#correct {
  color: red;
}

#incorrect {
  color: blue;
}
</style>
