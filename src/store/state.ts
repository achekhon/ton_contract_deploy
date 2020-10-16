import { ABI, Field, Keys, Network } from '@/model/state'
import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'state' })
export default class StateStore extends VuexModule {
  network = Network.Mainnet
  address = ''
  abi: ABI | null = null
  base64 = ''
  fields: Field[] = []
  keys: Keys | null = null 
  txId = ''

  @Mutation
  commitNetwork (payload: Network) {
    this.network = payload
  }

  @Mutation
  commitAddress (payload: string) {
    this.address = payload
  }

  @Mutation
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  commitAbi (payload: any) {
    this.abi = payload
  }

  @Mutation
  commitBase64 (payload: string) {
    this.base64 = payload
  }

  @Mutation
  commitFields (payload: Field[]) {
    this.fields = payload
  }

  @Mutation
  commitKeys (payload: Keys) {
    this.keys = payload
  }

  @Mutation
  commitTxId (payload: string) {
    this.txId = payload
  }

  @Mutation
  commitReset() {
    this.abi = null
    this.base64 = ''
    this.keys = null
    this.address = ''
    this.txId = ''
  }
}
