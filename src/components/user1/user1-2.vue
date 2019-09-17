<template>
    <div id="user1-2">
        <h3>vue-echats</h3>
        <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
        <h3>echarts</h3>
        <div id="chart1"></div>
        <h3>echarts饼图</h3>
        <div id="dv"></div>
        <br>
        <h3>echarts状柱图</h3>
        <br>
        <div id="zhuang"></div>
        <br>
        <h3>echarts散点图</h3>
        <div id="punch"></div>
        <br>
        <h3>echarts社区图</h3>
        <div id="bge_carl"></div>
        <br>
        <h3>echarts社区图 == 没得背景画布</h3>
        <div id="background"  :style="style" ref="background"></div>
        <br>    
        <h3>better-scroll使用----手机查看</h3>
        <div class="better-scroll">
            <div class="wrapper" ref="wrapper">
                <ul class="content">
                    <li v-for="(v,i) in arrList" :key="i">{{v}}</li>
                    <!-- <li>2</li>
                   <li>3</li> -->
                </ul>
            </div>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                orgOptions: {},
                height: '100%',
                dataAxis: ['11-5', '11-10', '11-15', '11-20', '11-25'],
                data1: [500, 1000, 1500, 2000, 120],
                data2: [200, 800, 1200, 1700, 150],
                label: ['档案1', '档案2'],
                type: 'bar',
                productNamesList: ['商品1', '商品2', '商品3', '商品4',],
                productSalesCountList: [1, 2, 4, 6],
                style: {
                    height: "500px",
                    width: "500px",
                },
                arrList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            }
        },
        mounted() {
            this.orgOptions = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
            },
                this.$chart.line1('chart1');
                this.$chart.pie("dv")
                this.$chart.historam("zhuang")
                this.$chart.punch("punch")
                this.$chart.bge_carl("bge_carl")
                this.$chart.background("background")


            this._initScroll();
        },
        methods: {
            _initScroll() {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    scrollY: true,
                    click: true,
                    snap: { // 设置不是循环的(设置loop设置true就会在前后加一个)
                        loop: false,
                        threshold: 0.3,
                        speed: 400
                    },
                })
            }
        },
    }
</script>

<style scoped lang="less">
    #user1-2 {
        margin: 0 25px;

        #chart1 {
            width: 300px;
            height: 300px;
        }

        #chass {
            width: 300px;
            height: 300px;
        }

        #dv {
            width: 500px;
            height: 500px;
        }

        #zhuang {
            width: 500px;
            height: 500px;
        }

        #punch {
            width: 500px;
            height: 500px;
        }

        #bge_carl {
            width: 800px;
            height: 800px;
        }

        /* #background{
            width: 800px;
            height: 800px;
        } */
        .better-scroll {
            width: 100%;
            height: 300px;
            overflow: hidden;

            .wrapper {
                height: 100%;
                overflow: hidden;

                .content li {
                    height: 30px;
                }
            }
        }


    }
</style>