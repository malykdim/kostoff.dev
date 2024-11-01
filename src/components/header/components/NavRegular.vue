<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="nav-regular" aria-label="Main Navigation">
    <RouterLink
      v-if="route.path !== '/'"
      to="/"
      class="link"
      aria-label="About"
    >
      about
    </RouterLink>
    <RouterLink
      v-if="route.path !== '/projects'"
      to="/projects"
      class="link"
      aria-label="Projects"
    >
      projects
    </RouterLink>
    <RouterLink
      v-if="route.path !== '/contact'"
      to="/contact"
      class="link"
      aria-label="Contact"
    >
      contact
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
.nav-regular {
  height: 10%;

  padding: 2rem 8rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  .link {
      height: 100%;
      display: inline-block;
      padding: .5rem 2rem 2rem;
      font-size: 1.3em;
      font-weight: 400;
      color: var(--primary);
      transition: all 0.3s ease-out;
      opacity: .5;

      &:hover {
        position: relative;
        cursor: pointer;
        letter-spacing: .3em;
        font-weight: 400;
        background: var(--tooltips);
        background: linear-gradient(to bottom, transparent 0%, transparent 60%, var(--tooltips) 100%);
        opacity: 1;
        box-shadow: var(--shadow);
      }
  }

}

@media (max-width: 320px) {
  .nav-regular {
    padding: 1rem 2rem;
    gap: 2rem;
  }
}
@media (max-width: 480px) {
  .nav-regular {
    padding: 1rem 3rem 1rem;
    gap: 1.5rem;
  }
}
</style>
