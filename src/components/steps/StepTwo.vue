<template>
  <section class="section">
    <div class="container content">
      <div class="step box">
        <h1>Address activation</h1>

        <!-- Message -->
        <p>
          Send 1 TON 
          <img class="currency" :src="`${ publicPath }img/${currency}.png`" > &nbsp;
          to activate
          <a 
            target="_blank"
            :href="`https://${state.network}.ton.live/accounts?section=details&id=${state.address}`"
          >address</a>:
        </p>

        <!-- Address -->
        <div class="field has-addons">
          <p class="control is-expanded">
            <input 
              disabled
              class="input" 
              v-model="state.address"
            >
          </p>
          <p class="control">
            <clipboard-button :text="state.address" />
          </p>
        </div>

        <!-- Loading -->
        <loading text="Waiting for payment..." />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Base from '@/mixins/BaseMixin'
import { Network } from '@/model/state'
import Loading from '@/components/Loading.vue'
import { Component, Mixins, Watch } from 'vue-property-decorator'
import ClipboardButton from '@/components/ClipboardButton.vue'
import { TON } from '@/model/ton'


@Component({
  name: 'StepTwo',
  components: { Loading, ClipboardButton }
})
class StepTwo extends Mixins(Base) {
  error = null
  
  get currency (): string {
    return this.state.network === Network.Mainnet ? 'crystal' : 'ruby'
  }

  @Watch('ton')
  async onTonReady (ton: TON) {
    const account = await ton.queries.accounts.query({
      id: { eq: this.state.address },
    }, 'id balance')
    
    if (account.length) return this.ui.commitStep(3)

    ton.queries.accounts.subscribe({
      id: { eq: this.state.address }
    }, 'id balance', () => {
      this.ui.commitStep(3)
    })
  }
}

export default StepTwo
</script>