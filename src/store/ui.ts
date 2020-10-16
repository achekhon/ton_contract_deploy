import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'ui' })
class UIStore extends VuexModule {
  step = 0

  @Mutation
  commitStep (payload: number) {
    this.step = payload
  }
}

export default UIStore