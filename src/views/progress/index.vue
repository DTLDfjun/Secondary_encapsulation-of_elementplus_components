<template>
  <div>
    <div>自定义动画</div>
    <m-progress isAnimate :percentage="60"></m-progress>
    <br />
    <m-progress isAnimate status="success" :stroke-width="20" :percentage="60"></m-progress>
    <br />
    <m-progress :time="5000" type="circle" isAnimate :percentage="60"></m-progress>
    <br />
    <br />
    <div>element内置动画</div>
    <el-progress :percentage="50" :indeterminate="true" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
