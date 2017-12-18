<template>
  <div class="tip">
    Yolo . Router is change ..
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  private changeRouter (): void {
    console.log('[ info ] router is change.');
  }
}
</script>

<style lang="scss">
  .tip {
    margin-top: 10px;
    animation: 400ms shake;
  }

  @keyframes shake {
    0% {
      transform: rotate(7deg);
    }
    50% {
      transform: rotate(-7deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>

