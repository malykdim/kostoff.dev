<script setup>
import { ref } from 'vue'
import vueIcon from '/assets/icons/vue.svg'
import piniaIcon from '/assets/icons/pinia.svg'
import viteIcon from '/assets/icons/vite.svg'

const tech = ref([
  { text: 'Vite', img: viteIcon },
  { text: 'Vue 3', img: vueIcon },
  { text: 'Pinia', img: piniaIcon },
])
</script>

<template>
  <div class="tech">
    <ul class="list">
      <li v-for="item in tech" :key="item.text" class="item tooltip-bottom">
        <img :src="item.img" :alt="item.text" class="icon">
        <span class="tooltiptext">
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.tech {
    .list {
        display: flex;
        justify-content: center;
        gap: 1.7rem;
        list-style: none;

        .item {
            position: relative;
            width: 25px;
            height: 25px;
            max-height: 25px;
            max-width: auto;

            .icon {
                width: 100%;
                height: 100%;
            }

          }
        .tooltip-bottom {
          position: relative;
          display: inline-block;

          .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: var(--tooltips);
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;

            position: absolute;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s;

            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 15px;

            &::after {
              content: " ";
              position: absolute;
              border-width: 5px;
              border-style: solid;
              border-color: transparent var(--tooltips) transparent transparent;

              top: 100%;
              left: 50%;
              border-width: 5px;
              border-style: solid;
              border-color: var(--tooltips) transparent transparent transparent;
              transform: translateX(-50%);
            }
          }

          &:hover {
            .tooltiptext {
              visibility: visible;
              font-size: 1em;
              opacity: 1;
            }
          }
        }
    }
}
</style>
