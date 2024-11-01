<script setup>
import { projects } from '../../../store/projects'
import Item from './Item.vue'

console.log(projects)
</script>

<template>
  <ul v-if="projects" class="list">
    <Item v-for="item in projects" :key="item.id" :item="item" />
  </ul>
</template>

<style scoped>
.list {
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

}

@media screen and (max-width: 1000px) {
  .list {
    flex-direction: column;
    gap: 2rem;
  }
}
@media screen and (max-width: 1200px) {
  .list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
