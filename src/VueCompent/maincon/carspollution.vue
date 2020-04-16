<!-- 城市汽车污染 -->
<template>
   <div class='carspolluction'>
       <div class="container">
           <div class="row">               
               <div class="col-md-6">
                   <div class="about_detail-box">
                       <h3> 城市汽车污染 </h3>
                       <p>
                           交通系统消耗了全球约1／3的能源。以石油产品为燃料的汽车是最主要的现代交通运输工具，它给人们带来方便和快捷的同时，也带来了无法回避的环境问题。<br>
                           根据20世纪七八十年代美国、日本对城市空气污染源的调查，城市空气中90％以上的一氧化碳、<br>60％以上的碳氢化合物和30％以上的氮氧化物来自汽车排放。这些污浊的气体使人类的生存环境受到极大威胁。汽车污染已成为世界性公害，其对于温室气体浓度增加的“贡献”不容忽视。
                       </p>
                       <div>
                           <button>更多</button>
                       </div>
                   </div>
               </div>
               <div class="col-md-6">
                   <div>
                       <img src="img/carpollution.jpg">
                   </div>
               </div>
           </div>
       </div>
       
   </div>
</template>

<script>
   export default {
       data() {
           //这里存放数据
           return {

           };
       },
       //方法集合
       methods: {

       },
   }
</script>

<style>
    .carspolluction{
        padding: 50px 0;
        text-align: left;
    }
    .carspolluction img{
        max-width: 100%;
    }
    .carspolluction .about_detail-box button{
        background-color: #fdd31d;
        color: #fefeff;
        padding: 15px 45px;
        border-radius: 10px;
        font-size: 15px;
        transition: all 0.3s ease 0s;
    }
    .carspolluction .about_detail-box button:hover{
        -webkit-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        transform: translateY(-7px);
    }
</style>