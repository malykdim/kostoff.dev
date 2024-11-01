<script setup>

</script>

<template>
  <nav class="nav-home">
    <router-link to="/" class="link">
      <img src="../../../assets/me.png" alt="logo" class="logo">
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav-home {

    display: flex;
    .link {
      width: 236px;
      height: 136px;

      padding: 1rem;
      .logo {
            width: 136px;
            height: 136px;
            border-radius: 4%;
        }
    }
}
</style>
