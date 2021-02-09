import axios from 'axios'
const ZKOPRU_URL = 'https://zkopru.goerli.rollupscan.io'

export default {
  state: {
    blocks: {},
    blocksByHash: {},
    sortedBlocks: [],
  },
  mutations: {
    addBlock: (state, block) => {
      let existingHashes = {}
      state.sortedBlocks = [
        block,
        ...state.sortedBlocks,
      ].filter(({ hash }) => {
        if (existingHashes[hash]) return false
        existingHashes[hash] = true
        return true
      }).sort((a, b) => {
        if (+a.proposalNum < +b.proposalNum) {
          return -1
        } else if (+a.proposalNum > +b.proposalNum) {
          return 1
        }
        return 0
      })
      state.blocksByHash = {
        [block.hash]: block,
        ...state.blocksByHash,
      }
    }
  },
  actions: {
    loadBlock: async ({ state, commit }, { index, hash }) => {
      if (typeof index !== 'number' && !hash) {
        throw new Error('loadBlock must accept index or hash')
      }
      const block = await (hash ?
        loadMethod('l2_getBlockByHash', hash) :
        loadMethod('l2_getBlockByNumber', index))
      commit('addBlock', block)
    }
  },
}

async function loadMethod(method, ...params) {
  const { data } = await axios.post(ZKOPRU_URL, {
    id: Math.floor(Math.random() * 100000).toString(),
    jsonrpc: '2.0',
    method,
    params,
  })
  return data.result
}
