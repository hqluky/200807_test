<template>
  <div>
    <h1>对Vue进行评价</h1>
    <div class="contentapp">
      <v-add :Additem="Additem"></v-add>
      <v-list :conments="conments" :deleteItem="deleteItem"></v-list>
    </div>
    <hr />
    <br>
      <v-home></v-home>
    <hr/>
    <v-guide></v-guide>
  </div>
</template>

<script>
import list from "./components/List.vue";
import add from "./components/Add.vue";
import guide from "./views/guide.vue";
import home from './components/tabList/Home.vue'
export default {
  name: "App",
  data() {
    return {
      conments: [
        {
          name: "Cat",
          content: "vue 还不错"
        },
        {
          name: "Dog",
          content: "vue so so"
        },
        {
          name: "Alice",
          content: "vue good good"
        }
      ]
    };
  },
  methods: {
    //数据在哪个页面，操作数据的方法就写在哪个页面
    //添加数据
    Additem(item) {
      this.conments.unshift(item);
      localStorage.setItem("data", JSON.stringify(this.conments));
    },
    //删除数据
    deleteItem(index) {
      this.conments.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(this.conments));
    }
  },
  mounted() {
    var list = JSON.parse(localStorage.getItem("data"));
    if (list) {
      this.conments = list;
    }
  },

  components: {
    "v-list": list,
    "v-add": add,
    "v-guide": guide,
    'v-home':home
  }
};
</script>

<style scoped>
.contentapp {
  display: flex;
  margin-bottom: 40px;
}
</style>
