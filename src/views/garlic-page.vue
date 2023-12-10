<script setup lang="ts">
import { ref } from "vue"

//自分のnodeにデータを送信
async function nodeConnect(p2pCode: string) {
  console.log(JSON.stringify({ p2pCode: p2pCode }))
  const response = await fetch("http://localhost:3000/renderGarlic", {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ p2pCode: p2pCode })
  })

  return await response.json()
}

//初期値(本番実装ではqueryから取得)
const isPrimary = ref([false])

const CategoryEmoji = ref("")
const CategoryName = ref("")

const CategoryThreads = ref([{ emoji: "", title: "", user: "", time: "" }])

const Categorys = ref([
  { emoji: "📢", name: "ニュース速報garlic", path: "garlic@node.2835" },
  { emoji: "🍷", name: "Garlic Center", path: "garlic@node.2835" },
  { emoji: "🎙️", name: "雑談", path: "garlic@node.2835" },
  { emoji: "🔨", name: "開発", path: "garlic@node.2835" },
  { emoji: "🗳️", name: "アイデア募集", path: "garlic@node.2835" },
  { emoji: "🙏", name: "質問箱", path: "garlic@node.2835" },
])

for (let i = 0; i < Categorys.value.length; i++) {
  isPrimary.value.push(false)
}

init()

async function init() {
  isPrimary.value[0] = true

  CategoryEmoji.value = Categorys.value[0].emoji
  CategoryName.value = Categorys.value[0].name

  //スレッド一覧を自分のnodeに送信して取得
  const threads = await nodeConnect(Categorys.value[0].path)

  //カテゴリー一覧を更新
  CategoryThreads.value = threads
}

//ボタンクリック時
async function btnClick(index: number) {

  //全てのカテゴリーをfalseに
  isPrimary.value.forEach(function (value, index) {
    isPrimary.value[index] = false
  })

  //指定されたカテゴリーをtrueに
  isPrimary.value[index] = !isPrimary.value[index]

  //カテゴリーのタイトルと絵文字を取得
  CategoryEmoji.value = Categorys.value[index].emoji
  CategoryName.value = Categorys.value[index].name

  //スレッド一覧を自分のnodeに送信して取得
  const threads = await nodeConnect(Categorys.value[index].path)

  //カテゴリー一覧を更新
  CategoryThreads.value = threads
}

</script>

<template>
  <div class="body">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-3">
        <div class="d-flex">
          <RouterLink to="/"><img src="/icon/arrow.svg" alt="戻る" class="icon back-title mx-3 mt-1"></RouterLink>
          <h4 class="text-center mb-0 mt-1">Garlic Bar.</h4>
          <RouterLink to="/" class="btn btn-success ml-auto">スレッド作成</RouterLink>
        </div>
      </header>

      <div class="card text-bg-dark server-card">
        <img src="/image/moyasi.png" class="card-img" alt="カード">
        <div class="card-img-overlay">
          <div class="bottom">
            <h3 class="card-title fw-bold">お帰りなさい Garlic Bar</h3>
            <p class="card-text">ニンニクを刻めばようこそガーリックバーへ。</p>
          </div>
        </div>
      </div>

      <div class="container px-3 mt-3">
        <div class="row">
          <div class="col-3">
            <p class="fw-bold">カテゴリー</p>
            <div class="d-grid gap-2">
              <button class="btn p-0 text-left" :class="{ 'btn-primary': isPrimary[index] }" @click="btnClick(index)"
                v-for="(Category, index) in Categorys" :key="Category.emoji">
                <p class="mb-0 pt-1 pb-1">
                  <span class="p-2 inline-block">{{ Category.emoji }}</span>
                  {{ Category.name }}
                </p>
              </button>
            </div>
          </div>
          <div class="col-9">
            <div class="p-2 mb-3 border-bottom">
              <p class="fw-bold mb-0">{{ CategoryEmoji }} {{ CategoryName }}</p>
              <small>{{ CategoryName }}で新しい発見を</small>
            </div>

            <div v-for="CategoryThread in CategoryThreads" :key="CategoryThread.emoji" class="d-flex p-2 border-bottom">
              <div class="threadEmoji">
                <h3 class="p-2">{{ CategoryThread.emoji }}</h3>
              </div>
              <div class="px-2">
                <p class="fw-bold mb-0 fs-12">{{ CategoryThread.title }}</p>
                <small class="text-secondary">{{ CategoryThread.time }}に{{ CategoryThread.user }}よって{{ CategoryName
                }}で立てられました。</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.body {
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  width: 100vw;
  min-height: 100vh;
  background-color: #121416;
  color: #fff;
}

.cover-container {
  max-width: 80em;
}

.back-title {
  width: 27px;
  height: 27px;
}

.ml-auto {
  margin-left: auto;
}

.icon {
  filter: invert();
}

.btn {
  color: #fff;
}

.text-left {
  text-align: left;
}

.bottom {
  position: absolute;
  bottom: 15px;
}

.threadEmoji {
  width: 48px;
  height: 48px;
  background-color: #22262a;
  border-radius: 5px;
}

.fs-12 {
  font-size: 1.2rem;
}

.border-bottom {
  border-color: #292e33 !important;
}
</style>