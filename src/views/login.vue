<template>
  <div id="login">
    <!-- 
      <transition>
        <div class="user-img" v-show="false">
          <el-row>
            <el-col :span="24">
              <img :src="user.img" alt />
              <span style="width: 17%;margin: 0 0 0 10px;">{{user.name}}</span>
              <span>{{user.email}}</span>
              <span>{{user.personalized}}</span>
            </el-col>
          </el-row>
        </div>
    </transition>-->
    <!-- 
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label-width="auto">
          <el-input
            v-model="form.name"
            placeholder="请输入admin"
            @keyup.enter.native="login(form)"
            prefix-icon="el-icon-user"
            suffix-icon="el-icon-check"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="auto">
          <el-input
            v-model="form.password"
            placeholder="请输入123456"
            @keyup.enter.native="login(form)"
            prefix-icon="el-icon-user"
            suffix-icon="el-icon-check"
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="login(form)">登录</el-button>
    </el-form>-->
    <div class="login_bj animate__animated animate__fadeInDown">
      <div style="height:32px;">
        <h3>个人博客</h3>
      </div>

      <el-form label-position="left" label-width="80px" :model="form">
        <el-form-item></el-form-item>
        <el-input
          placeholder="请输入账号"
          @keyup.enter.native="loginClick()"
          v-model="form.name"
          suffix-icon="el-icon-user"
        ></el-input>
        <el-form-item></el-form-item>
        <el-input
          placeholder="请输入密码"
          @keyup.enter.native="loginClick()"
          v-model="form.password"
          :type="typeInput"
        >
          <i
            slot="suffix"
            @click="bgClick"
            :class="{'el-icon-view':true,'el_click':bg_click_password}"
            style="cursor: pointer;"
          ></i>
        </el-input>
        <el-form-item></el-form-item>

        <el-row :gutter="24">
          <el-col :span="18">
            <el-input
              placeholder="请输入"
              @keyup.enter.native="loginClick()"
              id="Txtidcode"
              v-model="form.verify"
            ></el-input>
          </el-col>
          <el-col :span="6" id="idcode"></el-col>
        </el-row>

        <el-form-item></el-form-item>
        <el-form-item></el-form-item>

        <el-button
          type="primary"
          id="btns"
          size="medium"
          style="width:100%;"
          @click="loginClick()"
        >登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { logins } from "@/api/login/login.js";
import { domButton, domclick, isBoolean } from "../assets/js/jquery.idcode";
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        verify: ""
      },
      bg_click_password: false,
      typeInput: "password"
    };
  },
  mounted() {
    domButton();
    domclick("idcode");
  },
  methods: {
    // login(v) {
    //     let { name, password } = v;
    //     if (name !== "admin" && name !== "wangziyu") return this.$message.error('请输入admin');
    //     if (password !== "123456") return this.$message.error('请输入123456');
    //     let { code, data, msg } = logins(v)
    //     if (msg) return this.$message.error(`${msg}`);
    //     if (data) {
    //         let { name, token, email, img, personalized, txt } = data;
    //         this.user.name = `名字:${name}`;
    //         this.user.token = token;
    //         this.user.email = email;
    //         this.user.personalized = personalized;
    //         this.user.txt = txt;
    //         this.user.img = require("../assets/img" + img);   //require才可以回显图片
    //         sessionStorage.setItem("user", JSON.stringify(this.user))    //用户信息
    //         this.$store.dispatch("async_route", this.user)   //获取路由权限
    //     }
    // }

    //点击登录
    loginClick() {
      setTimeout(() => {
        if (!isBoolean) return this.$message.error("请输入正确的验证码");
        let { name, password } = this.form;
        if (!name || !password) this.$message.error("请输入正确的账户");
      }, 0);
    },
    //点击小眼睛
    bgClick() {
      this.bg_click_password = !this.bg_click_password;
      if (this.bg_click_password) return (this.typeInput = "text");
      this.typeInput = "password";
    }
  }
};
</script>

<style lang="less" >
@import url("../assets/css/login.less");
</style>