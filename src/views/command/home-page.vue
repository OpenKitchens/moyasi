<template>
  <div class="body">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Console.</h3>
        </div>
      </header>

      <main class="px-3 text-center">
        <h1 class="fw-bold">もやし屋 (ﾟДﾟ )</h1>
        <p>数行のコマンドでインターネットを駆け巡る。</p>
        <div class="command-ui card mt-5 mx-auto">
          <div class="input-group w-370 mt-3 mb-1 mx-auto">
            <span class="input-group-text p-2" id="basic-addon1">🚀</span><input type="text" class="form-control mx-auto"
              placeholder="command..." aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group w-370 mt-3 mb-4 mx-auto">
            <span class="input-group-text p-2" id="basic-addon1">🔑</span><input type="text" class="form-control mx-auto"
              placeholder="key(option)" aria-label="Username" aria-describedby="basic-addon1">
          </div>

          <div class="d-grid gap-2 mt-5 mb-3">
            <button class="btn btn-primary w-370 mx-auto" type="button">Go command</button>
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

  color: #fff;
}

.command-ui{
  width: 400px;
  background-color: #1e2226;
  border-radius: 10px;
}

.cover-container {
  max-width: 42em;
}

.input-group-text {
  background-color: #363c44;
  border-color: #414850;
  color: #fff;
}

.form-control {
  background-color: #2c3137;
  border-color: #414850;
  border-left: none;
  color: #fff;
  font-family: monospace;
}

.form-control::placeholder {
  color: #8b8b8b;
}

.w-370 {
  width: 370px;
}
</style>