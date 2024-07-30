<script setup lang="ts">
import { watch, ref } from 'vue'
import allAreas from './pac-code.json'

export interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}

export interface Data {
  name: string
  code: string
}

defineProps({
  selectWidth: {
    type: String,
    default: '300px'
  }
})

// 选择省份
const province = ref<string>('')
// 选择城市
const city = ref<string>('')
// 选择区域
const area = ref<string>('')

// 选择省份后,城市下拉框的值
const selectCity = ref<AreaItem[]>([])
// 监听选择省份
watch(
  () => province.value,
  (val) => {
    if (val) {
      selectCity.value = allAreas.find((v) => v.code === province.value)!.children
    }
    city.value = ''
    area.value = ''
  }
)

// 选择城市后,区域下拉框的值
const selectArea = ref<AreaItem[]>([])
// 监听选择城市
watch(
  () => city.value,
  (val) => {
    if (val) {
      // 感叹号 代表前面一定有值
      selectArea.value = selectCity.value.find((v) => v.code === city.value)!.children!
    }
    area.value = ''
  }
)

const emits = defineEmits(['change'])
watch(
  () => area.value,
  (val) => {
    if (val) {
      const provinceData: Data = { code: province.value, name: province.value && allAreas.find((v) => v.code === province.value)!.name }
      const cityData: Data = { code: city.value, name: city.value && selectCity.value.find((v) => v.code === city.value)!.name }
      const areaData: Data = { code: val, name: val && selectArea.value.find((v) => v.code === val)!.name }
      // console.log(provinceData, cityData, areaData)
      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData
      })
    }
  }
)
</script>

<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province" :style="{ width: selectWidth }">
      <el-option v-for="item in allAreas" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select clearable :disabled="!province" placeholder="请选择城市" v-model="city" style="margin: 0 10px"
      :style="{ width: selectWidth }">
      <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select clearable :disabled="!city" placeholder="请选择区域" v-model="area" :style="{ width: selectWidth }">
      <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
  </div>
</template>

<style scoped lang="scss"></style>
