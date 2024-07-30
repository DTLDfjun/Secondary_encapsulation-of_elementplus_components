<script setup lang="ts">
import * as ElIcons from '@element-plus/icons-vue'
import { ref, watch } from 'vue'

import { toLine } from '@/utils'
import { useCopy } from '@/hooks/useCopy'

const props = defineProps<{
  // 标题
  title: string
  // 弹出框的控制隐藏
  visible: boolean
}>()

/*
  // 这里面的逻辑, 使用直接更改父级属性的方式会更简洁
  const emits = defineEmits(['update:visible'])
  const handleClick = () => {
  // 直接使用改变父级, 无需 watch ,el-dialog 绑定 visible, @close="handleClick"
  emits('update:visible', !props.visible)
}
*/

// 拷贝一份从父组件传递过来的值
const privateVisible = ref<boolean>(props.visible)

// 自定义事件
const emits = defineEmits(['update:visible'])

// 显示弹出框
const handleClick = () => {
  privateVisible.value = !privateVisible.value
}

// 点击图标复制
const copyIcon = (item: string) => {
  const text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  // 隐藏弹窗
  privateVisible.value = false
}

// 监听父传子的 visible 变化, 因为上面拷贝的值只会初始化一次, 变化后无法再传递下来, 需要监听变化
watch(
  () => props.visible,
  (val) => {
    privateVisible.value = val
  }
)

// 监听本地值变化, 再派发事件
watch(
  () => privateVisible.value,
  (val) => {
    emits('update:visible', val)
  }
)
</script>

<template>
  <div class="choose-icon">
    <el-button @click="handleClick">
      <slot></slot>
    </el-button>
    <el-dialog :title="title" :model-value="privateVisible">
      <el-scrollbar height="400px">
        <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index" @click="copyIcon(item)">
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>
            {{ item }}
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss"></style>
