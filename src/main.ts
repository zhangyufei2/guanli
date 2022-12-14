import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import '@/assets/font/iconfont.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import '@/assets/styles/reset.less'

createApp(App).use(store).use(router).use(ElementPlus).use(Antd).mount('#app')
