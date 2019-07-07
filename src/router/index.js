import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Chat from '@/components/Chat';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path: '/chat',
            name: 'Chat',
            props: true,
            component: Chat,
            beforeEnter: (to, from, next) => {
                // Route Guard
                if (to.params.name) {
                    return next();
                }

                return next({ name: 'Welcome' });
            },
        },
    ],
});
