export const users = (obj) => {
    if (!obj.token) return this.$message.error('请重新登录...');
    let oo = [];
    obj.name = obj.name.split(":")[1]
    switch (obj.name) {
        case "admin":
            oo = [
                {
                    id: "1",
                    name: "基本资料",
                    path: "user1",
                    icon: "el-icon-menu",
                    children: [
                        {
                            id: "1-1",
                            name: "Vue/Cil配置项",
                            pid: "1",
                            path: "user1-1",

                        },
                        {
                            id: "1-2",
                            name: "echarts/betterScroll",
                            pid: "1",
                            path: "user1-2",
                        },
                        {
                            id: "1-3",
                            name: "js方法",
                            pid: "1",
                            path: "user1-3"
                        },
                        {
                            id: "1-4",
                            name: "less使用",
                            pid: "1",
                            path: "user1-4"
                        }
                    ]
                },
                {
                    id: "3",
                    path: "user3",
                    name: "权限路由3",
                    icon: "el-icon-monitor",
                    children: [
                        {
                            id: "3-1",
                            pid: "3",
                            name: "权限路由3-1",
                            path: "user3-1",

                        },
                        {
                            id: "3-2",
                            pid: "3",
                            name: "权限路由3-2",


                            path: "user3-2",
                        },
                        {
                            id: "3-3",
                            name: "权限路由3-3",

                            pid: "3",
                            path: "user3-3"
                        }
                    ]
                },
                {
                    id: "5",
                    path: "user5",
                    name: "权限路由5",
                    icon: "el-icon-document",
                    children: [
                        {
                            id: "5-1",
                            pid: "5",
                            name: "权限路由5-1",
                            path: "user5-1",

                        },
                        {
                            id: "5-2",
                            pid: "5",
                            name: "权限路由5-2",
                            path: "user5-2",
                        },
                        {
                            id: "5-3",
                            pid: "5",
                            name: "权限路由5-3",
                            path: "user5-3"
                        }
                    ]
                }
            ]
            break;
        case "wangziyu":
            oo = [
                {
                    id: "1",
                    path: "user1",
                    name: "基本资料",
                    icon: "el-icon-menu",
                    children: [
                        {
                            id: "1-1",
                            name: "Vue/Cil配置项",
                            pid: "1",
                            path: "user1-1",

                        },
                        {
                            id: "1-2",
                            name: "echarts/betterScroll",
                            pid: "1",
                            path: "user1-2",
                        },
                        {
                            id: "1-3",
                            name: "js方法",
                            pid: "1",
                            path: "user1-3"
                        },
                        {
                            id: "1-4",
                            name: "less使用",
                            pid: "1",
                            path: "user1-4"
                        }
                    ]
                },
                {
                    id: "2",
                    path: "user2",
                    name: "Vue/Api",
                    icon: "el-icon-data-board",
                    children: [
                        {
                            id: "2-1",
                            pid: "2",
                            name: "Vue/Api",
                            path: "user2-1",

                        },
                        {
                            id: "2-2",
                            name: "Vue/router/Api",
                            pid: "2",
                            path: "user2-2",
                        },
                        {
                            id: "2-3",
                            name: "Vue/Vuex/Api",
                            pid: "2",
                            path: "user2-3"
                        }
                    ]
                },
                {
                    id: "3",
                    path: "user3",
                    name: "权限路由3",
                    icon: "el-icon-monitor",
                    children: [
                        {
                            id: "3-1",
                            pid: "3",
                            name: "权限路由3-1",
                            path: "user3-1",

                        },
                        {
                            id: "3-2",
                            pid: "3",
                            name: "权限路由3-2",
                            path: "user3-2",
                        },
                        {
                            id: "3-3",
                            pid: "3",
                            name: "权限路由3-3",
                            path: "user3-3"
                        }
                    ]
                },
                {
                    id: "4",
                    path: "user4",
                    name: "权限路由4",
                    icon: "el-icon-office-building",
                    children: [
                        {
                            id: "4-1",
                            pid: "4",
                            name: "权限路由4-1",
                            path: "user4-1",

                        },
                        {
                            id: "4-2",
                            pid: "4",
                            name: "权限路由4-2",
                            path: "user4-2",
                        },
                        {
                            id: "4-3",
                            pid: "4",
                            name: "权限路由4-3",
                            path: "user4-3"
                        }
                    ]
                },
                {
                    id: "5",
                    path: "user5",
                    name: "权限路由5",
                    icon: "el-icon-document",
                    children: [
                        {
                            id: "5-1",
                            name: "权限路由5-1",
                            pid: "5",
                            path: "user5-1",

                        },
                        {
                            id: "5-2",
                            pid: "5",
                            name: "权限路由5-2",
                            path: "user5-2",
                        },
                        {
                            id: "5-3",
                            pid: "5",
                            name: "权限路由5-3",
                            path: "user5-3"
                        }
                    ]
                }
            ]
            break;
    }
    return oo;
}