<template>
  <b-button 
    @click="copy(text)" 
    v-if="isClipboardSupported" 
  >
    <i class="fas fa-copy"></i>
  </b-button>
</template>

<script lang="ts">
import Base from '@/mixins/BaseMixin'
import * as clipboard from 'clipbrd'
import { Component, Mixins, Prop } from 'vue-property-decorator'

@Component
export default class ClipboardButton extends Mixins(Base) {
  @Prop({ required: true }) protected text!: string

  get isClipboardSupported() {
    return clipboard.isSupported()
  }

  protected copy(str: string) {
    const isCopied = clipboard.copy(str)

    if (isCopied) {
      this.buefy.toast.open({
        message: 'Copied',
        type: 'is-success'
      })
    }
  }
}
</script>


