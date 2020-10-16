<template>
  <div class="field">
    <div class="file has-name is-fullwidth" :class="{'is-info': file }">
      <label class="file-label">
        <!-- Input -->
        <input class="file-input" type="file" @change="upload($event.target.files)" accept="application/json">

        <!-- Label -->
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose ABI file
          </span>
        </span>

        <!-- File name -->
        <span class="file-name">
          {{ file && file.name || 'No file uploaded' }}
        </span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Upload from '@/mixins/UploadMixin'
import AbiDecodeService from '@/services/AbiDecodeService'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class UploadAbi extends Mixins(Upload) {
  onLoad (event: ProgressEvent<FileReader>, files: FileList) {
    this.file = Array.from(files)[0]
    this.state.commitAbi(JSON.parse((event.target?.result) as string))

    this.decode()
  }

  decode (): void {
    const constructor = this.state.abi?.functions.find(item => item.name === 'constructor')

    if (!constructor) return

    this.state.commitFields(AbiDecodeService(constructor))
  }
}
</script>
