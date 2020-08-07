<template>
  <ul>
    <li v-for="(todo,index) in $store.state.todolist">
      <v-homeitem :todo="todo" :index="index"></v-homeitem>
    </li>
  </ul>
</template>
<script>
import homeitem from "./homeItem";
import storage from "../../Storage/storage";
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: ""
    };
  },
  mounted() {
    //读取缓存中的数据
    this.$store.dispatch("getStorge");
  },
  computed: {
    // ...mapState['todolist'], //通过映射函数得到todolist的值
    todolist() {
      //返回todolist数据,可以监听todolist的变化
      return this.$store.state.todolist;
    }
  },

  //监听todolist的变化并将其存入缓存
  watch: {
    //监听功能
    todolist: {
      deep: true,
      handler() {
        storage.setStorage(this.$store.state.todolist); //存入缓存
      }
    }
  },
  components: {
    "v-homeitem": homeitem
  }
};
</script>
<style scoped>
ul {
  padding-inline-start: 0px;
  margin-top: 30px;
  border: 1px solid #ddd;
}
li {
  list-style-type: none;
  padding: 0 3%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
}
li:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
.gray {
  background-color: gray;
}
.white {
  background-color: white;
}
</style>