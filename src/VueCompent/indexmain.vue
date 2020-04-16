<!--  -->
<template>
   <div class='indexmain'>
        <deadline></deadline>

        <router-view></router-view>

        <!-- 关于我们 -->
        <aboutwe></aboutwe>
        <!-- 网站备案信息 -->
        <footerline></footerline>
   </div>
</template>

<script>
// 导入index页面头部
import deadline from './head/deadline.vue'

//导入index页面尾部
import footerline from './bottom/footer.vue'
import aboutwe from './bottom/aboutwe.vue'
    export default {
       data() {
           //这里存放数据
           return {

           };
       },
       //方法集合
       methods: {

       },
       components:{
           deadline,
           footerline,
           aboutwe
       }
    }
</script>

<style>
</style>