<template>
  <div class="app">
    <svg-sprite />
    <navigation />
    
    <div class="steps">
      <step-zero v-if="ui.step === 0" />
      <step-one v-if="ui.step === 1" />
      <step-two v-if="ui.step === 2" />
      <step-three v-if="ui.step === 3" />
      <step-four v-if="ui.step === 4" />
    </div>
  </div>
</template>

<script lang="ts">
import Base from '@/mixins/BaseMixin'
import SvgSprite from './components/SvgSprite.vue'
import StepZero from './components/steps/StepZero.vue'
import StepOne from './components/steps/StepOne.vue'
import StepTwo from './components/steps/StepTwo.vue'
import StepFour from './components/steps/StepFour.vue'
import Navigation from './components/Navigation.vue'
import StepThree from './components/steps/StepThree.vue'
import { Component, Mixins } from 'vue-property-decorator'

@Component({
  name: 'App',
  components: { 
    SvgSprite,
    Navigation,
    StepZero,
    StepOne,
    StepTwo,
    StepThree,
    StepFour
  },
})
export default class App extends Mixins(Base) {}
</script>
