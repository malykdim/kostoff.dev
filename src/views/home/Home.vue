<script setup>
import Tech from './components/Tech.vue'
</script>

<template>
  <section class="home">
    <div class="title">
      <h3 class="name">
        albenaKostova
      </h3>

      <h1 class="role">
        JS Web Developer
      </h1>

      <h2 class="slogan">
        let's create good stuff together
      </h2>
    </div>

    <div class="gap">
      <Tech />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem auto;
    gap: 2rem;
    color: var(--light);

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      .name {
        font-size: 1.1em;
        align-self: flex-end;
        padding-right: .5rem;

        @media (max-width: 320px) {
          align-self: center;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          padding-right: .1rem;
        }
      }
      .role {
        font-size: 5em;
        transform: scaleY(1.1);
        letter-spacing: .05em;
        margin: 0;

        @media (max-width: 320px) {
          font-size: 1.5em;
        }
        @media (max-width: 768px) {
          font-size: 2.5em;
        }
      }
      .slogan {
        font-size: 1.1em;
        // align-self: flex-start;
        align-self: flex-start;

        @media (max-width: 320px) {
          align-self: center;
          margin-top: 1rem;
        }
      }
    }

    .gap {
      margin-top: 3rem;
    }
}
</style>
