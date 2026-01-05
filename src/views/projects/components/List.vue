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