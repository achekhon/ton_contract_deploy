<template>
  <div class="cp loading">
    <img :src="`${publicPath}img/loading.png`" >
  </div>
</template>

<script lang="ts">
import Base from '@/mixins/BaseMixin'
import { Mixins } from 'vue-property-decorator'

export default class Loading extends Mixins(Base) {}
</script>
