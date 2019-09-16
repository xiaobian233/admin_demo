<template>
    <div id="login">
        <div class="from">
            <transition>
                <div class="user-img" v-show="user.token">
                    <el-row>
                        <el-col :span="24">
                            <img :src="user.img" alt="">
                            <span style="width: 17%;margin: 0 0 0 10px;">{{user.name}}</span>
                            <span>{{user.email}}</span>
                            <span>{{user.personalized}}</span>
                        </el-col>
                    </el-row>
                </div>
            </transition>

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label-width="auto">
                    <el-input v-model="form.name" placeholder="请输入admin" @keyup.enter.native="login(form)"
                        prefix-icon="el-icon-user" suffix-icon="el-icon-check"></el-input>
                </el-form-item>
                <el-form-item label-width="auto">
                    <el-input v-model="form.password" placeholder="请输入123456" @keyup.enter.native="login(form)"
                        prefix-icon="el-icon-user" suffix-icon="el-icon-check"></el-input>
                </el-form-item>
                <el-button type="primary" @click=login(form)>登录</el-button>
            </el-form>
        </div>



    </div>
</template>

<script>
    import { logins } from "@/api/login/login.js"
    export default {
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                },
                user: {
                    name: "",
                    token: "",
                    email: "",
                    personalized: '',
                    txt: '',
                    img: ""
                }
            }
        },
        methods: {
            login(v) {
                let { name, password } = v;
                if (name !== "admin" && name !== "wangziyu") return this.$message.error('请输入admin');
                if (password !== "123456") return this.$message.error('请输入123456');
                let { code, data, msg } = logins(v)
                if (msg) return this.$message.error(`${msg}`);
                if (data) {
                    let { name, token, email, img, personalized, txt } = data;
                    this.user.name = `名字:${name}`;
                    this.user.token = token;
                    this.user.email = email;
                    this.user.personalized = personalized;
                    this.user.txt = txt;
                    this.user.img = require("../assets/img" + img);   //require才可以回显图片
                    sessionStorage.setItem("user", JSON.stringify(this.user))    //用户信息
                    this.$store.dispatch("async_route", this.user)   //获取路由权限
                }
            }
        }
    }

</script>

<style lang="less">
    #login {
        width: 100%;
        height: 100%;
        background: url("../assets/img/login.jpg") no-repeat center center / 100% 100%;
        position: relative;

        .from {
            width: 500px;
            min-height: 200px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-sizing: border-box;
            /* padding: 85px 20px 20px 20px; */
            padding: 20px 20px 20px 20px;

            .user-img {
                width: 100%;
                margin: 10px 0 30px 0;

                img {
                    border-radius: 7px;
                    width: 65px;
                    height: 60px;
                    vertical-align: middle;
                    display: inline-block;
                }

                /* span:nth-child(1){
                    width: 17%;
                } */
                span {
                    color: #fff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 30%;
                    font-size: 12px;
                    display: inline-block;
                    white-space: nowrap;
                }


            }

            .el-button--primary {
                width: 100%;
            }
        }

        .v-enter,
        .v-leave-to {
            transform: translateY(-50px);
            opacity: 0;
        }

        .v-enter-active,
        .viewer-fade-leave-active {
            transition: all 0.5s;
        }

    }
</style>