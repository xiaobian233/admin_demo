/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        const optionData = {
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
                        };
                        this.chart.setOption(optionData);
                    },
                    pie: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        const optionData = {
                            // title: {
                            //     text: '南丁格尔玫瑰图',
                            //     subtext: '纯属虚构',
                            //     x: 'center'
                            // },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x: 'center',
                                y: 'bottom',
                                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']      //配置修改
                            },
                            toolbox: {
                                show: true,
                                feature: {
                                    mark: { show: true },
                                    dataView: { show: true, readOnly: false },
                                    magicType: {
                                        show: true,
                                        type: ['pie', 'funnel']
                                    },
                                    restore: { show: true },
                                    saveAsImage: { show: true }
                                }
                            },
                            calculable: true,
                            series: [
                                // {
                                //     name: '半径模式',
                                //     type: 'pie',
                                //     radius: [20, 110],
                                //     center: ['0', '100%'],
                                //     roseType: 'radius',
                                //     label: {
                                //         normal: {
                                //             show: false
                                //         },
                                //         emphasis: {
                                //             show: true
                                //         }
                                //     },
                                //     lableLine: {
                                //         normal: {
                                //             show: false
                                //         },
                                //         emphasis: {
                                //             show: true
                                //         }
                                //     },
                                //     data: [
                                //         { value: 10, name: 'rose1' },
                                //         { value: 5, name: 'rose2' },
                                //         { value: 15, name: 'rose3' },
                                //         { value: 25, name: 'rose4' },
                                //         { value: 20, name: 'rose5' },
                                //         { value: 35, name: 'rose6' },
                                //         { value: 30, name: 'rose7' },
                                //         { value: 40, name: 'rose8' }
                                //     ]
                                // },
                                {
                                    name: '面积模式',
                                    type: 'pie',
                                    radius: [30, 110],
                                    center: ['75%', '50%'],
                                    roseType: 'area',
                                    data: [
                                        { value: 10, name: 'rose1' },
                                        { value: 5, name: 'rose2' },
                                        { value: 15, name: 'rose3' },
                                        { value: 25, name: 'rose4' },
                                        { value: 20, name: 'rose5' },
                                        { value: 35, name: 'rose6' },
                                        { value: 30, name: 'rose7' },
                                        { value: 40, name: 'rose8' }
                                    ]
                                }
                            ]
                        };

                        this.chart.setOption(optionData);
                    },
                    historam: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        const option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            legend: {
                                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value'
                                }
                            ],
                            series: [
                                {
                                    name: '直接访问',
                                    type: 'bar',
                                    data: [320, 332, 301, 334, 390, 330, 320]
                                },
                                {
                                    name: '邮件营销',
                                    type: 'bar',
                                    stack: '广告',
                                    data: [120, 132, 101, 134, 90, 230, 210]
                                },
                                {
                                    name: '联盟广告',
                                    type: 'bar',
                                    stack: '广告',
                                    data: [220, 182, 191, 234, 290, 330, 310]
                                },
                                {
                                    name: '视频广告',
                                    type: 'bar',
                                    stack: '广告',
                                    data: [150, 232, 201, 154, 190, 330, 410]
                                },
                                {
                                    name: '搜索引擎',
                                    type: 'bar',
                                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                                    markLine: {
                                        lineStyle: {
                                            normal: {
                                                type: 'dashed'
                                            }
                                        },
                                        data: [
                                            [{ type: 'min' }, { type: 'max' }]
                                        ]
                                    }
                                },
                                {
                                    name: '百度',
                                    type: 'bar',
                                    barWidth: 5,
                                    stack: '搜索引擎',
                                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                                },
                                {
                                    name: '谷歌',
                                    type: 'bar',
                                    stack: '搜索引擎',
                                    data: [120, 132, 101, 134, 290, 230, 220]
                                },
                                {
                                    name: '必应',
                                    type: 'bar',
                                    stack: '搜索引擎',
                                    data: [60, 72, 71, 74, 190, 130, 110]
                                },
                                {
                                    name: '其他',
                                    type: 'bar',
                                    stack: '搜索引擎',
                                    data: [62, 82, 91, 84, 109, 110, 120]
                                }
                            ]
                        };
                        this.chart.setOption(option);
                    },
                    punch: function (id) {
                        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
                            '7a', '8a', '9a', '10a', '11a',
                            '12p', '1p', '2p', '3p', '4p', '5p',
                            '6p', '7p', '8p', '9p', '10p', '11p'];
                        var days = ['Saturday', 'Friday', 'Thursday',
                            'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

                        var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];

                        this.chart = echarts.init(document.getElementById(id));
                        const option = {
                            legend: {
                                data: ['Punch Card'],
                                left: 'left'
                            },
                            polar: {},
                            tooltip: {
                                formatter: function (params) {
                                    return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
                                }
                            },
                            angleAxis: {
                                type: 'category',
                                data: hours,
                                boundaryGap: false,
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#999',
                                        type: 'dashed'
                                    }
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            radiusAxis: {
                                type: 'category',
                                data: days,
                                axisLine: {
                                    show: false
                                },
                                axisLabel: {
                                    rotate: 45
                                }
                            },
                            series: [{
                                name: 'Punch Card',
                                type: 'scatter',
                                coordinateSystem: 'polar',
                                symbolSize: function (val) {
                                    return val[2] * 2;
                                },
                                data: data,
                                animationDelay: function (idx) {
                                    return idx * 5;
                                }
                            }]
                        };
                        this.chart.setOption(option);
                    },
                    bge_carl(id) {
                        this.chart = echarts.init(document.getElementById(id));
                        const option = {
                            title: {
                                text: '2019年销售水量和主营业务收入对比',
                                textStyle: {
                                    align: 'center',
                                    color: '#fff',
                                    fontSize: 20,
                                },
                                top: '3%',
                                left: '10%',
                            },
                            backgroundColor: '#0f375f',
                            grid: {
                                top: "25%",
                                bottom: "10%"
                            },
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {
                                    type: "shadow",
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            legend: {
                                data: ["销售水量", "主营业务"],
                                top: "15%",
                                textStyle: {
                                    color: "#ffffff"
                                }
                            },
                            xAxis: {
                                data: [
                                    "当年完成水量",
                                    "去年同期水量",
                                    "滚动目标值水量",
                                    "全年目标值水量",
                                    "当年完成金额",
                                    "去年同期金额",
                                    "滚动目标金额",
                                    "全年目标值",

                                ],
                                axisLine: {
                                    show: true //隐藏X轴轴线
                                },
                                axisTick: {
                                    show: true //隐藏X轴刻度
                                },
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: "#ebf8ac" //X轴文字颜色
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#01FCE3'
                                    }
                                },
                            },
                            yAxis: [{
                                type: "value",
                                name: "亿元",
                                nameTextStyle: {
                                    color: "#ebf8ac"
                                },
                                splitLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: true
                                },
                                axisLine: {
                                    show: true
                                },
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: "#ebf8ac"
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#FFFFFF'
                                    }
                                },
                            },
                            {
                                type: "value",
                                name: "同比",
                                nameTextStyle: {
                                    color: "#ebf8ac"
                                },
                                position: "right",
                                splitLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                axisLabel: {
                                    show: true,
                                    formatter: "{value} %", //右侧Y轴文字显示
                                    textStyle: {
                                        color: "#ebf8ac"
                                    }
                                }
                            },
                            {
                                type: "value",
                                gridIndex: 0,
                                min: 50,
                                max: 100,
                                splitNumber: 8,
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                splitArea: {
                                    show: true,
                                    areaStyle: {
                                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                                    }
                                }
                            }
                            ],
                            series: [{
                                name: "销售水量",
                                type: "line",
                                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                                smooth: true, //平滑曲线显示
                                showAllSymbol: true, //显示所有图形。
                                symbol: "circle", //标记的图形为实心圆
                                symbolSize: 10, //标记的大小
                                itemStyle: {
                                    //折线拐点标志的样式
                                    color: "#058cff"
                                },
                                lineStyle: {
                                    color: "#058cff"
                                },
                                areaStyle: {
                                    color: "rgba(5,140,255, 0.2)"
                                },
                                data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
                            },
                            {
                                name: "主营业务",
                                type: "bar",
                                barWidth: 15,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: "#00FFE3"
                                        },
                                        {
                                            offset: 1,
                                            color: "#4693EC"
                                        }
                                        ])
                                    }
                                },
                                data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
                            }
                            ]
                        };
                        this.chart.setOption(option);
                    },
                    background(id) {
                        this.chart = echarts.init(document.getElementById(id));
                        var geoCoordMap = {
                            '新疆玛纳斯基地': [86.22, 44.30],
                            '九江': [116.00, 29.70],
                            '新乡': [116.402217, 35.311657],
                            ' ':[79.92,37.12],
                            '  ':[86.85,47.70],
                            '若羌县':[88.17,39.02],
                            '上海': [121.4648, 31.2891],
                            '东莞': [113.8953, 22.901],
                            '东营': [118.7073, 37.5513],
                            '中山': [113.4229, 22.478],
                            '临汾': [111.4783, 36.1615],
                            '临沂': [118.3118, 35.2936],
                            '丹东': [124.541, 40.4242],
                            '丽水': [119.5642, 28.1854],
                            '乌鲁木齐': [87.9236, 43.5883],
                            '佛山': [112.8955, 23.1097],
                            '保定': [115.0488, 39.0948],
                            '兰州': [103.5901, 36.3043],
                            '包头': [110.3467, 41.4899],
                            '北京': [116.4551, 40.2539],
                            '北海': [109.314, 21.6211],
                            '南京': [118.8062, 31.9208],
                            '南宁': [108.479, 23.1152],
                            '南昌': [116.0046, 28.6633],
                            '南通': [121.1023, 32.1625],
                            '厦门': [118.1689, 24.6478],
                            '台州': [121.1353, 28.6688],
                            '合肥': [117.29, 32.0581],
                            '呼和浩特': [111.4124, 40.4901],
                            '咸阳': [108.4131, 34.8706],
                            '哈尔滨': [127.9688, 45.368],
                            '唐山': [118.4766, 39.6826],
                            '嘉兴': [120.9155, 30.6354],
                            '大同': [113.7854, 39.8035],
                            '大连': [122.2229, 39.4409],
                            '天津': [117.4219, 39.4189],
                            '太原': [112.3352, 37.9413],
                            '威海': [121.9482, 37.1393],
                            '宁波': [121.5967, 29.6466],
                            '宝鸡': [107.1826, 34.3433],
                            '宿迁': [118.5535, 33.7775],
                            '常州': [119.4543, 31.5582],
                            '广州': [113.5107, 23.2196],
                            '廊坊': [116.521, 39.0509],
                            '延安': [109.1052, 36.4252],
                            '张家口': [115.1477, 40.8527],
                            '徐州': [117.5208, 34.3268],
                            '德州': [116.6858, 37.2107],
                            '惠州': [114.6204, 23.1647],
                            '成都': [103.9526, 30.7617],
                            '扬州': [119.4653, 32.8162],
                            '承德': [117.5757, 41.4075],
                            '拉萨': [91.1865, 30.1465],
                            '无锡': [120.3442, 31.5527],
                            '日照': [119.2786, 35.5023],
                            '昆明': [102.9199, 25.4663],
                            '杭州': [119.5313, 29.8773],
                            '枣庄': [117.323, 34.8926],
                            '柳州': [109.3799, 24.9774],
                            '株洲': [113.5327, 27.0319],
                            '武汉': [114.3896, 30.6628],
                            '汕头': [117.1692, 23.3405],
                            '江门': [112.6318, 22.1484],
                            '沈阳': [123.1238, 42.1216],
                            '沧州': [116.8286, 38.2104],
                            '河源': [114.917, 23.9722],
                            '泉州': [118.3228, 25.1147],
                            '泰安': [117.0264, 36.0516],
                            '泰州': [120.0586, 32.5525],
                            '济南': [117.1582, 36.8701],
                            '济宁': [116.8286, 35.3375],
                            '海口': [110.3893, 19.8516],
                            '淄博': [118.0371, 36.6064],
                            '淮安': [118.927, 33.4039],
                            '深圳': [114.5435, 22.5439],
                            '清远': [112.9175, 24.3292],
                            '温州': [120.498, 27.8119],
                            '渭南': [109.7864, 35.0299],
                            '湖州': [119.8608, 30.7782],
                            '湘潭': [112.5439, 27.7075],
                            '滨州': [117.8174, 37.4963],
                            '潍坊': [119.0918, 36.524],
                            '烟台': [120.7397, 37.5128],
                            '玉溪': [101.9312, 23.8898],
                            '珠海': [113.7305, 22.1155],
                            '盐城': [120.2234, 33.5577],
                            '盘锦': [121.9482, 41.0449],
                            '石家庄': [114.4995, 38.1006],
                            '福州': [119.4543, 25.9222],
                            '秦皇岛': [119.2126, 40.0232],
                            '绍兴': [120.564, 29.7565],
                            '聊城': [115.9167, 36.4032],
                            '肇庆': [112.1265, 23.5822],
                            '舟山': [122.2559, 30.2234],
                            '苏州': [120.6519, 31.3989],
                            '莱芜': [117.6526, 36.2714],
                            '菏泽': [115.6201, 35.2057],
                            '营口': [122.4316, 40.4297],
                            '葫芦岛': [120.1575, 40.578],
                            '衡水': [115.8838, 37.7161],
                            '衢州': [118.6853, 28.8666],
                            '西宁': [101.4038, 36.8207],
                            '西安': [109.1162, 34.2004],
                            '贵阳': [106.6992, 26.7682],
                            '连云港': [119.1248, 34.552],
                            '邢台': [114.8071, 37.2821],
                            '邯郸': [114.4775, 36.535],
                            '郑州': [113.4668, 34.6234],
                            '鄂尔多斯': [108.9734, 39.2487],
                            '重庆': [107.7539, 30.1904],
                            '金华': [120.0037, 29.1028],
                            '铜川': [109.0393, 35.1947],
                            '银川': [106.3586, 38.1775],
                            '镇江': [119.4763, 31.9702],
                            '长春': [125.8154, 44.2584],
                            '长沙': [113.0823, 28.2568],
                            '长治': [112.8625, 36.4746],
                            '阳泉': [113.4778, 38.0951],
                            '青岛': [120.4651, 36.3373],
                            '韶关': [113.7964, 24.7028]
                        };
                        
                        var BJData = [
                            [{
                                name: '新乡'
                            }, {
                                name: '新乡',
                                value: 200
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '呼和浩特',
                                value: 90
                            }],
                             [{
                                name: '新乡'
                            }, {
                                name: '哈尔滨',
                                value: 90
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '石家庄',
                                value: 90
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '昆明',
                                value: 30
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '北京',
                                value: 100
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '长春',
                                value: 40
                            }],
                             [{
                                name: '新乡'
                            }, {
                                name: '重庆',
                                value: 40
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '贵阳',
                                value: 50
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '南宁',
                                value: 30
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '济南',
                                value: 10
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '太原',
                                value: 40
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '西安',
                                value: 60
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '武汉',
                                value: 50
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '合肥',
                                value: 40
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '南京',
                                value: 30
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '沈阳',
                                value: 20
                            }],
                            [{
                                name: '新乡'
                            }, {
                                name: '成都',
                                value: 10
                            }]
                        ];
                        
                        var SHData = [
                             [{
                                name: '九江'
                            }, {
                                name: '九江',
                                value: 200
                            }],
                            
                            [{
                                name: '九江'
                            }, {
                                name: '长沙',
                                value: 95
                            }],
                            [{
                                name: '九江'
                            }, {
                                name: '武汉',
                                value: 30
                            }],
                            [{
                                name: '九江'
                            }, {
                                name: '南昌',
                                value: 20
                            }],
                            [{
                                name: '九江'
                            }, {
                                name: '合肥',
                                value: 70
                            }],
                            [{
                                name: '九江'
                            }, {
                                name: '南京',
                                value: 60
                            }],
                            [{
                                name: '九江'
                            }, {
                                name: '福州',
                                value: 50
                            }],
                            [{
                                name: '九江'
                            }, {
                                name: '上海',
                                value: 100
                            }],
                            [{
                                name: '九江'
                            }, {
                                name: '深圳',
                                value: 100
                            }],
                           
                        ];
                        
                        var GZData = [
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '新疆玛纳斯基地',
                                value: 200
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '  ',
                                value: 90
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: ' ',
                                value: 40
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '呼和浩特',
                                value: 90
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '昆明',
                                value: 40
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '成都',
                                value: 10
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '兰州',
                                value: 95
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '银川',
                                value: 90
                            }],
                            [{
                                name: '新疆玛纳斯基地'
                            }, {
                                name: '西宁',
                                value: 80
                            }],
                        ];
                        var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
                        
                        var convertData = function(data) {
                            var res = [];
                            for (var i = 0; i < data.length; i++) {
                                var dataItem = data[i];
                                var fromCoord = geoCoordMap[dataItem[0].name];
                                var toCoord = geoCoordMap[dataItem[1].name];
                                if (fromCoord && toCoord) {
                                    res.push([{
                                        coord: fromCoord
                                    }, {
                                        coord: toCoord
                                    }]);
                                }
                            }
                            return res;
                        };
                        
                        var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
                        var series = [];
                        [
                            ['新乡', BJData],
                            ['九江', SHData],
                            ['新疆', GZData]
                        ].forEach(function(item, i) {
                            series.push({
                                name: item[0] + ' Top10',
                                type: 'lines',
                                zlevel: 1,
                                effect: {
                                    show: true,
                                    period: 6,
                                    trailLength: 0.7,
                                    color: '#fff',
                                    symbolSize: 3
                                },
                                lineStyle: {
                                    normal: {
                                        color: color[i],
                                        width: 0,
                                        curveness: 0.2
                                    }
                                },
                                data: convertData(item[1])
                            }, {
                                name: item[0] + ' Top10',
                                type: 'lines',
                                zlevel: 2,
                                effect: {
                                    show: true,
                                    period: 6,
                                    trailLength: 0,
                                    symbol: planePath,
                                    symbolSize: 15
                                },
                                lineStyle: {
                                    normal: {
                                        color: color[i],
                                        width: 1,
                                        opacity: 0.4,
                                        curveness: 0.2
                                    }
                                },
                                data: convertData(item[1])
                            }, {
                                name: item[0] + ' Top10',
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                zlevel: 2,
                                rippleEffect: {
                                    brushType: 'stroke'
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'right',
                                        formatter: '{b}'
                                    }
                                },
                                symbolSize: function(val) {
                                    return val[2] / 8;
                                },
                                itemStyle: {
                                    normal: {
                                        color: color[i]
                                    }
                                },
                                data: item[1].map(function(dataItem) {
                                    return {
                                        name: dataItem[1].name,
                                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                                    };
                                })
                            });
                        });
                        
                        const option = {
                            backgroundColor: '#080a20',
                            title: {
                                text: '模拟迁徙',
                                subtext: '数据纯属虚构',
                                left: 'left',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            tooltip: {
                                trigger: 'item'
                            },
                            legend: {
                                orient: 'vertical',
                                top: 'bottom',
                                left: 'right',
                                data: ['北京 Top10', '上海 Top10', '广州 Top10'],
                                textStyle: {
                                    color: '#fff'
                                },
                                selectedMode: 'single'
                            },
                            geo: {
                                map: 'china',
                                label: {
                                    emphasis: {
                                        show: false
                                    }
                                },
                                roam: true,
                                itemStyle: {
                                    normal: {
                                        areaColor: '#132937',
                                        borderColor: '#0692a4'
                                    },
                                    emphasis: {
                                        areaColor: '#0b1c2d'
                                    }
                                }
                            },
                            series: series
                        };
                        this.chart.setOption(option);
                    }

                }
            }
        }
    })
}

export default {
    install
}