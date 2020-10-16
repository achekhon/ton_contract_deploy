<template>
  <div class="cp navigation" :class="[state.network]">
    <a @click="navigate()">
      <svg class="icon">
        <use xlink:href="#logo"></use>
      </svg>
    </a>
    <div class="select">
      <select v-model="network" @change="changeNetwork()" :disabled="state.address !== ''">
        <option value="main">Mainnet ({{ state.network }}.ton.dev)</option>
        <option value="net">Testnet ({{ state.network }}.ton.dev)</option>
      </select>
    </div>
  </div>
</template>

<script>
import Base from '@/mixins/BaseMixin'
import { Network } from '@/model/state'
import { Mixins } from 'vue-property-decorator'

export default class Navigation extends Mixins(Base) {
  network = Network.Mainnet

  constructor () {
    super()

    this.network = this.state.network
  }
  
  navigate () {
    this.ui.commitStep(0)
    this.state.commitReset()
  }
  
  changeNetwork() {
    this.state.commitNetwork(this.network)
  }
}
</script>
