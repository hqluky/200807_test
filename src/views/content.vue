<template>
  <div>
    <ul class="guide_ul">
      <li>
        <router-link to="/content/news">新闻</router-link>
      </li>
      <li>
        <router-link to="/content/message">消息</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style >
.guide_ul{
    display: flex;
}
.guide_ul li{
    width: 50px;
    text-align: left;

}
ul{
    padding: 0;
}
li{
    list-style: none;
}
</style>