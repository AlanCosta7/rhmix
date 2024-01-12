
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:"index", component: () => import('pages/Index.vue') },
      { path: 'servicos/:id', name: 'servicos', component: () => import('pages/Servicos.vue') },
      { path: 'contato', name:"contato", component: () => import('pages/Contato.vue') },
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: 'auth', component: () => import('pages/admin/auth.vue') },
      { path: 'blog-admin', name: 'blog-admin', component: () => import('pages/admin/BlogAdmin.vue') },
      { path: 'banner-admin', name: 'banner-admin', component: () => import('pages/admin/BannerAdmin.vue') },
      { path: 'servicos-admin', name: 'servicos-admin', component: () => import('pages/admin/ServicosAdmin.vue') },
      { path: 'depoimento-admin', name: 'depoimento-admin', component: () => import('pages/admin/DepoimentoAdmin.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
