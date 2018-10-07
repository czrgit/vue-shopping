<template>
    <div class="Tabbar-box">
        <van-tabbar v-model="active" >
            <van-tabbar-item icon="wap-home" to="/">商场</van-tabbar-item>
            <van-tabbar-item icon="chat" dot to="/Category">分类</van-tabbar-item>
            <van-tabbar-item icon="cart" to="/Cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/Personal">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  props:["goactive"],
  data() {
    return {
      active:this.goactive
    }
  }
}
</script>
<style scoped>

</style>


