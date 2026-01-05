<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <span>kostoff.dev &copy; 2024</span>
  </footer>
</template>

<style scoped lang="scss">
.footer {

  span {
    font-size: 12px;
    color: var(--primary);
  }
}

@media screen and (max-width: 480px) {
  .footer {
    span {
      font-size: 10px;
    }
  }
}
</style>
