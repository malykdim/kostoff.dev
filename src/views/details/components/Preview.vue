<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  gallery: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.gallery.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + props.gallery.length) % props.gallery.length
}

const currentImageSrc = computed(() => {
  // Filter to only include .jpg images
  const jpgImages = props.gallery.filter(image => image.endsWith('.jpg'))
  return jpgImages[currentIndex.value]
})
</script>

<template>
  <div v-if="props.gallery.length" class="gallery-container">
    <h2 class="heading">
      Screens
    </h2><br>
    <div class="gallery">
      <button class="nav-button" @click="prevImage">
        <i class="pi pi-angle-left" />
      </button>
      <img :src="currentImageSrc" alt="Project Screen" class="gallery-image">
      <button class="nav-button" @click="nextImage">
        <i class="pi pi-angle-right" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery-container {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gallery {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
}

.gallery-image {
  max-width: 100%;
  border-radius: 2px;
  box-shadow: 0 2px 8px var(--light);
}

.nav-button {
  background-color: var(--primary-dark);
  border: none;
  padding: 5px 3px;
  cursor: pointer;
  margin: 0 1rem;

  .pi {
    color: var(--primary);
    font-size: 2em;
  }
  &:hover {
    background-color: var(--primary-dark);
  }

  &:active {
    border: none;

    .pi {
      color: var(--primary);
      outline: none;
    }
  }

  &:focus {
    outline: none;
  }
}

.nav-button:hover {
  background-color: var(--primary-dark);
}

.nav-button:active {
  border: none;

  .pi {
    color: var(--primary);
    outline: none;
  }
}

@media screen and (max-width: 900px) {
  .gallery-container {
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
