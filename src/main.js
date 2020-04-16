// main.js是项目的入口文件

//1.导入jQuery包
//import *** from *** 是es6中导入模块的方式
//由于ES6代码太高级了，浏览器会承受不住，所以这一行执行会报错
import $ from 'jquery'
//导入CSS样式表
import './css/index.css'
import './css/index.less'
//注意：webpack默认只能打包处理Js类型的文件，无法处理其他的非js类型的文件
//如果要处理非JS文件，需要手动安装一下合适第三方loader加载器
//1.如果想要打包处理css文件，需要安装npm i style-loader css-loader -D
//2.打开webpack.config.js 这个配置文件，在里面新增一个配置节点，叫做module，是一个对象，在这个对象上，有一个rules属性，这个属性是一个数组，在这个数组中，存放了所有第三方文件的匹配和处理规则

$(function(){
	$('li:odd').css('backgroundColor','yellow')
	$('li:even').css('backgroundColor',function(){
		return '#' + '854689'
	})
	$('#apple').html('aaaaaaaaa')
	$('#apple').css("color","red"); 
})
