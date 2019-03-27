import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import C from '@/components/C'
import Money from '@/components/Money'
import Print from '@/components/print'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'C',
      components:{
        pcHeader : Header,
        pcC : C,
        pcMoney : Money,
        pcPrint : Print,
      }
    },
  ]
})
