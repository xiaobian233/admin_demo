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
    </div>
</template>

<script>
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
                style:{
                    height:"888px",
                    width:"888px"
                }
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

        }
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
        #punch{
            width: 500px;
            height: 500px;
        }
        #bge_carl{
            width:800px;
            height: 800px;
        }
        /* #background{
            width: 800px;
            height: 800px;
        } */
    }
</style>