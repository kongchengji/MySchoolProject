<!-- 城市汽车保有量 -->
<template>
   <div class='citycars'>
       <div class="container">
           <div class="row">
               <div class="col-md-6">
                   <div>
                       <img src="img/citycars.png">
                   </div>
               </div>
               <div class="col-md-6">
                   <div class="about_detail-box">
                       <h3> 城市汽车保有量 </h3>
                       <p>
                           中新经纬客户端4月9日电 9日，国务院联防联控机制就应对疫情影响稳定和扩大汽车消费工作情况举行发布会，国家发展改革委产业发展司副司长蔡荣华介绍，目前，中国全国汽车保有量大约在2.6亿辆左右，千人汽车保有量从原来不到10辆快速增长到180多辆，达到全球平均水平。

　　<br>有记者问，2018年以来我国汽车产销连续下滑，是不是意味着我们汽车消费市场潜力已经很有限了？如何看待未来我国汽车产业的市场走势？

　　<br>蔡荣华表示，目前我国汽车产业已经走过了快速发展的阶段，进入由数量扩张向质量提升的转型时期，但产业长期稳定向好的发展态势没有改变，未来市场空间依然非常广阔。我国汽车年产量和销量从原来不足一百万辆持续增长到近年来的2800万辆左右，连续多年位居世界第一。目前，我国全国汽车保有量大约在2.6亿辆左右，千人汽车保有量从原来不到10辆快速增长到180多辆，达到全球平均水平。
                       </p>
                       <div>
                           <router-link to="/home/cityrnums"><button>更多</button></router-link>
                       </div>
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
    .citycars{
        padding: 50px 0;
        text-align: right;
    }
    .citycars img{
        width: 100%;
    }
    .citycars .about_detail-box button{
        background-color: #6ebca8;
        color: #fefeff;
        padding: 15px 45px;
        border-radius: 10px;
        font-size: 15px;
        transition: all 0.3s ease 0s;
    }
    .citycars .about_detail-box button:hover{
        -webkit-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        transform: translateY(-7px);
    }
</style>