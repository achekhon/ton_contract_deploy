<template>
  <section class="section">
    <div class="container content">
      <div class="step box">
        <h1 class="title">Upload Contract</h1>

        <div class="push">
          <upload-abi />
          <upload-tvc />
        </div>

        <!-- Error -->
        <p class="has-text-danger" v-if="error">{{ error.message }}</p>

        <button class="button next is-large is-text" @click="next()" :disabled="!state.abi || !state.base64">
          <span class="icon is-small">
            <i class="fas fa-arrow-circle-right"></i>
          </span>
        </button>
      </div>

      <div ref="container"></div>
    </div>
  </section>
</template>

<script lang="ts">
import Base from '@/mixins/BaseMixin'
import UploadAbi from '@/components/upload/UploadAbi.vue'
import UploadTvc from '@/components/upload/UploadTvc.vue'
import UploadKeys from '@/components/upload/UploadKeys.vue'
import { Component, Mixins } from 'vue-property-decorator'

@Component({
  name: 'StepOne',
  components: { UploadAbi, UploadTvc, UploadKeys }
})
export default class StepOne extends Mixins(Base) {
  saved = false
  error = null
  importKeys = false
  
  toggleImportKeys () {
    this.importKeys = !this.importKeys
  }

  next () {
    this.ui.commitStep(1)
  }
}
</script>
