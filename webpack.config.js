const path = require('path');
const webpack = require('webpack');
//这是在内存中生成html的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//因为vue-loader，15的版本需要再添加plugin的配置。
const  { VueLoaderPlugin } = require('vue-loader')


module.exports = {
		// entry: './src/main.js',
		entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    //另一种方法配置npm run dev2
    devServer: {
        open:false,
        port: 9000,
        contentBase: path.join(__dirname, "src"),
        hot:true
    },
    //只要是插件，都要放到plugins中，配置插件的节点
    plugins:[
      //会帮我们自动在index.html生成一个<script src="bundle.js" type="text/javascript" charset="utf-8"></script>
    	new htmlWebpackPlugin({  //创建一个在内存中生成HTML页面的插件
    		//指定模板页面，将来会根据指定的页面路径去生成内存中的页面
    		template: path.join(__dirname, './src/index.html'),
    		//指定生成的页面名称
    		filename:'index.html'
    	}),
			new VueLoaderPlugin(),
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				Popper: ['popper.js','default']  //在jquery的配置下添加多这一行配置
			})
    ],
    module:{  //这个节点用于配置所有第三方模块 加载器
    	rules: [	//所有第三方模块的匹配规则
    		//test匹配到文件的类型，如css。use使用的加载器
    		{ test: /\.css$/,use:['style-loader','css-loader'] },
    		{ test: /\.less$/,use:['style-loader','css-loader','less-loader'] },
    		// //处理图片路径的loader
    		// /*limit给定的值是图片的大小，单位是byte，如果引用的图片大于或等于给定的limit值，
    		// 则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64格式的字符串*/
    		// /*name属性使用[name].[ext]可以防止图片的名字被改变成hash值，但是为了防止重名还是需要加hash值*/
    		{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7630&name=[hash:8]-[name].[ext]' },
    		{ test: /\.js$/,use:'babel-loader',exclude:/node_modules/ },
				{ test:/\.vue$/,use:'vue-loader'  }, //处理vue文件
				{ test:/\.woff?$|\.woff2?$|\.svg?$|\.ttf?$|\.eot?$/, loaders:'url-loader' }
    	]
		},
		resolve:{
			　extensions: ['.js', '.vue', '.json'],			
			　alias: {			
			// 　　'vue$': 'vue/dist/vue.esm.js',			
			// 　　'@': resolve('src'),			
			// 　　'bootstrap':resolve('src/node_modules/bootstrap'),			
			　}			
		},
};