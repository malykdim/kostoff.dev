<script setup>
import List from './components/List.vue'
</script>

<template>
  <section class="projects">
    <div class="flex">
      <h2 class="heading">
        Projects
      </h2>
      <List />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  width: 50%;
  margin: 7rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .heading {
        color: var(--primary);
        padding-bottom: 4rem;
        text-transform: uppercase;
        opacity: .7;
    }
  }
}

@media (max-width: 480px) {
  .projects {
    flex-direction: column;
    margin: 4rem auto 0;
    width: 90vw;
  }
}
@media (max-width: 768px) {
  .projects {
    width: 90vw;
    flex-direction: column;
    margin: 10rem auto 0;
  }
}
@media (max-width: 1200px) {
  .projects {
    width: 90%;
    flex-direction: column;
    margin: 10rem auto 0;
  }
}
</style>
