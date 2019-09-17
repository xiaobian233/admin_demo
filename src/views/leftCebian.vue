<template lang="">
  <div id="left_cebian">
    <!-- <h2>this is left_cebian</h2> -->
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" router :collapse="isCollapse"
      :unique-opened="true">
      <el-submenu :index="v.path" v-for="(v,i) in arr" :key="i">
        <template slot="title">
          <i :class="v.icon"></i>
          <span slot="title">{{v.name}}</span>
        </template>
        <!-- <el-menu-item-group> -->
        <el-menu-item :index="val.path" v-for="(val,index) in v.children" :key="index">{{val.name}}</el-menu-item>
        <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        <!-- </el-menu-item-group>
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group> -->
        <!-- <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu> -->
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: [],
        pathName: "",
        isCollapse:false,
        screenWidh:document.body.clientWidth,
      };
    },
    props:{
      "msg":String,
    },
    created() {
      this.arr = JSON.parse(sessionStorage.getItem("routes")); //侧边路由
    },
    mounted() {
      console.log(this.msg,"leftCebian");
      // console.log(this.screenWidh);
      
      if(this.screenWidh<760) this.isCollapse=true;
      if(this.screenWidh>760) this.isCollapse=false;
      // this.pathName = JSON.parse(sessionStorage.getItem("path"))
      // console.log(this.$router.path);
      // const that=this;
      // onresize=()=>{
      //   window.screenWidth = document.body.clientWidth
      //   that.screenWidth = window.screenWidth
      // }

    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
        this.$emit("myfather",key)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  };
</script>

<style lang="less">
  #left_cebian {
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      // min-height: 400px;
      height: 100%;
    }
    .el-menu--collapse{
      height: 100%;
    }
    .el-menu-item {
      min-width: auto;
    }
  }
</style>