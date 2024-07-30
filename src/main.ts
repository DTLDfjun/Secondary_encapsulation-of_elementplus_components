import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { toLine } from './utils'
import mUI from './components'
// import mUI from '../lib/index.mjs'
// import '../lib/style.css'

// import chooseIcon from '../lib/chooseIcon/index.mjs'

import './mock'

const app = createApp(App)

// 全局注册图标
// el-icon-xxx
for (const i in ElementPlusIconsVue) {
  // 注册全部图标组件
  app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i])
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
// app.use(chooseIcon)
app.use(mUI)

app.mount('#app')
