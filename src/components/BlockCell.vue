<template>
  <div class="block-cell-container">
    <div class="block-number">
      #{{ +block.proposalNum }}
    </div>
    <div style="width: 12px" spacer />
    <div style="display: flex ; flex-direction: column ; flex: 1">
      <div style="display: flex ; justify-content: space-between">
        <div>Zkopru</div>
        <div v-if="+block.proposalNum === 0">Genesis Block</div>
        <div v-if="transactionCount() > 0">{{ transactionCount() }} transaction{{ transactionCount() === 1 ? '' : 's'}}</div>
        <div v-if="depositCount() > 0">{{ depositCount() }} deposit{{ depositCount() === 1 ? '' : 's'}}</div>
      </div>
      <div>{{ block.hash.slice(0, 10) }}...{{ block.hash.slice(-10) }}</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'BlockCell',
  components: {},
  props: ['block'],
})
export default class BlockCell extends Vue {
  transactionCount() {
    return this.block.body && this.block.body.txs.length || 0
  }

  depositCount() {
    return this.block.body && this.block.body.massDeposits.length || 0
  }

}
</script>
<style scoped>
.block-cell-container {
  padding: 8px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 4px;
}
.block-number {
  font-size: 24px;
}
</style>
