<!--  -->
<template>
   <div class='pollution'>
       <div class="container">
           <div class="row justify-content-center text-center">
               <div class="col-lg-6">
                   <h2>你是否了解汽车怠速会消耗多少资源</h2>
               </div>
           </div>
       </div>
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <h3>汽车排量情况表</h3>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">车型</th>
                        <th scope="col">排量</th>
                        <th scope="col">怠速油耗(mL/s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in qcdsyh" :key="i.id">
                            <th scope="row">{{ i.id }}</th>
                            <td>{{ i.ctype }}</td>
                            <td>{{ i.pailiang }}</td>
                            <td>{{ i.youhao }}</td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-center" style="font-size:12px">注：汽车开空调时要比平时增加0.05mL/s</p>
                <p style="color:orange">结论:经过分析可得汽车怠速油耗，在包括公交车载重车之内的情况下，等待绿灯的时候平均每辆车油耗为0.8L/h（800ml/3600s），即0.22ml/s。</p>
           </div>
       </div>
       <!-- 减少等待时间带来的经济效益表 -->
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <h3>减少怠速时间所带来的经济效益</h3>
               <p>据表一，以1.8排量的大众帕萨特的怠速油耗（0.222--0.306 mL/s ）为例，截止2018年7月，昆明市汽车保有量259万辆【2】，为计算方便以三分之一左右约100万辆来计算，停止等待1秒至15秒所节约油量及带来的经济效益如下表：</p>
               <p class="text-center" style="color:red;font-size:12px">计算公式：经济效益=等待时间*节约油量*油价<br>注：平均油价为7元/L</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">减少等待时间（s）</th>
                        <th scope="col">节约最低汽油（L）</th>
                        <th scope="col">经济效益（元）</th>
                        <th scope="col">节约最高汽油（L）</th>
                        <th scope="col">经济效益（元）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in jsdsjj" :key="i.id">
                            <th scope="row">{{ i.id }}</th>
                            <td>{{ i.waittimes }}</td>
                            <td>{{ i.savegos }}</td>
                            <td>{{ i.benefit }}</td>
                            <td>{{ i.savemax }}</td>
                            <td>{{ i.maxben }}</td>
                        </tr>
                    </tbody>
                </table>
           </div>
       </div>
       <!-- 昆明市100万辆汽车如果每天减少等待1秒或15秒，一年带来的经济效益如下 -->
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <p>昆明市100万辆汽车如果每天减少等待1秒或15秒，一年带来的经济效益如下</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">减少等待时间（s）</th>
                        <th scope="col">节约最低汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        <th scope="col">节约最高汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in jswait" :key="i.id">
                        <tr  v-if="i.id<3">
                            <th scope="row" >{{ i.id }}</th>
                            <td>{{ i.waittimes }}</td>
                            <td>{{ i.savegos }}</td>
                            <td>{{ i.benefit }}</td>
                            <td>{{ i.savemax }}</td>
                            <td>{{ i.maxben }}</td>
                        </tr>
                    </tbody>
                </table>
                <p style="color:orange">结论:即昆明市100万辆轿车在一年内平均减少怠速1秒至15秒，可节约汽油约8.1万升—167.54万升，所带来的经济效益约为：56万元—1172万元</p>
           </div>
           <div class="col-sm-8">
               <p>截止2018年6月，全国汽车保有量3.19亿辆【2】，以大约三分之一1亿辆来计算，一年每天减少等待1秒及15秒节约的汽油量及经济效益如下：</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">减少等待时间（s）</th>
                        <th scope="col">节约最低汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        <th scope="col">节约最高汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in jswait" :key="i.id">
                        <tr v-if="i.id>=3">
                            <th scope="row" >{{ i.id }}</th>
                            <td>{{ i.waittimes }}</td>
                            <td>{{ i.savegos }}</td>
                            <td>{{ i.benefit }}</td>
                            <td>{{ i.savemax }}</td>
                            <td>{{ i.maxben }}</td>
                        </tr>
                    </tbody>
                </table>
                <p style="color:orange">结论:即全国1亿万辆轿车在一年内平均减少怠速1秒至15秒，可节约汽油约810.3万升—16753.5万升，所带来的经济效益约为：5672.1万元—117274.5万元</p>
           </div>
       </div>
       <!-- 减少怠速降低的排放量 -->
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <h3>减少怠速降低的排放量</h3>
               <p>据统计，汽车发动机每燃烧1千克汽油，要消耗15千克新鲜空气，
                   同时排出150—200克的一氧化碳（CO）、4—8克的碳氢化合物、4—20克的氧化氮等污染物</p>
               <p class="text-center" style="color:red;font-size:12px">根据公式：质量=密度*体积，汽油的平均密度大约0.73kg/L【4】，所以1L汽油大约有0.73千克</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">减少等待时间（s）</th>
                        <th scope="col">节约最低汽油（L）</th>
                        <th scope="col">经济效益（元）</th>
                        <th scope="col">节约最高汽油（L）</th>
                        <th scope="col">经济效益（元）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in jsdsjj" :key="i.id">
                            <th scope="row">{{ i.id }}</th>
                            <td>{{ i.waittimes }}</td>
                            <td>{{ i.savegos }}</td>
                            <td>{{ i.benefit }}</td>
                            <td>{{ i.savemax }}</td>
                            <td>{{ i.maxben }}</td>
                        </tr>
                    </tbody>
                </table>
           </div>
       </div>
   </div>
</template>

<script>
   export default {
       data() {
           //这里存放数据
           return {
            //    汽车排量情况表
               qcdsyh:[
                   {
                       id:1,
                       ctype:'奥迪A8',
                       pailiang:3.0,
                       youhao:'0.361--0.417'
                   },
                   {
                       id:2,
                       ctype:'奥迪A8',
                       pailiang:3.0,
                       youhao:'0.361--0.417'
                   },
                   {
                       id:3,
                       ctype:'奥迪A8',
                       pailiang:3.0,
                       youhao:'0.361--0.417'
                   },
                   {
                       id:4,
                       ctype:'奥迪A8',
                       pailiang:3.0,
                       youhao:'0.361--0.417'
                   }
               ],

            //减少怠速时间所带来的经济效益   减少等待时间（s）	节约最低汽油（L）	经济效益（元）	节约最高汽油（L）	经济效益（元）
                jsdsjj:[ 
                    {
                        id:1,
                        waittimes:1,
                        savegos:222,
                        benefit:1554,
                        savemax:306,
                        maxben:2124
                    },
                    {
                        id:2,
                        waittimes:1,
                        savegos:222,
                        benefit:1554,
                        savemax:306,
                        maxben:2124
                    },
                    {
                        id:3,
                        waittimes:1,
                        savegos:222,
                        benefit:1554,
                        savemax:306,
                        maxben:2124
                    }
                ],
            // 减少等待1秒或15秒  			
                jswait:[ 				
                    {
                        id:1,
                        waittimes:'1*365',
                        savegos:8.10,
                        benefit:56.72,
                        savemax:11.17,
                        maxben:77.53
                    },    				
                    {
                        id:2,
                        waittimes:'15*365=5475',
                        savegos:121.55,
                        benefit:56.72,
                        savemax:167.54,
                        maxben:1172.75
                    },
                    {
                        id:3,
                        waittimes:'1*365',
                        savegos:8.10,
                        benefit:56.72,
                        savemax:11.17,
                        maxben:77.53
                    },    				
                    {
                        id:4,
                        waittimes:'15*365=5475',
                        savegos:121.55,
                        benefit:56.72,
                        savemax:167.54,
                        maxben:1172.75
                    }
                ] 
           };
       },
       //方法集合
       methods: {

       },
   }
</script>

<style>
    .pollution{
        margin-top: 50px;
        padding: 50px 0;
    }
    .row{
        padding: 15px 0;
    }
</style>