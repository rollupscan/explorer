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
        <BlockCell v-for="block of $store.state.zkopru.sortedBlocks" :block="block" />
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
    title: 'RollupExplorer',
  },
})
export default class Home extends Vue {
  async serverPrefetch() {
    await this.loadBlocks()
  }

  async mounted() {
    await this.loadBlocks()
  }

  async loadBlocks() {
    const promises = []
    for (let x = 0 ; x < 10 ; x++) {
      promises.push(this.$store.dispatch('loadBlock', { index: x }))
    }
    try {
      await Promise.all(promises)
    } catch (err) {}
  }
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
  margin: 4px;
}
.block-section {
  border: 1px solid black;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
</style>
