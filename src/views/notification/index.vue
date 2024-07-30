<template>
  <div class="notification-box">
    <m-notification type="danger" value="5">
      <template #default> <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list> </template
    ></m-notification>
    <m-notification type="success" value="11">
      <template #default> <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list> </template
    ></m-notification>
    <m-notification type="success" :value="777" :max="50">
      <template #default> <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list> </template
    ></m-notification>
    <m-notification type="success" :value="777" isDot>
      <template #default> <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list> </template
    ></m-notification>
    <m-notification type="success" :value="777" isDot icon="ChatLineRound">
      <template #default>
        <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list>
      </template>
    </m-notification>
  </div>
</template>
<script setup lang="ts">
import { list, actions } from './data'
const clickItem = (val: any) => {
  console.log(val)
}
const clickAction = (val: any) => {
  console.log(val)
}
</script>
<style scoped lang="scss">
.notification-box {
  > div {
    margin-right: 50px;
  }
}
</style>
