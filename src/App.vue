<template lang="pug">
  #app.wrapper
    .main
      .container
        h2 Формы
        Form(@submit.prevent="submitForm")  

          el-select.card(
            v-model="typeBlock"
            placeholder="Выберите из списка"
          )
            el-option(
              v-for="item of typeBlocks"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            )

          el-input.card(
            type="textarea"
            :rows="10"
            v-model="textNews"
            :placeholder="placeholder"
          )
          el-button.prevent(
            type="success" 
            native-type="submit"
            :disabled="!typeBlock.length || !textNews.length "
            ) Добавить блок
      
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
import BlockImage from './components/block-image.vue'
import BlockTittle from './components/block-tittle.vue'
import BlockText from './components/block-text.vue'
import BlockSubtittle from './components/block-subtittle.vue'

export default {
  components: {
    BlockImage,
    BlockTittle,
    BlockText,
    BlockSubtittle

  },
  data () {
    return {
      textNews: '',
      typeBlock: '',
      typeBlocks: [
        {label: "Заголовок", value: "tittle"},
        {label: "Подзаголовок", value: "subtittle"},
        {label: "Изображение", value: "image"},
        {label: "Текст", value: "text"}
      ],
      placeholder: '',
      placeholders: {
        tittle: "Введите заголовок",
        subtittle: "Введите подзаголовок",
        image: "Вставьте url картинки", 
        text: "Введите текст", 
      },
      newses: [],
      news: {
        name: '',
        type: ''
      }
    }
  },
  watch: {
    typeBlock (value) {
      this.placeholder = this.placeholders[value]
    }
  },

  methods: {
    submitForm() {
      this.news.name = this.textNews
      this.news.type = this.typeBlock
      this.newses.push(this.news)

      this.news = {
        name: '',
        type: ''
      }
      this.textNews = ''
      this.typeBlock = ''
    }

  }
}  



</script>

<style scoped>
.container {
  width: 400px;
  padding: 0 20px;
}
li {
  list-style: none;
}



</style>