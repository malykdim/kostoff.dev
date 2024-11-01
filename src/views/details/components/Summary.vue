<script setup>
const props = defineProps(['item', 'formatedTags'])
</script>

<template>
  <div class="summary">
    <h2 class="heading">
      Summary
    </h2><br>
    <div class="content">
      <h3 class="project-name">
        {{ props.item.name }}
      </h3>
      <p class="description">
        {{ props.item.description }}
      </p>

      <p class="tags">
        {{ props.formatedTags }}
      </p>

      <div class="links">
        <a :href="props.item.gitHub" class="link" target="_blank">
          <div class="icon-wrapper tooltip-bottom">
            <i class="pi pi-github logo" />
            <span class="tooltiptext">GitHub</span>
          </div>
        </a>
        <a :href="props.item.link" class="link" target="_blank">
          <div class="icon-wrapper tooltip-bottom">
            <i class="pi pi-globe logo" />
            <span class="tooltiptext">Web</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .summary {
    width: 30%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .project-name {
      margin-top: 1rem;
      font-weight: 100;
      color: var(--primary);
    }

    .description {
      margin-top: 1rem;
      color: var(--light);
      margin-bottom: 1rem;
    }

    .tags {
      margin-top: 1rem;
      color: #42b983;
    }

    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .link {
        margin-top: 1rem;
        color: var(--primary);
        text-decoration: none;
        font-size: small;
        font-weight: 200;
        display: inline-block;

        &:hover {
            cursor: pointer;

            // .pi {
            //   color: var(--primary);
            // }
        }
      }
    }
  }

  .tooltip-bottom {
    position: relative;
    display: inline-block;

    .tooltiptext {
      visibility: hidden;
      width: 120px;

      background-color: var(--tooltips);
      color: var(--light);
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;

      position: absolute;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s;

      top: 150%;
      left: 50%;
      margin-top: 15px;
      margin-left: -60px;

      &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent  var(--tooltips) transparent;
      }
    }
  }

  .tooltip-bottom:hover {
    .tooltiptext {
      visibility: visible;
      font-size: 0.7em;
      opacity: 1;
    }
  }
</style>
