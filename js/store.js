const store = defineStore({
    state: {
        app: {
            isLoading: false,
            message: '',
            initialized: false
        },
       
    },
    getters: {
        app: (state) => state.app,
       
    },
    mutations: {
        setAppInitialized: (state, isInit) => {
            state.app.initialized = isInit;
        },

        setAppLoading: (state, isLoading) => {
            state.app.isLoading = isLoading;
        },

        setPopup: (state, popup)  => {
            Object.assign(state.popup, popup)
        },
        
        setAppMessage: (state, message) => {
            state.app.message = message;
        },

        

    },
    actions: {
        
    },

})