import _ from 'lodash';

export default {
    namespaced: true,

    state: {
        pageTitle: null,
        drawler: true
    },
    getters: {
        pageTitle: state => {
            return state.pageTitle ? state.pageTitle : 'Laravel';
        },

        drawler: state => {
            return state.drawler;
        }
    },
    mutations: {
        pageTitle(state, value) {
            state.pageTitle = value;

            _.set(window, 'document.title', value);
        },

        drawler(state, value) {
            state.drawler = value;
        }
    }

};
