<script setup>
const resumeUrl = new URL('/resume.pdf', import.meta.url).href
</script>

<template>
  <a :href="resumeUrl" class="direct-download" download="resume.pdf">Download Resume</a>

  <!-- <div class="radio-buttons">
      <label class="radio-option">
        <input type="radio" name="resume-option">
        <a class="link tooltip-right tooltip" href="https://drive.google.com/file/d/1PjfaQjFu9RJDiXLF-o8Mw4uoKDQQNrmf/view?usp=sharing" target="_blank">
          View Resume
          <span class="tooltiptext">
            Visit
          </span>
        </a>
      </label>
      <label class="radio-option">
        <input type="radio" name="resume-option">
        <a :href="resumeUrl" class="direct-download" download="resume.pdf">Download Resume</a>
      </label>
    </div> -->
</template>

<style lang="scss" scoped>
    .direct-download{
      color: var(--link);
      font-weight: 100;
      cursor: pointer;

      &:hover {
        text-decoration: overline;
      }
    }

    /*  */
    .radio-buttons {
      display: flex;
      gap: 10px;
    }

    .radio-option {
      display: inline-block;
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      user-select: none;
    }

    .radio-option input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .radio-option input:checked ~ a {
      font-weight: bold;
    }

    .radio-option a {
      text-decoration: none;
      color: #000;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .radio-option a:hover {
      background-color: #e9e9e9;
    }
</style>
