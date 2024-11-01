<script setup>

</script>

<template>
  <div class="app-container">
    <header class="header">
      <AppHeader />
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <AppFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  display: grid;
  grid-template-rows: 10% auto 5%;
  height: 100vh;
  overflow: hidden;

  .header {
    grid-row: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    // background-color: white;
  }

  .main {
    grid-row: 2;
    overflow: auto;
    width: 100%;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0.3rem;
      border-radius: 0.15rem;
      opacity: 0.5;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      outline: 1px solid var(--primary);
      border-radius: 0.15rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--tooltips);
      opacity: 0.5;
      border-radius: 0.15rem;
    }
  }

  .footer {
    grid-row: 3;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::selection {
    background-color: var(--primary);
    color: white;
  }
  ::-webkit-selection {
    background-color: var(--primary);
    color: white;
  }
}
</style>
