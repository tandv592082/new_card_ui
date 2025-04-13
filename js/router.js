const routes = [
    {
        path: '/',
        component: getPage('HomePage'),
        name: 'HomePage',
        meta: {
            topbar: {
                title: 'Home',
            },
        }
    },
    {
        path: '/promotion',
        component: getPage('PromotionPage'),
        name: 'PromotionPage',
        meta: {
            topbar: {
                title: 'Promotion',
            },
        }
    },
    {
        path: '/promotion/:id',
        component: getPage('PromotionDetailPage'),
        name: 'PromotionDetailPage',
        meta: {
            topbar: {
                title: 'Promotion Detail',
            },
        }
    },
    
]

const router = defineRouter({
    routes,
    scrollBehavior: () => ({ y: 0 })
});


router.beforeEach((to, from, next) => {
    next();
});
