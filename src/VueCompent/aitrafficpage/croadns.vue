<!--  -->
<template>
   <div class='croadns'>
       <div class="panel panel-primary">
			    <div class="panel-heading">
			        <h3 class="panel-title"> 添加任务 </h3>
			    </div>
			    <div class="panel-body form-inline">
			        <label>
			        	搜索城市名称关键字:
			        	<input type="text" value="" class="form-control" v-model="keywords"/>
			        	<br>
			        </label>
                    <br/>
			        <div>城市汽车保有量排序：</div>
			        <label>   	
			        	<input id="sort1" type="button" value="升序" class="btn btn-primary" @click="sort(1)" />
			        	<input id="sort2" type="button" value="降序" class="btn btn-primary" @click="sort(0)" />
			        </label>
			    </div>
			</div>
        <!--table的class去使用bootstrap设置样式-->
			<table class="table table-hover table-bordered table-striped">
				<thead>
					<tr>
						<th>城市ID</th>
						<th>城市名称</th>
						<th>城市汽车保有量</th>
						<th>城市路口链接</th>

					</tr>
				</thead>
				<tbody>
					<tr v-for="item in search(keywords)" :key='item.id'>
						<td > {{ item.id }} </td>
						<td > {{ item.name }} </td>
						<td > {{ item.content }} </td>
						<td >  
							<a style="text-decoration: none;" target="_blank" :href="item.href"> {{ item.href }} </a> 
							<!--<router-link>{{ item.href }}</router-link>-->
							
						</td>
						<!--dateFormat过滤日期-->
						
					</tr>
				</tbody>
			</table>
   </div>
</template>

<script>
   export default {
       data() {
           //这里存放数据
           return {
                id:'',
				name:'',
				content:'',
				//搜索时的关键词keywords
				keywords:'',
				list:[
					{id: 1,name: '北京' ,content:45256,href: "asdkl.com",ctime: new Date() },
					{id: 2,name: '上海' ,content:23546,href: "asdkl.com",ctime: new Date() },
					{id: 3,name: '南京' ,content:45256,href: "asdkl.com",ctime: new Date() },
					{id: 4,name: '武昌' ,content:23546,href: "asdkl.com",ctime: new Date() },
					{id: 5,name: '嘉兴' ,content:45256,href: "asdkl.com",ctime: new Date() },
					{id: 6,name: '湖州' ,content:23546,href: "asdkl.com",ctime: new Date() },
					{id: 7,name: '昆明' ,content:45256,href: "asdkl.com",ctime: new Date() },
					{id: 8,name: '酒泉' ,content:23546,href: "http://www.baidu.com",ctime: new Date() },
				]
           };
       },
       //方法集合
       methods: {
            search(keywords){ //根据关键字进行数据搜索
						var newList = []
						//搜索方法
						this.list.filter(item=>{
							//keywords为空时，显示全部列表
							if(item.name.includes(keywords) == true){
								newList.push(item)
							}
						})
						return newList
					},
					sort(n){
						this.list.sort(function(a,b){
							if(n === 1){  //升序
								return a.content - b.content;
							}else{ //降序
								return b.content - a.content;
							}
						})	
					}
       },
   }
</script>

<style>
    .croadns{
        margin-top: 50px;
        padding: 50px 0;
    }
    .croadns .panel-body{
        padding: 50px 0;
    }
</style>