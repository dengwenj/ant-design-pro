export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/hh',
    layout: false,
    routes: [
      {
        name: '哈哈',
        path: '/hh/dd',
        component: './Hh'
      }
    ]
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/dengwj',
    name: 'dengwj',
    icon: 'smile',
    component: './Dengwj'
  },
  {
    path: '/dwjww',
    name: '一级',
    icon: 'crown',
    access: 'canAdmin',
    component: './Dwjww',
    routes: [
      {
        path: '/dwjww/ww',
        name: '二级',
        icon: 'smile',
        component: './Dwjww',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
