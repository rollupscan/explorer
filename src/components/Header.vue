<template>
  <div class="header-container">
    <div class="header-text">RollupScan</div>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Header',
  components: {},
})
export default class Header extends Vue {}
</script>
<style scoped>
.header-container {
  height: 40px;
  background: lightblue;
  display: flex;
  align-items: center;
  padding: 10px;
}
.header-text {
  font-size: 24px;
}
</style>
