<template>
  <div class="field">
    <div class="file has-name is-fullwidth" :class="{'is-info': file }">
      <label class="file-label">
        <!-- Input -->
        <input class="file-input" type="file" @change="upload($event.target.files)" accept=".tvc">

        <!-- Label -->
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose TVC file
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
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class UploadTvc extends Mixins(Upload) {
  read (files: FileList) {
    this.fr?.readAsBinaryString(files[0])
  }

  onLoad (event: ProgressEvent<FileReader>, files: FileList) {
    this.file = Array.from(files)[0]
    this.state.commitBase64(btoa((event.target?.result) as string))
  }
}
</script>
