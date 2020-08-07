<template>
  <div class="contentitem">
    <div class="item">
      <div class="name">{{item.name}}说：</div>
      <div class="content">{{item.content}}</div>
      <div class="delete" @click="itemdelete">删除</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    deleteItem:Function,
    index:Number
  },
  methods:{
    itemdelete:function(){
      const {item,deleteItem,index}=this;
      if(window.confirm(`确定删除${item.name}的评论吗`)){
        deleteItem(index)
      }
    }
  }
};
</script>
<style scoped>
.contentitem {
  width: 100%;
}
.item {
  width: 100%;
  padding: 20px 5%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  position: relative;
  margin-bottom: 30px;
}
.content {
  text-indent: 50px;
}
.delete{
  position: absolute;
  top: 0;
  right: 0;
  color: red;
}
</style>