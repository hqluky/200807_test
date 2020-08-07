<template>
     <div class="content">
        <p>评论回复</p>
        <div v-show="conments.length==0">暂无评论</div>
        <v-item v-for="(item,index) in conments" :item="item" :deleteItem="deleteItem" :index="index" :key="index"></v-item>
     </div>
</template>
<script>

import item from './Item.vue'
export default {
    props:{
       conments: Array,
       deleteItem:Function
    },
    components:{
       'v-item':item
    }
}
</script>
<style scoped>
.content{
    width: 50%;
}
</style>