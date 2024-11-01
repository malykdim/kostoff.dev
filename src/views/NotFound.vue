<script setup lang="ts">

</script>

<template>
  <section class="not-found">
    <h2 class="heading">
      The page you were looking for does not exist.
    </h2>
    <RouterLink to="/" class="link">
      <button class="btn">
        go back
      </button>
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/style.scss';
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    border-radius: .2rem;

    padding: 6rem 8rem;

    color: var(--light);

    .heading {
        color: var(--pr);
    }
    .btn {
      color: var(--primary);
      padding: 1rem;
      background-color: var(--dark);

      &:hover {
      }
    }
}
</style>
