<script setup lang="ts">
import { useSlots } from 'vue'
import { toLine } from '../../utils'

defineProps({
  // 标记当前趋势是上升还是下将
  type: {
    type: String,
    default: 'up'
  },
  // 上升趋势的图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  // 下降趋势的图标
  downIcon: {
    type: String,
    default: 'ArrowDown'
  },
  // 趋势显示的文本
  // 1. 父组件传递过来的数据
  // 2. 插槽
  text: {
    type: String,
    default: '文字'
  },
  // 颜色翻转只在默认颜色下生效, 如果使用了自定义颜色, 这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false
  },
  // 上升趋势的图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  // 上升趋势的文字颜色
  upTextColor: {
    type: String,
    default: '#000'
  },
  // 下降趋势的文字颜色
  downTextColor: {
    type: String,
    default: '#000'
  }
})

const slots = useSlots()
</script>

<template>
  <div class="trend">
    <div class="text" :style="{ color: type === 'up' ? upTextColor : downTextColor }">
      <!--   判断插槽有值就使用插槽   -->
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!--<el-icon-arrow-up :style="{ color: !reverseColor ? upIconColor : '#52c41a' }" v-if="type === 'up'"></el-icon-arrow-up>
      <el-icon-arrow-down :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else></el-icon-arrow-down>-->
      <component :is="`el-icon-${toLine(upIcon)}`" :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"></component>
      <component :is="`el-icon-${toLine(downIcon)}`" :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else>
      </component>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 14px;
    margin-right: 10px;
  }

  .icon {
    height: 18px;
  }
}</style>
