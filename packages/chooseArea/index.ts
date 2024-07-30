import chooseArea from './src/index.vue'
import type { App } from 'vue'

// 让这个组件可以通过use的形式使用, 这里的install方法可以在main.ts里单个use使用, 类似element ui的单个引入
export default {
  install(app: App) {
    app.component('m-chooseArea', chooseArea)
  }
}
