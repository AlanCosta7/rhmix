
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'empresas', component: () => import('pages/Empresas.vue') },
      { path: 'pessoa', component: () => import('pages/Pessoa.vue') },
      { path: 'servicos', component: () => import('pages/Servico.vue') },
      { path: 'duvida', component: () => import('pages/Duvida.vue') },
      { path: 'contato', component: () => import('pages/Contato.vue') },
      { path: 'certificado', component: () => import('pages/Certificado.vue') }
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
