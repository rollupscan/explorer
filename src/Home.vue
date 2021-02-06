<template>
  <div>
    <Header />
    <div class="container">
    <div class="title-text">
      Home page
    </div>
    <div class="block-section">
      <div class="subtitle-text">
        Recent Blocks
      </div>
      <BlockCell v-for="block of blocks" :block="block" />
    </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from './components/Header'
import BlockCell from './components/BlockCell'

@Component({
  name: 'Home',
  components: {
    Header,
    BlockCell,
  },
  metaInfo: {
    title: 'Hello World',
  },
})
export default class Home extends Vue {
  blocks = [
    {
      number: 2,
      hash: '0xabcdefabcdefabcdef',
      network: 'zkopru',
      transactionCount: 50
    }
  ]
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
}
.title-text {
  font-size: 42px;
}
.subtitle-text {
  font-size: 32px;
}
.block-section {
  border: 1px solid black;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
</style>
