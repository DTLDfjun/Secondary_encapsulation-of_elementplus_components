<script lang="ts" setup>
// import ChooseIcon from '@/components/chooseIcon/src/index.vue'
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>
<template>
  <div class="">
    <m-chooseIcon title="选择图标" v-model:visible="visible">选择图标</m-chooseIcon>
  </div>
</template>
<style lang="scss" scoped></style>
