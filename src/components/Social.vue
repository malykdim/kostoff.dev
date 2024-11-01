<script setup>

</script>

<template>
  <div class="social">
    <a href="https://github.com/malykdim" class="link" target="_blank">
      <div class="icon-wrapper tooltip-bottom">
        <i class="pi pi-github logo github-color" />
        <span class="tooltiptext">GitHub</span>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/albenakostova/" class="link" target="_blank">
      <div class="icon-wrapper tooltip-bottom">
        <i class="pi pi-linkedin logo linkedin-color" />
        <span class="tooltiptext">LinkedIn</span>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .icon-wrapper {
    margin: 0;
    width: 60px;
    height: auto;

    .logo {
      width: 100%;
      height: auto;
      font-size: larger;
    }
    .github-color {
      // color: rgba(24, 23, 23, 1); /* GitHub brand color */
      color: rgba(255, 255, 255, 1);
    }

    .linkedin-color {
      // color: rgba(0, 119, 181, 1); /* LinkedIn brand color */
      color: rgba(255, 255, 255, 1);
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
              font-size: 0.7em;
              opacity: 1;
            }
          }
  }

  @media (max-width: 320px) {
    height: 40px;
  }
}
</style>
