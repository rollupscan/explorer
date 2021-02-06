<template>
  <div class="block-cell-container">
    <div class="block-number">
      #{{ block.number }}
    </div>
    <div style="width: 12px" spacer />
    <div style="display: flex ; flex-direction: column ; flex: 1">
      <div style="display: flex ; justify-content: space-between">
        <div>{{ block.network }}</div>
        <div>{{ block.transactionCount}} transactions</div>
      </div>
      <div>{{ block.hash }}</div>
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
export default class BlockCell extends Vue {}
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
