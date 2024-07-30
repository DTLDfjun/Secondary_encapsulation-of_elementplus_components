import type { App } from 'vue'
import ChooseArea from './chooseArea'
import ChooseIcon from './chooseIcon'
import Trend from './trend'
import Notification from './notification'
import List from './list'
import Menu from './menu'
import Progress from './progress'
import ChooseTime from './chooseTime'
import ChooseDate from './chooseDate'
import ChooseCity from './chooseCity'
import Form from './form'
import ModalForm from './modalForm'
import Calendar from './calendar'
import Table from './table'

import './styles/base.scss'
import './styles/ui.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'

const components = [ChooseArea, ChooseIcon, Trend, Notification, List, Menu, Progress, ChooseTime, ChooseDate, ChooseCity, Form, ModalForm, Calendar, Table]

// 这里的install是全部引入
export default {
  install(app: App) {
    // 全局注册图标
    // el-icon-xxx
    for (const i in ElementPlusIconsVue) {
      // 注册全部图标组件
      app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i])
    }
    components.map((item) => {
      app.use(item)
    })
  }
}
