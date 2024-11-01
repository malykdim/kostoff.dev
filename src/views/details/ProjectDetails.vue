<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { projects } from '../../store/projects.js'

import Features from './components/Features.vue'
import Summary from './components/Summary.vue'
import Preview from './components/Preview.vue'

const route = useRoute()
const id = Number(route.params.id)

const item = projects.find(item => item.id === id)

const formatedTags = computed(() => {
  return item.tags.join(' | ')
})
console.log(formatedTags.value)
</script>

<template>
  <div class="details">
    <Summary :item="item" :formated-tags="formatedTags" />
    <div class="gallery">
      <Preview :gallery="item.gallery" />
    </div>
    <Features :features="item.features" />
  </div>
</template>

<style lang="scss" scoped>
.details {
  margin: 0 auto;
  padding:  3rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "summary gallery features";

  .details > :nth-child(1) {
    grid-area: summary;
  }

  .details > :nth-child(2) {
    grid-area: gallery;
  }

  .details > :nth-child(3) {
    grid-area: preview;
  }

  .gallery {
    .img {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "summary"
      "preview"
      "features";
  }

  @media (min-width: 768px) and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "summary features"
      "preview preview";
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "summary"
      "features"
      "preview"
  }

}
</style>
