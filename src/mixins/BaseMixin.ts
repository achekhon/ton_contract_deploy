import RootStore from '@/store'
import UIStore from '@/store/ui'
import { TON } from '@/model/ton'
import StateStore from '@/store/state'
import { Network } from '@/model/state'
import { TONClient } from 'ton-client-web-js'
import { getModule } from 'vuex-module-decorators'
import { Component, Vue, Watch } from 'vue-property-decorator'

const ui = getModule(UIStore, RootStore)
const state = getModule(StateStore, RootStore)

@Component
class Base extends Vue {
  ton: TON  | null = null

  get publicPath() {
    return process.env.BASE_URL
  }

  get ui (): UIStore {
    return ui
  }

  get state (): StateStore {
    return state
  }

  get buefy () {
    return this.$buefy
  }

  @Watch('state.network', { immediate: true })
  async onNetworkChange (value: Network, oldValue: Network) {
    if (oldValue && this.ton) {
      await this.ton.close()
      
      this.ton = null
    }

    this.ton = await TONClient.create({
      servers: [`${value}.ton.dev`]
    })
  }
}

export default Base