import Layout from '@/layout/index.vue'

export default [
  {
    path: '/other',
    component: Layout,
    name: 'Other',
    redirect: '/other/list',
    meta: {
      title: '其他',
      isGroup: true,
      icon: 'i-carbon-location-heart'
    },
    children: [
      {
        path: '/other/list',
        name: 'OtherList',
        component: () => import('@/pages/other/icons/index.vue'),
        meta: {
          title: '其他-2',
          icon: 'i-carbon-list-boxes'
        }
      },
      {
        path: '/other/list1',
        name: 'OtherList1',
        component: () => import('@/pages/test/test2.vue'),
        meta: {
          title: '其他-1',
          icon: 'i-carbon-home'
        }
      },
      {
        path: '/other/icons',
        name: 'Icons',
        component: () => import('@/pages/other/icons/index.vue'),
        meta: {
          title: '图标',
          icon: 'i-carbon-location-heart'
        }
      }
    ]
  }
]
