<template>
    <div id="user2-1">
        <h2>Vue/Api</h2>
        <br>
        <div class="dv">
            <p>Vue.config.devtools=true ----------// 是否允许vue-devtools检测代码</p>
            <p>Vue.config.keyCodes.enter=13 ----//@keyup.enter自定义键盘码</p>
            <p>Vue.config.productionTip=false ---//阻止Vue在启动是生产提示</p>
            <p>Vue.nextTick(()=>{ })/this.$nextTick(()=>{ })--//获取更新后的DOM/修改数据后获取DOM</p>
            <p>Vue.directive("myDir",{})
                --------//在bind--只调用一次,inserted--插入时触发,update--DOM更新后触发,componentdated--所有子组件全部更新后触发,unbind--解绑事件</p>
            <p>Vue.filter("maFilter",()=>{ return}) {aa | maFilter} ---//全局过滤器</p>
            <p>虚拟DOM:使用对象去模拟一个DOM树</p>
            <p>具名插槽: < slot name="one"></ slot> ----/具名插槽 < template v-slot:one></ template> ----//缩写 #one</p>
            <p>插槽:当组件内只有一个插槽时: v-slot="slotProps"</p>
            <p>动态插槽: #:[propsName] ----//传入的 propsName 可以动态改变</p>
            <p>{{ones}}</p>
            <!-- <p>作用域插槽: < v-pre slot name="three" :three="three">{{user.name}}</ slot>  </p> -->
            <p>this.$ slots可以用来访问页面上所有的具名插槽 ---/--- this.scopedSlots用来访问作用域插槽</p>
            <p>props:["title","name"]</p>
            <p>props:{</p>
            <div style="margin: 0 0 0 25px">
                <p>title:"String",</p>
                <p>name:"string</p>
                <p>age:{</p>
                    <div style="margin: 0 0 0 25px">
                        <p>default:100 ----//默认值</p>
                    </div>
                    <p>}</p>
            </div>
            <p>}</p>
            <p>keep-alive:两个方法 < keep-alive :max="10" include="keep">keep组件将会被缓存< /keep-alive> /--------/ < keep-alive exclude="keep">keep组件不会被缓存< /keep-alive></p>
            <p>this.$on("may",(v)=>{})  ---/--- this.$emit("may","hi")  -----//组件之间传值</p>
            <p style="color:#4fe962;">key --->虚拟DOM的算法;防止重复key造成渲染错误</p>
            <p style="color: #4fe962;">is ---->动态组件基于DOM模板来限制工作   < component :is="isCop"></ component> ----//isCop可以使任意组件</p>
            <p>transition -----> 事件/组件过渡动画   ----- transition-group  -----> 渲染一个真实的DOM</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ones: `作用域插槽: < template #:one='onedata '>{{ onedata.user}}</ template>`
            }
        }
    }
</script>

<style lang="less">
    #user2-1 {
        margin: 10px 25px;

        .dv {
            width: 100%;
            box-sizing: border-box;
            height: 100%;
            background-color: #9a9292;
            padding: 10px 15px;
            box-shadow: 0 0 10px 10px #ccc;
            border-radius: 10px;
            color: #fff;

            p {
                margin: 10px 0;
            }
        }
    }
</style>