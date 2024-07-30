import type { App } from 'vue'
import ChooseArea from '@/components/chooseArea'
import ChooseIcon from '@/components/chooseIcon'
import Trend from '@/components/trend'
import Notification from '@/components/notification'
import List from '@/components/list'
import Menu from '@/components/menu'
import Progress from '@/components/progress'
import ChooseTime from '@/components/chooseTime'
import ChooseDate from '@/components/chooseDate'
import ChooseCity from '@/components/chooseCity'
import Form from '@/components/form'
import ModalForm from '@/components/modalForm'
import Calendar from '@/components/calendar'
import Table from '@/components/table'

const components = [ChooseArea, ChooseIcon, Trend, Notification, List, Menu, Progress, ChooseTime, ChooseDate, ChooseCity, Form, ModalForm, Calendar, Table]

// 这里的install是全部引入
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
