<template>
    <ul>
        <li v-for="(item,index) in newalist" :key="index">{{item}}</li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            newalist:['news1','news2','news3','news4']
        }
    }
}
</script>