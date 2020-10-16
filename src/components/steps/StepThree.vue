<template>
  <section class="section">
    <div class="container content">
      <div class="step box">
        <h1>Deploy Contract</h1>

        <!-- Params -->
        <div 
          :key="key"
          class="field" 
          v-for="(param, key) in state.fields" 
        >
          <!-- Label -->
          <label class="label">
            <span>{{ param.name }}</span>
            
            <button class="button" @click="addField(param.name)" v-if="param.array" :disabled="loading">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
            </button>
          </label>

          <!-- Input for array param -->
          <template v-if="param.array">
            
            <div class="field has-addons" v-for="(item, index) in params[param.name]" :key="index">
              <div class="control">
                <a class="button" disabled>
                  {{ `#${index + 1}` }}
                </a>
              </div>
              <div class="control is-expanded">
                <input 
                  class="input" 
                  :disabled="loading" 
                  v-model.trim="params[param.name][index]"
                >
              </div>
              <div class="control">
                <button class="button" @click="deleteField(param.name, index)" :disabled="loading">
                  <span class="icon is-small">
                    <i class="fas fa-minus"></i>
                  </span>
                </button>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" :disabled="loading" v-model.trim="params[param.name]">
              </p>
              <p class="control" v-if="param.array">
                <a class="button" @click="deleteField()">
                  <span class="icon is-small">
                    <i class="fas fa-minus"></i>
                  </span>
                </a>
              </p>
            </div>
          </template>
        </div>

        <!-- Loading -->
        <loading v-if="loading" text="Deploying..." />
        
        <!-- Error -->
        <p class="has-text-danger" v-if="error">{{ error.message }}</p>

        <!-- Submit -->
        <p>
          <button class="button" v-if="!loading" @click="submit()">Deploy contract</button>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Base from '@/mixins/BaseMixin'
import { Params } from '@/model/state'
import Loading from '@/components/Loading.vue'
import { Component, Mixins } from 'vue-property-decorator'

@Component({
  name: 'StepThree',
  components: { Loading },
})
export default class StepThree extends Mixins(Base) {
  error = null
  loading = false
  params: Params = {}

  async mounted () {
    this.state.fields.forEach(item => {
      this.$set(this.params, item.name, item.array ? [''] : '')
    })
  }

  addField (name: string) {
    const arr = this.params[name] as string[]

    arr.push('')
    this.$set(this.params, name, arr)
  }

  deleteField (name: string, index: number) {
    const arr = (this.params[name] as string[])

    if (arr.length === 1) return
    
    arr.splice(index, 1)
  }
    
  async submit() {
    this.error = null
    this.loading = true

    if (!this.ton || !this.state.abi || !this.state.keys) return

    try {
      const deployMessage = await this.ton.contracts.createDeployMessage({
        package: { 
          abi: this.state.abi, 
          imageBase64: this.state.base64
        },
        constructorParams: { ...this.params },
        keyPair: this.state.keys,
      })

      const state = await this.ton.contracts.sendMessage(deployMessage.message)
      const result = await this.ton.contracts.waitForDeployTransaction(deployMessage, state)

      this.state.commitTxId(result.transaction.id)
      this.ui.commitStep(4)
    } catch (e) {
      console.error(e)
      this.error = e
    } finally {
      this.loading = false
    }
  }
}
</script>
