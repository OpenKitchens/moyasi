<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const ipAddress = ref("");

const viewLoading = ref(false)

async function createNode() {
  viewLoading.value = true;
  const response = await fetch("http://localhost:3000/signup", {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ ip: ipAddress.value })
  })

  const data = await response.json();
  if (data.status == "done") {
    router.push('/');
  }
}
</script>
<template>
  <div class="body">
    <div class="d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0 mx-3">create me.</h3>
        </div>
      </header>

      <main class="px-3 text-center">
        <div class="row">
          <div class="col-md-6">
            <div class="mx-auto col-md-9" style="position: relative;top: 50%;transform: translateY(-50%);">
              <h1 class="fw-bold fadein" style="text-align: left;">弱い者たちが夕暮れ更に弱い者を叩く。僕らのブルースは加速していく。</h1>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
              <h3 class="fw-bold mb-3">ノードに接続</h3>
              <p>信用を担保するために友達のノードに接続してください。</p>
              <label for="exampleInputEmail1" class="form-label" style="text-align: left;">相手ノードのIPを入力</label>
              <input type="text" v-model="ipAddress"
                class="form-control btn btn-lg btn-light fw-bold border-white bg-white" placeholder="192.168.1.2">

              <button class="btn btn-lg btn-dark fw-bold border-black bg-black mb-3" @click="createNode()">接続</button>
              <router-link to="/login" class="btn btn-lg btn-light fw-bold border-white bg-white mt-3">Log
                in</router-link>

              <div class="loading viewin" v-if="viewLoading">
                <div class="loadingchild">
                  <div class="loader">Loading...</div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </main>

      <footer class="mt-auto text-white-50">
      </footer>
    </div>
  </div>
</template>

<style scoped>
.body {
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 72, 99);
  color: #000000;
}


.loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #ffffff56;
  backdrop-fillter: blur(5px);
  z-index: 10;
}

.loadingchild{
  position: relative;
  top: 30%;
  transform: translateY(-50%);
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>