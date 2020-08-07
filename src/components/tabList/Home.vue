<template>
    <div class="inputcontent">
        <input placeholder="请输入你的任务名称，回车键确认" @keydown.enter="keydown" v-model="content"></input>
        <v-homelist ></v-homelist>
        <v-homebottom ></v-homebottom>
    </div>
    
</template>
<script>
import homelist from './homeList';
import homebottom from './homeBottom';
import storage from '../../Storage/storage';
export default {
    data(){
        return{
            content:'',
            check:false
        }
    },
    components:{
        'v-homelist':homelist,
        'v-homebottom':homebottom
    },
    methods:{
       keydown(e){
           if(e.keyCode===13){
               this.$store.dispatch("addTodo",this.content);
               console.log(this.$store.state.todolist)
               this.content='';
           }
       },
    },
  
  
}
</script>
<style scoped>
.inputcontent{
  width: 60%;
  margin: 20px auto;
  padding: 20px;
  border:1px solid #ddd;

}
input{
    width: 100%;
    padding: 8px 3%;
    box-sizing: border-box;
}
</style>