<template>
    <div class="content">
         <div>
            <input type="checkbox" v-model="allcheck"></input>
             <div class="text">已完成 {{completenum}} / 全部 {{todolistnum}}</div>
         </div>
         <div class="delete" @click="deleteNum" v-if="completenum>0">删除已完成任务</div>
       
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed:{
       ...mapGetters(['completenum','todolistnum']),//映射函数
        allcheck:{
           
            get(){
               return this.$store.getters.getcheck;
            },
            set(val){
               this.$store.dispatch('setallvalue',val) 
            }
        }
        
    },
    methods:{
        ...mapActions(['deleteNum'])
    }
}
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text {
  margin-left: 10px;
}
.delete {
  background-color: red;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  font-size: 15px;

  padding: 0 2%;
}
</style>