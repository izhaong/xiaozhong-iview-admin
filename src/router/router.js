import Home from '../views/Home.vue'
import layout from '../views/layout.vue'
export default [{
  path: '/',
  name: 'layout',
  component: layout,
  children: [{
    path: 'home',
    name: 'home',
    component: Home
  },
  {
    path: 'table',
    name: 'table',
    component: () => import('@/views/table.vue')
  },
  {
    path: 'form',
    name: 'form',
    component: () => import('@/views/form.vue')
  },
  {
    path: 'folder_tree',
    name: 'folder_tree',
    component: () => import('@/views/folder-tree/folder-tree.vue')
  }
  ]
},
{
  path: '/menu_page',
  name: 'menu_page',
  component: () => import('@/views/menu-page.vue')
},
{
  path: '/render-page',
  name: 'render-page',
  component: () => import('@/views/render-page.vue')
},
{
  path: '/split-pane',
  name: 'split-pane',
  component: () => import('@/views/split-pane.vue')
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login.vue')
},
{
  path: '/about',
  name: 'about',
  component: () => import('../views/About.vue'),
  props: true
},
{
  path: '/argu/:name',
  component: () => import('@/views/argu.vue')
},
{
  path: '/count-to',
  name: 'count_to',
  component: () => import('@/views/count-to.vue')
},
{
  path: '/parent',
  component: () => import('@/views/parent.vue'),
  children: [{
    path: 'child',
    component: () => import('@/views/child.vue')
  }]
},
{
  path: '/name_view',
  components: {
    default: () => import('@/views/child.vue'),
    email: () => import('@/views/email.vue'),
    tel: () => import('@/views/tel.vue')
  }
},
{
  path: '/store',
  component: () => import('@/views/store.vue')
},
{
  path: '*',
  component: () => import('@/views/error_404.vue')
}
]
