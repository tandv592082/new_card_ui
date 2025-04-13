const { mapGetters, mapActions, mapMutations} = Vuex;

/**
         * Generate page name
         * @param name
         * @returns {string}
         */
const generatePageName = (name) => `___VUE_APP_PAGE__${name}`;
    
/**
 * Get app page by name
 * @param name
 */
const getPage = (name) => window[generatePageName(name)];

/**
         * Defined vuex store
         * @param options
         * @returns {s}
         */
const defineStore = (options = {}) => new Vuex.Store(options);
        
/**
 * Defined vue router
 * @param options
 * @returns {s}
 */
const defineRouter = (options = {}) => {
    return new VueRouter(options)
};


/**
 * Define vue application
 * @param options
 * @returns {*}
 */
const defineApp = (options = {}) => {
    window['__V_APPLICATION'] = new Vue(options);
    return window['__V_APPLICATION'];
}

/**
 * Register global component
 * */
const defineComponent = (name, mixin = {}) => {
    Vue.component(name, mixin);
}

/**
 * Define global mixin
 * */
const defineMixin = (options) => {
    Vue.mixin(options)
}

/**
 * Define global application page
 * */
const definePage = (name, mixin = {}) => {
    const pageName = generatePageName(name);
    window[pageName] = mixin;
}

/**
 * Get app data from vue instance
 * @param key - key of data
 */
const getAppInstanceData = (key) => window['__V_APPLICATION'].$data[key];

/**
 * Dispatch vue app function
 * @param fnName
 */
const dispatchAppFn = (fnName) => window['__V_APPLICATION'][fnName];

/* loading component */
defineComponent('app-loading', {
    template: `<div id="__APP_LOADING">
                    <slot></slot>
               </div>`
});

/* content scroller component */
defineComponent('content-scroller', {
    template: `<div class="content-scroller">
                    <div class="linear top" v-if="linearTop"></div>
                    <div class="content-wrapper" :style="contentStyle">
                        <slot></slot>
                    </div>
                    <div class="linear bottom" v-if="linearBottom"></div>
                </div>`,
    props: {
        contentPadding: {
            default: '24px',
        },
        linearTop: {
            default: true,
        },
        linearBottom: {
            default: true,
        },
        contentRadius: {
            default: '30px',
        },
    },
    computed: {
        contentStyle() {
            const style = {};
            style['border-top-left-radius'] = this.contentRadius;
            style['border-top-right-radius'] = this.contentRadius;
            style.padding = this.contentPadding;

            return style;
        },
    },
});

/* skeleton loader component */
defineComponent('skeleton-loader', {
    template: `<div id="skeleton-loader" :style="skeletonStyle"></div>`,
    props: {
        height: {
            default: '100%',
        },
        width: {
            default: '100%',
        },
        radius: {
            default: 0,
        },
    },
    computed: {
        skeletonStyle() {
            const style = {};
            style.width = this.width;
            style.height = this.height;
            style['border-radius'] = this.radius;

            return style;
        },
    },
})

 /* loading component */
 defineComponent('app-loading', {
    template: `<div id="__APP_LOADING">
                    <slot></slot>
               </div>`
});

/* content scroller component */
defineComponent('content-scroller', {
    template: `<div class="content-scroller">
                    <div class="linear top" v-if="linearTop"></div>
                    <div class="content-wrapper" :style="contentStyle">
                        <slot></slot>
                    </div>
                    <div class="linear bottom" v-if="linearBottom"></div>
                </div>`,
    props: {
        contentPadding: {
            default: '24px',
        },
        linearTop: {
            default: true,
        },
        linearBottom: {
            default: true,
        },
        contentRadius: {
            default: '30px',
        },
    },
    computed: {
        contentStyle() {
            const style = {};
            style['border-top-left-radius'] = this.contentRadius;
            style['border-top-right-radius'] = this.contentRadius;
            style.padding = this.contentPadding;

            return style;
        },
    },
});

/* skeleton loader component */
defineComponent('skeleton-loader', {
    template: `<div id="skeleton-loader" :style="skeletonStyle"></div>`,
    props: {
        height: {
            default: '100%',
        },
        width: {
            default: '100%',
        },
        radius: {
            default: 0,
        },
    },
    computed: {
        skeletonStyle() {
            const style = {};
            style.width = this.width;
            style.height = this.height;
            style['border-radius'] = this.radius;

            return style;
        },
    },
})