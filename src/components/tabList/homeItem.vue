<template>
  <div @mouseenter="move(1)" @mouseleave="move(2)">
    <div>
      <input type="checkbox" v-model="todo.check" />
      <div class="text">{{todo.content}}</div>
    </div>
    <div class="delete" v-show="show" @click="deleteItem(index)">删除</div>
  </div>
</template>
<script>
import storage from '../../Storage/storage';
export default {
  props: {
  
    todo: Object,
    index: Number
  },
  data() {
    return {
        show:false
    };
  },
  methods: {
    move(e) {
      if (e == 1) {
        this.show = true;
      } else if (e == 2) {
        this.show = false;
      }
    },
    deleteItem(index) {
      this.$store.dispatch("deleteItem",index);
    },
   
  },
  
};
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

  height: 30px;
  line-height: 30px;
  font-size: 15px;

  padding: 0 2%;
}
</style>