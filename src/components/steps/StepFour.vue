<template>
  <section class="section">
    <div class="container content">
      <div class="step box">
        <!-- Title -->
        <h1>
          <svg class="icon">
            <use xlink:href="#success"></use>
          </svg>
          Contract deployed!
        </h1>

        <!-- Buttons -->
        <div class="bottom">
          <!-- Address -->
          <a 
            target="_blank"
            class="button"
            :href="`https://${state.network}.ton.live/accounts?section=details&id=${state.address}`"
          >
            <span class="icon is-small">
              <i class="fas fa-file-signature"></i>
            </span>
            <span>Contract address</span>
          </a>

          <!-- Transaction -->
          <a 
            target="_blank"
            class="button"
            :href="`https://${state.network}.ton.live/transactions?section=details&id=${state.txId}`"
          >
            <span class="icon is-small">
              <i class="fas fa-link"></i>
            </span>
            <span>Deploy transaction</span>
          </a>
        </div>

        <!-- Restart -->
        <button class="button next is-large is-text" @click="restart()">
          <span class="icon is-small">
            <i class="fas fa-sync-alt"></i>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Base from '@/mixins/BaseMixin'
import { Mixins } from 'vue-property-decorator'

export default class StepFour extends Mixins(Base) {
  error = null
  
  restart () {
    this.state.commitReset()
    this.ui.commitStep(0)
  }
}
</script>
