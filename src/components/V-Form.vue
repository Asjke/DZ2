<template lang="pug">
  .container
      h2 Формы
      Form(@submit.prevent="submitForm")  
        el-select(
          v-model="typeBlock"
          placeholder="Выберите из списка"
        )
          el-option(
            v-for="item of typeBlocks"
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

        ul
          li(v-for="item of newsBlock"
          :key="item"
          ) {{ item }}
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
        
      ]
    }
  },
  methods: {
    submitForm() {
      console.log(this.textNews)
      console.log(this.typeBlock)
      this.newsBlock.push(this.textNews)
      console.log(this.newsBlock)
      this.textNews = ''


    }
  }

}
</script>

<style scoped>
.container {
  width: 400px;
  padding: 0 20px;
}

</style>