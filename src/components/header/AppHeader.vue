<template>
    <header class="header">
        <router-link to="/" class="link">
              <img src="../../../public/vite.svg" alt="logo" class="logo">
        </router-link>
        <router-link to="/admin" class="link">
             auth
        </router-link>
        <router-link to="/:pathMatch(.*)*" class="link">
             NotFound
        </router-link>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    border: 1px solid #ddd;
    padding: 1rem 3rem;
}
</style>