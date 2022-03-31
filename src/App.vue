<template lang="pug">
  #app.wrapper
    VForms(@submitForm="submitForm")
    VNewsblock(:newses='newses')

  </template>

<script>
import VForms from './components/V-Forms.vue'
import VNewsblock from './components/V-Newsblock.vue'


export default {
  components: {
    VForms,
    VNewsblock,
  },

  data () {
    return {
      newses: []
    }
  },

  methods: {
    submitForm (news) {
      this.newses.push(news)
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