import Base from './BaseMixin'
import { Component, Mixins } from 'vue-property-decorator'

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

@Component
export default class UploadMixin extends Mixins(Base) {
  file: File | null = null
  fr: FileReader | null = null

  upload (files: FileList) {
    if (!files.length) return
    
    this.fr = new FileReader()
    
    this.fr.onload = (event) => this.onLoad(event, files)
    this.read(files)
  }

  read (files: FileList) {
    this.fr?.readAsText(files[0])
  }
  
  onLoad(event: ProgressEvent<FileReader>, files: FileList) {}
}
