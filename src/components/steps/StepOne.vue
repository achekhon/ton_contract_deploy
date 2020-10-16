<template>
  <section class="section">
    <div class="container content">
      <div class="step box">
        <h1 class="title">Get contract address</h1>

        <!-- Buttons -->
        <p class="bottom" v-if="!state.keys">
          <b-button 
            @click="generate()"
            icon-pack="fa"
            icon-left="plus"
            :disabled="!state.abi || !state.base64"
            >
            Make new keys
          </b-button>
          
          <span>or</span>
          
          <b-button 
            icon-pack="fa"
            icon-left="file-import"
            @click="toggleImportKeys()"
            :type="{'is-info' : importKeys}"
            :disabled="!state.abi || !state.base64"
            >
            Import keys
          </b-button>
        </p>

        <!-- Form -->
        <div class="push" v-if="importKeys && !state.keys">
          <upload-keys />
        </div>

        <!-- Success -->
        <p v-if="state.keys">
          <span>Save keys in safe place:</span>
          <pre class="has-text-left">{{ state.keys }}</pre>
        </p>
        
        <!-- Error -->
        <p class="has-text-danger" v-if="error">{{ error.message }}</p>

        <!-- Download -->
        <div class="bottom" v-if="state.keys">
          <a class="button" :href="json" download="keys.json">Download</a>

          <label class="checkbox">
            <input type="checkbox" v-model="saved">
            I saved keys in safe place
          </label>
        </div>

        <!-- Next step -->
        <button class="button next is-large is-text" @click="submit()" :disabled="!saved">
          <span class="icon is-small">
            <i class="fas fa-arrow-circle-right"></i>
          </span>
        </button>
      </div>
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
  
  get json (): string {
    const contentType = 'application/json'
    const dData = JSON.stringify(this.state.keys, null, 2)
    const blob = new Blob([dData], { type: contentType })
    const url = window.URL.createObjectURL(blob)

    return url
  }

  toggleImportKeys () {
    this.importKeys = !this.importKeys
  }

  async generate () {
    if (!this.ton) return

    this.state.commitKeys((await this.ton.crypto.ed25519Keypair()))
  }

  async submit() {
    this.error = null

    if (!this.ton || !this.state.abi || !this.state.keys) return

    try {
      const data = await this.ton.contracts.getDeployData({
        abi: this.state.abi,
        imageBase64: this.state.base64,
        publicKeyHex: this.state.keys.public,
        workchainId: 0,
      })
      
      this.state.commitAddress(data.address)
      this.ui.commitStep(2)
    } catch (e) {
      this.error = e
    }
  }
}
</script>
