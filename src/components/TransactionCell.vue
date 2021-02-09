<template>
  <div class="transaction-cell-container">
    <div style="display: flex; justify-content: space-between">
      <div class="subtitle-text">
        {{ tx.type }}
      </div>
      <div class="info">
        Fee: {{ +tx.fee / 10**18 }} Eth
      </div>
    </div>
    <div v-if="tx.type === 'deposit'">
      Merged: {{ tx.merged }}
    </div>
    <div v-if="tx.type === 'transfer'">
      <div>
        Inflows: {{ tx.inflow.length }}
      </div>
      <div>
        Outflows: {{ tx.outflow.length }}
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'TransactionCell',
  components: {},
  props: ['tx'],
})
export default class BlockCell extends Vue {}
</script>
<style scoped>
.transaction-cell-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: center;
  border: 1px solid black;
  margin: 4px;
}
.subtitle-text {
  font-size: 24px;
}
.info {
  margin: 8px;
}
</style>
