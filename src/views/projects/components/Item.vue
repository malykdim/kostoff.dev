<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const formattedTags = computed(() => {
  return props.item.tags.map((tag, index) => {
    return index < props.item.tags.length - 1 ? `${tag} |` : tag
  })
})
</script>

<template>
  <RouterLink :to="{ name: 'details', params: { id: item.id } }">
    <div class="list-item">
      <h3 class="project-title">
        {{ item.name }}
      </h3>
      <div class="project-image">
        <picture>
          <img
            :src="`${item.thumbnailBaseName}`"
            :alt="item.name"
            class="cropped-image"
          >
        </picture>
      </div>
      <div class="tags">
        <span v-for="tag in formattedTags" :key="tag" class="project-tags">&nbsp;{{ tag }}</span>
      </div>
    </div>
  </RouterLink>
</template>