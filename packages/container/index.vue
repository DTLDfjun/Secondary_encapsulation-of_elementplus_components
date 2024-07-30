<script setup lang="ts">
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'

import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <NavSide :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <NavHeader v-model:collapse="isCollapse" />
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-header {
  padding: 0;
}
</style>
