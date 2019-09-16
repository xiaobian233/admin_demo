<template>
    <div id="user1-3">
        <h3 style="color:red;margin:15px 0;">对象开始原型指向 obj->显性 prototype(原型链) -> function.prototype (显式原型链) </h3>
        <h3 style="color:red;margin:15px 0;">对象开始原型指向 obj->隐性 _proto_(原型) -> function._proto_ (原型) -> object._proto_
            (原型) -> null </h3>
        <h2>这个请看本地script标签里面</h2>
        <br>
        <h3>1.有优雅的实现深拷贝 </h3>
        <br>
        <p>// 基本版本 : JSON.parse(JSON.string(obj))</p>
        <p>// 优雅实现请log</p>
        <br>
        <h3>2.去除字符串空格</h3>
        <br>
        <h3>3.随机生成5个数字</h3>
        <br>
        <h3>4.字符串大小写切换</h3>
        <br>
        <h3>5.多维数组去重</h3>
        <br>
        <h3>6.判断设备的方法</h3>
        <br>
        <h3>获取数组最大值/最小值 Math.max(...arr)/Math.min(...arr)</h3>
        <br>
        <h3>7.获取图片的原始宽高 </h3>
        <br>
        <h3>8.实现instanceof <===>实现的原理就是 在原型上判断他们的类型 如果类型一眼则 返回true 不一样返回false;</h3>
        <br>
        <h3>数组迭代的方法:</h3>
        <div style="margin: 0 0 0 25px">
            <h3>Array</h3>
            <p>forEach ---/--- [].forEach.call() </p>
            <p>for...of / for...in</p>
            <h3>Object</h3>
            <p>for...in</p>
            <p>for(let i of Object.keys(obj)) ---//key遍历</p>
            <p>for(let [key,val] of Object.entries(obj)) ---//键/值</p>
        </div>
        <br>
        <h3>decodeURL() ==> 解码 /encodeURL() ==> 编码</h3>
        <br>
        <h3>9.js实现继承</h3>
        <br>
        <h3>捕获异常:let a=1,i=0; ----- try(){ a=2;b=0;i++ }catch(){ i++ }finally(){ i++ } //i=3</h3>
        <br>
        <h3>10.九九乘法表--/--冒泡排序</h3>














        <br>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        // Function.protoyype.mybind = ctx => {
        //     if (typeof this !== 'function') throw new TptyError("not is function")
        //     let that = this;
        //     let ages = [...arguments].slice(1)
        //     return function F() {
        //         if (this instanceof F) {
        //             return new that(...ages, ...arguments)
        //         }
        //         return that.apply(ctx, agr.concat(...arguments))
        //     }
        // }
        //             let aa=111;
        // console.log(aa.mybind(this, 123));
        async mounted() {
            //去除字符空格
            let obj = {
                one: () => {
                    // 1.如何优雅的实现深拷贝   
                    // 基本版本 JSON.parse(JSON.string(obj))
                    let aaa = {
                        a: 1,
                        b: "string",
                        c: 2,
                        d: [1, 2, 3, 4, 5],
                        e: {
                            aa: 1,
                            bb: "string_2",
                            cc: 3,
                            dd: [66, 77, 88, 99]
                        }
                    }
                    aaa.target = aaa; //自身等于自身 形成 循环类型
                    const objArr = (obj, map = new Map()) => {
                        if (typeof obj != "object") return obj;
                        let arr = toString.call(obj).indexOf("Object") == -1 ? {} : []
                        if (map.get(obj)) return map.get(obj);
                        map.set(obj, arr)
                        for (let i in obj) {
                            arr[i] = objArr(obj[i], map)
                        }
                        return arr
                    }
                    console.log(objArr(aaa), "优雅实现深拷贝");
                },
                two: () => {
                    //去除字符串空格
                    let str = ` 1 2 3 4 啊 的 s 9 s `;
                    // js原生方法: 
                    console.log(str.trim(), "去除两边的空格");
                    // ---------------------------------------------
                    str = ` 1 2 3 4 啊 的 s 9 s`;
                    // 正则去除所有空格
                    console.log(str.replace(/\s+/g, ""))
                    // ---------------------------------------------
                    //正则去除左边空格 
                    str = ` 1 2 3 4 啊 的 s 9 s `;
                    console.log(str.replace(/^\s+/g, ""))
                    // 正则去除右边空格
                    console.log(str.replace(/\s*$/g, ""));
                },
                three: () => {
                    // 随机生成5个数字
                    let arr = [...new Array(5)];
                    for (let i = 0; i < arr.length; i++) {
                        arr[i] = i;
                    }
                    console.log("方法1:", arr);
                    //方法2: 闭包实现
                    let num = 1 + Math.floor(Math.random() * 100);    //1-100之间
                    const ccc = (arr, num = 1 + Math.floor(Math.random() * 100)) => {
                        if (arr.length < 5) {
                            arr.push(num);
                            ccc(arr)
                        }
                        return arr
                    }
                    let kk = [];
                    console.log("方法2", ccc(kk, num));
                },
                four: () => {
                    //字符串大小写切换
                    let str = `abcdEFgY`;
                    str = [...str];
                    let arr = [];
                    for (let v of str) {
                        if (v.toUpperCase() == v) {
                            v = v.toLowerCase()
                        } else {
                            v = v.toUpperCase()
                        }
                        arr.push(v)
                    }
                    console.log(arr.join(""));
                },
                five: () => {
                    // 多维数组去重
                    // 方法一
                    let arr = [1, [11, [1], 2, [33, 77, 66, 11]], 11, 66, 77, 88, [23, 54, 89, [32, 11]]];
                    arr = [...new Set(arr.flat(Infinity))]; //es9
                    console.log(arr);
                    // 方法二
                    arr = [1, [11, [1], 2, [33, 77, 66, 11]], 11, 66, 77, 88, [23, 54, 89, [32, 11]]];
                    let newArr = [];
                    const isArr = (arr, newArr) => {
                        arr.map(val => {
                            if (Array.isArray(val)) {
                                isArr(val, newArr)
                            } else {
                                newArr.push(val)
                            }
                        })
                    }
                    isArr(arr, newArr)
                    console.log([...new Set(newArr)]);
                    //方法三
                    arr = [1, [11, [1], 2, [33, 77, 66, 11]], 11, 66, 77, 88, [23, 54, 89, [32, 11]]];
                    arr = arr.reduce((acc, val) => acc.concat(val), []) //只能打开一层嵌套
                    arr = [...new Set(arr.toString().split(","))]  //打开第二层
                    console.log(arr);
                },
                six: () => {
                    let ua = navigator.userAgent;
                    let agen = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", 'Window'];
                    agen.map(v => {
                        if (ua.indexOf(v) != -1) {
                            console.log(v);
                            return;
                        }
                    })
                },
                seven: () => {
                    const imgAsync = (url) => {
                        return new Promise((res, rej) => {
                            let img = new Image();
                            img.onload = () => {
                                let obj = {
                                    w: img.naturalWidth,
                                    h: img.naturalHeight
                                }
                                res(obj)
                            }
                            Image.onerror = () => {
                                rej(new Error("Could not load image at " + url))
                            }
                            img.src = url;
                        })
                    }
                    console.log(imgAsync(require("../../assets/img/img.jpg")), "获取图片的原始高度");
                },
                eight: () => {
                    //实现的原理就是 在原型上判断他们的类型 如果类型一眼则 返回true 不一样返回false;
                    const new_instanceof = (left, rights) => {
                        let rightProto = rights.prototype;
                        let leftValue = left._proto_;
                        while (true) {
                            if (leftValue === null) return false;
                            if (leftValue === rightProto) return true;
                        }
                        leftValue = left._proto_;   //继承的时候原型指向被拷贝的原型所以需要在上一层的原型
                    }
                    function Person(name, age, sex) {
                        this.name = name;
                        this.age = age;
                        this.sex = sex;
                    }
                    function Student(score) {
                        this.score = score;
                    }
                    var per = new Person("小明", 20, "男");
                    var stu = new Student(98)
                    console.log(per instanceof Person);  // true
                },
                nine: () => {
                    // 方法1:
                    // f1   构造继承
                    function Per1(name) {
                        this.name = name;
                    }
                    Per1.prototype.per1 = "myPer1"
                    function Chd1() {
                        Per1.call(this)
                    }
                    Chd1.prototype = new Per1();
                    let newChd1 = new Chd1();
                    newChd1.name = "myChd1";
                    newChd1.per1 = "Chd1666";
                    let newPer1 = new Per1("哈哈哈");
                    console.log(newChd1.name, newChd1.per1);
                    console.log(newPer1.name, newPer1.per1);
                    // 方法2
                    class F1 {   //不会提前声明
                        constructor(name, age) {
                            this.name = name;
                            this.age = age;
                        };
                        get area() {     //截取
                            return 6666
                        };
                        set area(val) {  //储存
                            return `this is set:${val}`
                        };
                        show(val) {
                            return this.name = val;
                        };
                        static ccc(v, ov) {       //静态方法只能自身调用
                            return `${v.name}`
                        }
                    };
                    class F2 extends F1 {
                        constructor() {
                            super();    //里面调用类型与 obj.prototype.call(this)
                        };
                        kkk() {
                            return "kkk"
                        }
                    }
                    let f11 = new F1("myName", 21)
                    console.log(f11.show("789789"));
                    console.log(f11.area = "9999");
                    console.log(f11.area);


                },
                ten:()=>{
                    // 1 顺序 99
                    let str=``;
                    for(let i=0;i<=9;i++){
                        for(let j=1;j<=i;j++){
                            str+=`${i}*${j}=${j*i}`
                        }
                        str+=`\n`
                    }
                    console.log(str);
                    // 2 冒泡排序
                    let arr=[19,364,4,123,7,456,]
                    for(let i=0;i<arr.length;i++){
                        for(let j=0;j<arr.length-i-1;j++){
                            if(arr[j]>arr[j+1]){
                                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                            }
                        }
                    }
                    console.log(arr);
                    
                    









                },




            }
            // await obj.one()
            // await obj.two()   
            // await obj.three()
            // await obj.four()
            // await obj.five()
            // await obj.six()
            // await obj.seven()
            // await obj.eight()
            // await obj.nine()
            await obj.ten()


        }
    }
</script>

<style lang="less">
    #user1-3 {
        padding: 0 25px;
        box-sizing: border-box;
    }
</style>