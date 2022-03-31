<template lang="pug">
  .img-container
    img(:src="content")
</template>

<script>
export default {
  props: {
    content: String
  }

}
</script>

<style scoped>
.img-container{
display: flex;
  align-items: center;
  justify-content: center;
}
.img-container img{
  vertical-align: middle;
  width: 90%;


}
</style>