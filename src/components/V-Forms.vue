<template lang="pug">
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
      

</template>

<script>


export default {

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
      }
    }
  },
  methods: {
  submitForm() {
    const news = {
      type: this.typeBlock,
      name: this.textNews
    }
    this.$emit('submitForm', news)
    this.textNews = ''
    this.typeBlock = ''
    }
  },

  watch: {
    typeBlock (value) {
      this.placeholder = this.placeholders[value]
    }
  }

}
</script>

<style>

</style>