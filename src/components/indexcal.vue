<template lang="">
    <div id="index">
        <!-- <h2>this is index</h2> -->
        <el-row>
            <el-col :span="24">
                <div class="header">
                    <div class="user">
                        欢迎用户&nbsp;:&nbsp;<span style="color: #666">{{user.name}}</span> &nbsp; <span ref="span3"
                            class="span3" :style="imgs"></span> &nbsp;
                        <span @click="remove">退出</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="dv">
            <el-row>
                <el-col :span="4">
                    <leftCebian msg="fatherDemo" @myfather="show"></leftCebian>
                </el-col>
                <el-col :span="20">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
    import leftCebian from "../views/leftCebian"
    import bus from "../main.js"
    export default {
        data() {
            return {
                user: {
                    name: "",
                    img: "",
                    fatherDemo:"demo",
                },
                imgs: {
                    backgroundImage: '',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }
            }
        },
        created(){},
        mounted() {
            // let user=
            let { name, img } = JSON.parse(sessionStorage.getItem("user"))
            this.user.name = name.split(":")[1];
            img=img.split(".")[0]+'.'+img.split(".")[2]
            this.imgs.backgroundImage ="url("+ require("../assets"+img)+")"; 
        },
        methods: {
            remove() {
                sessionStorage.clear();
                this.$router.push("/login")
            },
            show(v){
                console.log(v,"indexcal");
            }
        },
        components: { leftCebian }
    };
</script>

<style lang="less">
    #index {
        width: 100%;
        height: 100%;
        background-color: #f9f9f9;

        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background-color: #bacde0;

            .user {
                float: right;
                /* background-color: red; */
                height: 50px;
                margin: 0 30px 0 0;
                line-height: 50px;
                color: darkgray;
                font-size: 14px;
                font-weight: 700;
                position: relative;

                .span3 {
                    display: inline-block;
                    width: 33px;
                    cursor: pointer;
                    border-radius: 50%;
                    box-sizing: border-box;
                    padding: 15px 0;
                    position: sticky;
                    top: 10px;
                    background-color: red;
                    /* background: url("../assets/img/login.jpg") no-repeat center center / 100% 100%; */
                }

                span:nth-last-child(1) {
                    cursor: pointer;
                    font-size: 16px;
                    color: #ee3c20b5;
                    font-weight: 600;
                }
            }
        }

        .dv {
            height: 100%;
            box-sizing: border-box;
            padding: 50px 0 0 0;
        }

        .el-col-24 {
            height: 5.5%;
        }

        .dv {
            height: 100%;

            .el-row:nth-child(1) {
                height: 100%;
                /* overflow: auto;
                height: 100%; */
            }

            .el-col-20 {
                height: 100%;
                overflow: auto;
            }

            .el-col-4 {
                height: 100%;
            }
        }



    }
</style>