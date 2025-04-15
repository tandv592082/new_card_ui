const routes = [
    {
        path: '/',
        component: getPage('HomePage'),
        name: 'HomePage',
        meta: {
            background: '#ffffff',
            topbar: {
                title: 'My card',
            },
        }
    },
    {
        path: '/promotion',
        component: getPage('PromotionPage'),
        name: 'PromotionPage',
        meta: {
            background: '#ffffff',
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
            background: '#ffffff',
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


router.beforeEach((to, _, next) => {
    setPageTitle(to.meta.topbar.title);
    setPageBackgroundColor(to.meta.background);
    next();
});
