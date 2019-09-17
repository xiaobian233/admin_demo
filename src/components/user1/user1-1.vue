<template>
    <div id="user1-1">
        <el-row>
            <el-col :span="24">
                <h2>Vue/Cil配置项===vue.config.js</h2>
                <br>
                <h4>组件传值</h4>
                <div class="dv">
                    <p>组件之间传值: this.$on("test",(v)=>{})  this.$emit("test","哈哈哈哈")</p>
                    <p>通过$e传递两个组件之间的数据</p>
                    <p>父子组件传值: 父 => msg="Hello Vue" ===== 子 => props:{msg:String} / props:["msg"]</p>
                    <br>
                    <p>子父组件传值: 子 => this.$emit("myFather","这是传递给父组件的数据") ==== 父 => @myfather="show"
                        show(v){ // v为子组件的值}</p>
                    <br>
                    <p>Route传值: this.$route.query &nbsp;/&nbsp; this.$route.params &nbsp;&nbsp;注:js里面则是 router</p>
                    <p>sessionStorage / locaStorage</p>
                    <p>VueX</p>
                </div>
                <br>
                <h3>icon的使用</h3>
                <p style="color: red;font-size: 18px;margin: 10px 0 0 0 ;">在style导入 @import
                    "//at.alicdn.com/t/font_1412653_opwwtj86gta.css" 使用: <i class="iconfont icon-tupian"></i> -- <i
                        class="iconfont icon-xingji"></i> -- <i class="iconfont icon-xihuan"></i> </p>
                <br>
                <p style="color:blue">引入Vue 本地css样式 @import "style.css"; &nbsp;&nbsp; Jquery导入 import $ from 'jquery' ;
                </p>
                <br>
                <h3 style="color:yellowgreen">v-model 的实现原理是 通过 @input事件去监听以及 v-bing:value去回显数据 </h3>
                <br>
                <p> require &nbsp;/&nbsp; import => 导入 (export default == "默认导出不需要使用解构赋值") === export 导出 &nbsp;&nbsp;
                    (必须先导出在导入) </p>
                <!-- <br>     -->
                <div>
                    <h4>export(游览器不认识) === 必须借助babel转换成es5的语法 例: export const a=0;</h4>
                    <p>例:</p>
                    <p>&nbsp;&nbsp;&nbsp; object.defineperty(exports,"__esModule",{value:true})</p>
                    <p>&nbsp;&nbsp;&nbsp; exports.a = void 0;</p>
                    <p>&nbsp;&nbsp;&nbsp; var a = 10</p>
                    <p>&nbsp;&nbsp;&nbsp; exports.a=a</p>
                </div>
                <br>
                <h4><a style="color: red" href="https://www.bilibili.com/video/av60676047/?p=2">webpack 搭建Vue/cli
                        3.0版本===>(视频跳转页面)</a></h4>
                <br>
                <h4><a style="color: red;"
                        href="https://mp.weixin.qq.com/s?__biz=MzIwNTA0NTczMA==&mid=2459047094&idx=1&sn=d0b450336b0a4c189889acc21bfa2121&scene=19#wechat_redirect">webpack.config.js
                        ===> (配置跳转页面)</a></h4>
                <div class="dv" style="">
                    <p>//引入插件 ===== webpack 打包快捷键</p>
                    <p>const path=require("path") ===== 路径 </p>
                    <p>const html_p=require("html-webpack-plugin") ==== 生成html代码(会重复添加)</p>
                    <p>const css_p=require("extract-text-webpack-plugin") ==== 生成css文件</p>
                    <p>const clean_p=require("clean-webpack-plugin") ==== 删除之前的文件夹</p>
                    <p>vue-loader &nbsp;/&nbsp; vue-template-compiler &nbsp;/&nbsp;(vue-style-loader ==
                        vue.css里面的文件打包) &nbsp;/&nbsp; webpack-dev-server === 自动运行 //需要下载 + 下面插件一起使用</p>
                    <p>const vue_p=require("vue-loader/lib/plugin") ==== 单独搭建需要 url-loader 解析</p>
                    <p>module.exports={</p>
                    <div style="margin: 0 0 0 25px; ">
                        <p>entrl:"./src/index.js"; ==== // 入口文件</p>
                        <p>output:{</p>
                        <div style="margin: 0 0 0 25px; ">
                            <p>mode:"development", //打包后不压缩,开发模式/生产模式 == production(压缩) </p>
                            <p>filename:"js/main.js"; ==== //打包后js文件名</p>
                            <p>path:path.resolve(__dirname,"dist"); ==== // 打包后dist文件名---(dist/js)---打包两层 </p>
                        </div>
                        <p>},</p>
                    </div>
                    <p>devServer:{</p>
                    <div style="margin: 0 0 0 25px; ">
                        <p>contentBase:"./dist" //默认自动打开文件夹</p>
                    </div>
                    <p>}</p>
                    <div style="margin: 0 0 0 25px; ">
                        <p>module:{</p>
                        <div style="margin: 0 0 0 25px; ">
                            <p>rules:[</p>
                            <div style="margin: 0 0 0 25px; ">
                                <p>{</p>
                                <div style="margin: 0 0 0 25px; ">
                                    <p>test : /\.vue$/, //html</p>
                                    <p>loader : "vue-loader" //使用loader解析</p>
                                </div>
                                <p>},</p>
                                <p>{</p>
                                <div style="margin: 0 0 0 25px; ">
                                    <p>test : /\.(png|jpg|gif|ico)/, //img</p>
                                    <p>loader : "vue-loader?limit=20480&name=img/[name].[ext]" //文件大于20k的img/本文件名字.原本后缀
                                    </p>
                                </div>
                                <p>},</p>
                                <p>{</p>
                                <div style="margin: 0 0 0 25px; ">
                                    <p>test : /\.js/, //js -- 通过babel来编译</p>
                                    <p>exclude:/node_modules/, //排除node_modules文件夹</p>
                                    <p>loader : "babel-loader"</p>
                                </div>
                                <p>},</p>
                                <p>{</p>
                                <div style="margin: 0 0 0 25px; ">
                                    <p>test : /\.css$/, //css == scoped--(交集选择器)</p>
                                    <p>loader :css_p.extract({ </p>
                                    <div style="margin: 0 0 0 25px; ">
                                        <p>fallback:["style-loader","vue-style-loader"],</p>
                                        <p>use:"css-loader"</p>
                                    </div>
                                    <p>})</p>
                                </div>
                                <p>},</p>
                            </div>
                            <p>]</p>
                        </div>
                        <p>},</p>
                    </div>
                    <div style="margin: 0 0 0 25px; ">
                        <p>plugins:[</p>
                        <div style="margin: 0 0 0 25px; ">
                            <p>new clean_p(["dist"])</p>
                            <p>new html_p({ </p>
                            <div style="margin: 0 0 0 25px; ">
                                template:"./public/index.html", //这里面的html怎么样---打包后的html就怎么样
                            </div>
                            <p>}),</p>
                            <p>new vue_p()</p>
                            <p>new css_p("css/main.css") //生成配置css文件</p>
                        </div>
                        <p>]</p>
                    </div>
                    <p>}</p>
                    <p style="color:blue;">上传git的时候 == .gitignore 里面可以配置不需要上传的文件</p>
                </div>
                <br>
                <h4 @touchstart='touchStart' @touchmove.stop.pervent="touchmove" @touchend.stop.prevent="touchend">
                    vue/router</h4>
                <div class="dv">
                    <p>import home from "@/view/home" //@ == src</p>
                    <p>路由懒加载: ()=> import ("./home")</p>
                    <div style="margin: 0 0 0 25px; ">
                        <p>beforeEach <p>
                                <p>beforeRouteUpdate </p>
                                <p>beforeEnter </p>
                                <p>beforeRouteEnter </p>
                                <p>beforeResolve</p>
                                <p>afterEach</p>
                                <p>DOM更新完后触发回调 this.$nextTick(){ } / 使用类似于 mounted(){}</p>
                                <p>beforeRouteLeave</p>
                    </div>
                </div>
                <br>
                <h4><a href="https://www.bilibili.com/video/av60676047/?p=4" style="color:red">Vue.config.js ===>
                        (视频跳转页面)</a></h4>
                <br>
                <h4><a href="https://blog.csdn.net/weixin_34235457/article/details/91375759" style="color:red">Vue.config.js完整配置项</a></h4>
                <div class="dv">
                    <p>module.exports = {</p>
                    <div style="margin: 0 0 0 25px; ">
                        <p>publicPath:"/", =="默认路径"/->可修改为 /myDist/dist</p>
                        <p>outputDir:"dist", //打包文件名</p>
                        <!-- <p>assetsDir:'',</p> -->
                        <!-- <p>indexPath:'index.html</p> -->
                        <p>css{</p>
                        <div style="margin: 0 0 0 25px">
                            <p>extract:false, //开发环境:false,生产环境:true</p>
                        </div>
                        <p>},</p>
                        <p>devServer{ //后台服务器与前台应用不在一个服务器时代理</p>
                        <div style="margin: 0 0 0 25px">
                            <p>proxy:{</p>
                            <div style="margin: 0 0 0 25px">
                                <p>'/api': {</p>
                                <div style="margin: 0 0 0 25px">
                                    <p> target:"192.168.1.8:8080",</p>
                                    <p>secure: false, //是否为https接口</p>
                                    <p>changeOrigin: true //解决跨域</p>

                                </div>
                                <p>},</p>
                                <!-- <p>'/api': {</p>
                                <div style="margin: 0 0 0 25px">
                                    <p> target:"192.168.1.8:8080",</p>
                                    <p>ws: true,</p>
                                    <p>changeOrigin: true</p>
                                </div>
                                <p>}</p> -->
                            </div>
                            <p>},</p>
                        </div>
                        <p>port: 8080, //端口</p>
                        <p>},</p>
                        <p></p>
                    </div>
                    <p>},</p>
                    <p>chainWebpack:config =>{ 配置代理表符 @ </p>
                    <p style="margin: 0 0 0 30px;color: blue;">// const reslove=dir=>return path.join(__dirname,dir)
                        必须配置</p>
                    <div style="margin: 0 0 0 25px">
                        <p> config.resolve.alias.set("_",resolve("src/component"))</p>
                    </div>
                    <p>}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
    export default {
        methods: {
            touchStart($e) {
                console.log(111);
                console.log($e.targetTouches[0].clientY, 222);
            },
            touchmove() {
                console.log(333);

            },
            touchend() {
                console.log(444);

            }
        },
    }
</script>
//scoped 类似于添加了一个类 / 使用了交集选择器
<style lang="less" scoped>
    @import "//at.alicdn.com/t/font_1412653_25edktdkuem.css";

    #user1-1 {
        box-sizing: border-box;
        padding: 0 25px;

        .dv {
            border-radius: 10px;
            margin: 15px 0px;
            background: #888;
            border: 1px solid #ccc;
            padding: 10px;
            color: #f9f9f9;
            box-shadow: 0px 0px 10px 10px #ccc;

            p {
                margin: 10px;
            }
        }

        /* 交集选择器 - avtive */
        .el-menu-vertical-demo .el-menu .el-menu-item.is-active {
            //改变颜色
            color: red;
        }
    }
</style>