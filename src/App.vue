<script setup lang="ts">
</script>

<template>
  <AppHeader />
  <main class="main">
    <router-view />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
.main {

  border: 1px solid #ddd;
  margin: 2rem 0;

}
</style>
