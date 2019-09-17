<template>
  <div id="user1-4" style="margin: 0 25px;">
      <div class="dv">1.变量</div>
      <!-- ------------------------------------ -->


      <br>
      <br>

      <div class="rander">2.函数</div>
      <div class="rander2">2.函数</div>
      <!-- --------------------------------------->


      <br>
      <br>


      <div class="qiantao">3.嵌套规则
        <div class="qiantao2">3.嵌套规则-第一个子节点
          <div class="qiantao4">3.嵌套规则-第一个子节点-子节点</div>
          <div class="qiantao5">3.嵌套规则-第一个子节点-子节点</div>
        </div>
        <div class="qiantao3">3.嵌套规则-第二个子节点</div>
      </div>
      <!-- -------------------------------------- -->

      <br>
      <br>


      <div class="hanshu">4.函数及运算</div>
      <!-- --------------------------------------- -->

      <br>
      <br>

      <div class="obj">5.对象声明式</div>
      <!-- --------------------------------------- -->

      <br>
      <br>

      <div class="agm">6.arguments变量</div>
      <!-- --------------------------------------- -->

      <br>
      <br>

      <div class="yun">7.运算</div>
      <!-- -------------------------------------- -->

      <br>
      <br>


      <div class="import">8.避免编译、!important</div>


      <br>
      <br>

  </div>
</template>

<style lang="less" scoped>
//1.变量
@color:yellowgreen;
@col:skyblue;
.dv{
  color:@color;
}
//2.函数
.renderFun(@boder:red,@bgc:blue,@font:30px){
  border: 1px solid @boder;
  background-color: @bgc;
  font-size: @font;
}
.rander{
  .renderFun
}
.rander2{
  .renderFun(green,@color,16px)
}
// 3.嵌套规则
.qiantao{
  // background-color: @bgc;  //形参无法全局
  background-color: red;
  .qiantao2{
    background-color: yellow;
    .qiantao4,.qiantao5{
      color:red; 
      &:hover{
        background-color: skyblue;
      }
    }
  }
  &>.qiantao2:hover{
    background-color: pink;
  }
  .qiantao3{
    background-color: skyblue;
  }
}
//4.函数及运算
@bod:1px;
@baseColor:@col;
@red:#842210;
@col:null;
@cols:skyblue;
.hanshu{
  // box-shadow: 0 0 2px @col;  //col 可以被清空
  // box-shadow: 0 0 2px @baseColor; //之前赋值的也被清空
  box-shadow: 0 0 2px @bod*6 @cols;
  border: @bod solid pink;
  border-radius: @bod*10;
  // font-size: @bod*26px; 
  .renderFun(null,null)         //清空函数形参 1 2 属性 3属性保留
}
//5.对象方式声明
.Obj{
  background-color: @cols;
  border: 1px solid @red;
  width: @bod*166;
  margin: auto;
  color: pink;
}
.Object(){  //函数式声明
  text-align: center;
  font-size:18px;
  white-space: nowrap;
}
.obj{
  border-radius: 30px;
  .Obj;
  font-size: 28px;
  .Object;
}
//6.arguments变量 
.agr(@one:red,@two:solid,@three:1px){
  border: @arguments;
}
.agm{
  .agr(blue,dashed,2px)
}
//7.运算
@fs:32px;
@html:@fs/3;
@c:hsl(160, 84%, 70%);
@d:@c/5*2;
.yun{
  background-color: @d*2;
  font-size: @html*3%;
  border: 1px solid (@d/2)+28;
}
// 8.避免编译、!important
.import{
  font-size: 33px !important; 
  color:@c !important;
  width: ~'calc(100%-20)';    //不会进行运算
  .Obj;
  .Object;
}
</style>
