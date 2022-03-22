export default [
    { 
        name: 'home',
        path: '/',
        component: () => import('@/views/Home'),
        children: [
            { 
                name: 'films',
                path: '/',
                component: () => import('@/views/pages/Films.vue')
            },
            { 
                name: 'starships',
                path: '/starships',
                component: () => import('@/views/pages/Starships.vue')
            },
        ]
    }
]