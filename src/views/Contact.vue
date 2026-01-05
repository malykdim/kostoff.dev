<script setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import Social from '../components/Social.vue'

const email = ref('albena.kostov@gmail.com')

const { copy, copied } = useClipboard({
  source: email,
  copiedDuring: 6000,
})
</script>

<template>
  <section class="contact">
    <Social />
    <h2
      class="email tooltip-right tooltip"
      readonly
      @click="copy()"
    >
      {{ email }}
      <span class="tooltiptext">
        {{ copied ? 'Copied' : 'Copy' }}
      </span>
    </h2>
    <a class="link tooltip-right tooltip" href="https://drive.google.com/file/d/1PjfaQjFu9RJDiXLF-o8Mw4uoKDQQNrmf/view?usp=sharing" target="_blank">
      view resume
      <span class="tooltiptext">
        Visit
      </span>
    </a>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/tools/tooltip' as tt;
.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin: 10rem auto;

    .email, .link {
      margin: 0;
      padding: 0;
    }
    .email {
        background: transparent;
        color: var(--primary);
        cursor: pointer;

        &:hover {
          text-decoration: overline;
        }

        @media (max-width: 320px) {
          align-self: center;
          font-size: 1em;
        }
    }
    .link {
      cursor: pointer;
      color: var(--light);
      font-weight: 100;

      &:hover {
        text-decoration: overline;
      }
    }
    .tooltip-right {
      @include tt.tooltip(right, 15px);
    }
}
</style>
