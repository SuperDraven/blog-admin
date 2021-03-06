// router.js
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  children: [
    {
      path: '/index',
      title: '主页',
      name: 'index',
      icon: 'ios-home'
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/form',
    icon: 'android-checkbox',
    name: 'article',
    title: '文章管理',
    children: [
      {
        path: '/article/list',
        title: '文章列表',
        name: 'article-list',
        icon: 'arrow-swap'
      },
      {
        path: '/article/create',
        title: '发布文章',
        name: 'article-create',
        icon: 'ios-home'
      }
    ]
  },
  {
    path: '/category',
    icon: 'ios-paper',
    name: 'category',
    title: '分类管理',
    children: [
      {
        path: '/category/list',
        title: '分类列表',
        name: 'category-list',
        icon: 'ios-list'
      },
      {
        path: '/category/create',
        title: '添加分类',
        name: 'category-create',
        icon: 'plus-round'
      }
    ]
  },
  {
    path: '/label',
    icon: 'ios-paper',
    name: 'label',
    title: '标签管理',
    children: [
      {
        path: '/label/list',
        title: '标签列表',
        name: 'label-list',
        icon: 'ios-list'
      },
      {
        path: '/label/create',
        title: '添加标签',
        name: 'label-create',
        icon: 'plus-round'
      }
    ]
  },
  {
    path: '/form',
    icon: 'android-checkbox',
    name: 'form',
    title: '表单编辑',
    children: [
      {
        path: '/form/work-flow',
        title: '工作流',
        name: 'form-work-flow',
        icon: 'arrow-swap'
      },
      {
        path: '/form/article-publish',
        title: '发布文章',
        name: 'form-article-publish',
        icon: 'ios-home'
      }
    ]
  },
  {
    path: '/tables',
    icon: 'ios-grid-view',
    title: '表格',
    name: 'tables',
    children: [
      {
        path: '/tables/dragable-table',
        title: '可拖拽排序',
        icon: 'arrow-move',
        name: 'tables-dragable-table'
      },
      {
        path: '/tables/editable-table',
        title: '可编辑表格',
        icon: 'edit',
        name: 'tables-editable-table'
      }
    ]
  },
  {
    path: '/error-page',
    icon: 'android-sad',
    title: '错误页面',
    name: 'errorpage',
    children: [
      {
        path: '/error-page/403',
        title: '403错误',
        name: 'error-page-403',
        icon: 'close-circled'
      },
      {
        path: '/error-page/404',
        title: '404错误',
        name: 'error-page-404',
        icon: 'alert-circled'
      },
      {
        path: '/error-page/500',
        title: '500错误',
        name: 'error-page-500',
        icon: 'settings'
      }
    ]
  }
]
