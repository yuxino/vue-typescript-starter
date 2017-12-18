<template>
  <div class="container">
    <p>🎉 Congratulations !</p>
    <img @click="event" src="../assets/logo.png" title="click me to see event">
    <h3>You can use 
      <span class="ts">typescript,</span>
      <span class="sass">sass,</span>
      <span class="vue">vue</span>
      and
      <span class="vue">vue-router</span>
      now.
    </h3>
    <h3>You can click the following link to trigger router-change.</h3>
    <h3>That is all , enjoy it .</h3>
    <router-link to = "/hello">Hello ~</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  // u can set event in here
  private event (): void {
    console.log('[ info ] Emmmmmm.');
  }
}
</script>

<style lang="scss">
  .container {
    width: 50vw;
    margin: 20vh auto 0 auto;
    text-align: center;

    a {
      color: #f7647e;
      text-decoration: none;
    }

    p {
      font-size: 20px;
      text-transform: uppercase;
    }

    img {
      $size: 150px;
      width: $size;
      height: $size;
      cursor: pointer;
      transition: 300ms;

      &:hover {
        transform: rotate(360deg);
      }
    }

    h3 {
      font-weight: 400;
      margin: 15px 0;
    }

    span {
      &.ts {
         color: #294e80;
      }
      &.sass {
        color: #cc6699;
      }
      &.vue {
        color:#42b983;
      }
    }
  }
</style>
