<template>
  <div class="body">
    <div class="d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0 mx-3">Auth</h3>
        </div>
      </header>

      <main class="px-3 text-center">
        <div class="row">
          <div class="col-md-6">
            <h1 class="fw-bold col-md-9 mx-auto fadein" style="text-align: left;">揺らぎ始める世界、曖昧になる風景。</h1>
          </div>
          <div class="col-md-6">
            <h3 class="fw-bold mb-3">さぁ始めよう</h3>
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
              <router-link to="/login" class="btn btn-lg btn-light fw-bold border-white bg-white">Log in</router-link>
              <router-link to="/signup" class="btn btn-lg btn-light fw-bold border-white bg-white">Sign up</router-link>
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
  background-color: rgb(39, 255, 183);
  color: #000000;
}
</style>