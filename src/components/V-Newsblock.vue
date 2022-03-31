<template lang="pug">
  .container
    h2 Блок новостей
      
    template
      component(
        v-for="news in newses"
        :key="news.value"
        :is="'block-' + news.type"
        :content="news.name"
      )

</template>

<script>
import BlockImage from './block-image.vue'
import BlockTittle from './block-tittle.vue'
import BlockText from './block-text.vue'
import BlockSubtittle from './block-subtittle.vue'

export default {
    components: {
    BlockImage,
    BlockTittle,
    BlockText,
    BlockSubtittle
  },
  props: {
    newses: Array,
    default: () => []
  }

}
</script>

<style>

</style>