<template>
    <div>
        <ul >
        <li v-for="(item,index) in message" :key="item.id" @click="detaile($event)" :data-text="item.name" :data-id="item.id">{{item.name}}</li>
    </ul>
    
    </div>
    
</template>
<script>
export default {
    data(){
        return{
         message:'',
       
        }
    },
    methods:{
      detaile(e){
       console.log(e,e.target.dataset.text);
       let text=e.target.dataset.text;
       let id=e.target.dataset.id;
       const value={text,id}
       console.log(value)
    //    this.$router.push({name:'detaile',params:{text:1}})
       //通过路由实现页面的跳转   编程式跳转
       this.$router.push({name:"detaile", params: {value: value}})
      }
    },
    mounted(){
        //模拟ajax请求
        setTimeout(()=>{
          const message=[{id:1,name:'吃饭'},{id:2,name:'睡觉'},{id:3,name:'打豆豆'}];
          this.message=message;
        },1000)
    }
}
</script>