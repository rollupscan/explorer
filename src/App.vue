<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'App',
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0px;
  font-family: Helvetica, sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
  padding: 8px;
}
</style>
