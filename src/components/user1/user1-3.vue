<template>
    <div id="user1-3">
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
    </div>
</template>

<script>
    export default {
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

                }
            }
            // await obj.one()
            // await obj.two()   
            // await obj.three()
            // await obj.four()
            // await obj.five()
            await obj.six()


        }
    }
</script>