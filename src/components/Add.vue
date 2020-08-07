<template>
  <div class="addcontent">
    <div class="item">
      <div class="name">姓名：</div>
      <input placeholder="请输入姓名" v-model="name"/>
    </div>
    <div class="item">
      <div class="name">评价：</div>
      <textarea placeholder="请输入评价" v-model="content"/>
    </div>
    <button @click="submitval">提交</button>
  </div>
</template>
<script>

export default {
  data(){
   return{
     name:'',
     content:''
   }
  },
   props:{
     Additem:Function
   },
    methods:{
      submitval(){
         let name=this.name;
         let content=this.content
         const comnet= { name,content};
         if(!name || !content){
            alert("姓名或者内容为空")
            return false
         }
         this.name='';
         this.content=''
         console.log(comnet)
         this.Additem(comnet);
      }
     
      
     
    }
};
</script>
<style  scoped>
.addcontent{
    width: 50%;
}
.item{
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}
input{
    width: 70%;
    height: 50px;
}
textarea{
    width: 70%;
    height: 400px;
}
</style>