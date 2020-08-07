<template>
    <div>
      <div>id：{{info.id}}</div>
      <div>内容：{{info.text}}</div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      info:''
    }
  },
  mounted(){
        console.log(this.$route.params, this.$route.query);
        this.info=this.$route.params.value
  }   
}
</script>
