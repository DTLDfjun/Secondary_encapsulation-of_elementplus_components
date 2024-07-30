<script setup lang="ts">
import { toLine } from '@/utils'
import type { PropType } from 'vue'

defineProps({
  // 图标
  icon: {
    type: String,
    default: 'Bell'
  },
  // 显示值
  value: {
    type: [String, Number],
    default: '1'
  },
  // 最大值, 使用max时, value也必须是Number!!!!!!!!!!!!!
  max: {
    type: Number,
    default: 99
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  },
  //徽章类型
  type: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info'>,
    default: 'danger'
  }
})
</script>

<template>
  <el-popover placement="top-start" trigger="click" width="350">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge :value="value" class="item" :type="type" :max="max" :isDot="isDot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<style scoped lang="scss">
.el-badge {
  cursor: pointer;
  margin-right: 50px;
}
</style>
