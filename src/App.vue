<template lang="pug">
  #app.wrapper
    .main
      .container
        h2 Формы
        Form(@submit.prevent="submitForm")  
          el-select(
            v-model="typeBlock.name"
            placeholder="Выберите из списка"
          )
            el-option(
              v-for="typeBlock.value of typeBlocks"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            )

          el-input(
            type="textarea"
            :rows="10"
            v-model="textNews"
          )
          el-button.prevent(type="success" native-type="submit") Добавить блок
      .container
        h2 Блок новостей
          
        span(v-for="item of newsBlock"
        :key="item"
        v-html="htmlfoo(item)"
        )
  </template>

<script>
export default {
  data () {
    return {
      textNews: '',
      typeBlock: '',
      typeBlocks: [
        {label: "Заголовок", value: "title"},
        {label: "Подзаголовок", value: "subtitle"},
        {label: "Изображение", value: "image"},
        {label: "Текст", value: "text"}
      ],
      newsBlock: [
        {}
      ],
      newsTypeBlock: []
    }
  },
  methods: {
    submitForm() {
      // console.log(this.textNews)
      // console.log(this.typeBlock)
  
      // this.newsTypeBlock.push(this.typeBlock)
      // console.log(this.newsTypeBlock)
      // this.textNews = ''


    },
    addNews () {

    },
    htmlfoo() {
      // if 
      // console.log(el.value)
      // return `<h1>${el}</h1> `

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