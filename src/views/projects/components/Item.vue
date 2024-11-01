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
            :src="`/assets/images/${item.thumbnailBaseName}-1024w.jpg`"
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

<style lang="scss" scoped>
@import '../../../assets/style.scss';

.list-item {
  display: grid;
  transition: box-shadow 0.2s ease;
  border-radius: var(--border-radius);
  padding: 1rem 2rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--tooltips);
    box-shadow: var(--shadow);
  }

  .project-title {
    margin-bottom: 1rem;
    font-size: 1.3em;
    color: var(--primary);
  }

  .project-image {
    display: flex;
    justify-content: center;
    margin: 0 auto 1rem;
    width: 320px;
    height: auto;
    overflow: hidden; /* Hide overflow to crop the image */

    .cropped-image {
      width: 100%;
      height: 100%;
      object-fit: contain; /* Ensure the image covers the container */
    }
  }

  .tags {
    display: flex;
    justify-content: center;

    .project-tags {
      margin-top: 1rem;
      font-size: 1.2em;
      color: var(--primary);
      display: inline-block;
    }
  }

}
@media screen and (max-width: 320px) {
  .list-item {
    border-bottom: 1px solid var(--light);
    .project-title {
      font-size: 1em;
      display: none;
    }

    .tags {
      display: none;
    }
  }
}
@media screen and (max-width: 480px) {
  .list-item {
    border-bottom: 1px solid var(--light);

  }
    .project-title {
      font-size: 1em;
      margin-bottom: 0;
    }

    .project-image {
      margin-bottom: 0;
    }

    .tags {
      font-size: 0.8em;
      margin-bottom: 1rem;

    }

  }
</style>
