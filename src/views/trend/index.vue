<script setup lang="ts"></script>

<template>
  <div class="trend-container">
    <div>
      <div>默认：</div>
      <div class="trend-box">
        <m-trend text="营业额"></m-trend>
        <m-trend text="销售额" type="down"></m-trend>
      </div>
    </div>
    <div>
      <div>插槽传递文字：</div>
      <div class="trend-box">
        <m-trend>营业额</m-trend>
        <m-trend type="down">销售额</m-trend>
      </div>
    </div>
    <div>
      <div>图标颜色翻转：</div>
      <div class="trend-box">
        <m-trend text="营业额" reverseColor></m-trend>
        <m-trend text="销售额" type="down" reverseColor></m-trend>
      </div>
    </div>
    <div>
      <div>自定义图标颜色：</div>
      <div class="trend-box">
        <m-trend text="天蓝色图标" upIconColor="skyblue"></m-trend>
        <m-trend text="粉色图标" type="down" downIconColor="pink"></m-trend>
      </div>
    </div>
    <div>
      <div>自定义文字颜色：</div>
      <div class="trend-box">
        <m-trend text="营业额" upTextColor="blue"></m-trend>
        <m-trend text="销售额" type="down" downTextColor="green"></m-trend>
      </div>
    </div>
    <div>
      <div>自定义图标：</div>
      <div class="trend-box">
        <m-trend text="营业额" upIcon="CaretTop"></m-trend>
        <m-trend text="销售额" type="down" downIcon="CaretBottom"></m-trend>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trend-container {
  > div {
    margin-bottom: 10px;
  }
}
.trend-box {
  display: flex;
  > div {
    margin-right: 10px;
  }
}
</style>
