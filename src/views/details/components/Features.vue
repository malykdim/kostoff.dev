<script setup>
defineProps(['features'])
</script>

<template>
  <div class="preview">
    <h2 class="heading">
      Features
    </h2><br>
    <div class="features">
      <div v-for="feature in features" :key="feature.text" class="feature-item">
        <i class="pi" :class="feature.icon" />
        <span>{{ feature.text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .preview {
    width: 30%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .features {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .feature-item {
        display: flex;
        flex-direction: column;
        .pi {
          font-size: 1.5rem;
          color: var(--primary);
        }
      }
    }
  }
</style>
