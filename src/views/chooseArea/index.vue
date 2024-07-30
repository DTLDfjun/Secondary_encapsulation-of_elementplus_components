<script setup lang="ts">
// import ChooseArea from '@/components/chooseArea/src/index.vue'
import { type Data } from '@/components/chooseArea/src/index.vue'

interface AreaData {
  [key: string]: Data
}
const changeArea = (val: AreaData) => {
  console.log(val)
}
</script>

<template>
  <m-chooseArea @change="changeArea"></m-chooseArea>
</template>

<style scoped lang="scss"></style>
