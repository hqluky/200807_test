<template>
  <div class="content">
    <div class="guide">
      <router-link to="/about"  class="link">about</router-link>
      <router-link to="/content" class="link">content</router-link>
    </div>

    <router-view class="main"></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.content{
    width: 60%;
    display: flex;
    margin: 40px auto 0;
}
.guide{
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    flex-direction: column;
    margin-right: 5%;
    height: 100px;
}
.link{
    padding: 10px 0;
    width: 100px;
    text-align: center;
}
</style>