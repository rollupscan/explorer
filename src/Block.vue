<template>
  <div>
    <Header />
    <div class="container">
      <div class="title-text">
        Zkopru block {{ id.slice(0, 20) }}...{{ id.slice(-20) }}
      </div>
      <div class="subtitle-text link" v-on:click="viewL1Transaction">
        L1 Transaction
      </div>
      <div class="block-section">
        <div class="subtitle-text">
          Transactions
        </div>
        <TransactionCell v-for="tx of transactions" :tx="tx" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from './components/Header'
import TransactionCell from './components/TransactionCell'

@Component({
  name: 'Block',
  components: { Header, TransactionCell, },
  props: ['id'],
  computed: {
    transactions: function() {
      const block = this.$store.state.zkopru.blocksByHash[this.id]
      if (!block || !block.body) return []
      return [
        ...block.body.txs.map(obj => ({
          type: 'transfer',
          ...obj,
        })),
        ...block.body.massDeposits.map(obj => ({
          type: 'deposit',
          ...obj,
        })),
      ]
    }
  }
})
export default class Block extends Vue {
  async serverPrefetch() {
    await this.$store.dispatch('loadBlock', { hash: this.id })
  }

  async mounted() {
    if (this.$store.state.zkopru.blocksByHash[this.id]) return
    await this.$store.dispatch('loadBlock', { hash: this.id })
  }

  async viewL1Transaction() {
    const block = this.$store.state.zkopru.blocksByHash[this.id]
    if (!block) {
      await this.$store.dispatch('loadBlock', { hash: this.id })
      await this.viewL1Transaction()
      return
    }
    window.open(`https://goerli.etherscan.io/tx/${block.proposalTx}`, '_blank')
  }
}
</script>
<style scoped>
.title-text {
  font-size: 42px;
}
.link {
  text-decoration: underline;
  cursor: pointer;
}
.subtitle-text {
  font-size: 32px;
  margin: 4px;
}
.block-section {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}
</style>
