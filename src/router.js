import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function importComponent(path){
    return () => import(`./components/${path}.vue`);
}

const router = new VueRouter({
    mode:'history',
    routes:[
        //landnig page
        {
            path: '/',
            name: 'Login Page',
            meta: { title: 'Login Page' },
            component: importComponent('Landing Page/Login Page_parent'),
            children: [
                {
                    path: '/',
                    name: 'Landing Page',
                    meta: { title: 'Landing Page' },
                    component: importComponent('Landing Page/Login Page_Content'),
                },
                {
                    path: '/SignIn',
                    name: 'SignIn',
                    meta: { title: 'SignIn' },
                    component: importComponent('Landing Page/SignIn'),
                },
                {
                    path: '/SignUp',
                    name: 'SignUp',
                    meta: { title: 'SignUp' },
                    component: importComponent('Landing Page/SignUp'),
                },
            ],
        },
        //admin
        {
            path: '/admin',
            name: 'admin',
            meta: { title: 'admin' },
            component: importComponent('Admin/Admin'),
            children: [
                {
                    path: '/adminProfile',
                    name: 'adminProfile',
                    meta: { title: 'adminProfile' },
                    component: importComponent('Admin/adminProfile'),
                },
                {
                    path: '/viewTickets',
                    name: 'viewTickets',
                    meta: { title: 'viewTickets' },
                    component: importComponent('Admin/viewTickets'),
                },
            ],
        },
        //user
        {
            path: '/User',
            name: 'User',
            meta: { title: 'User' },
            component: importComponent('User/User'),
            children: [
                {
                    path: '/userProfile',
                    name: 'userProfile',
                    meta: { title: 'userProfile' },
                    component: importComponent('User/userProfile'),
                },
                {
                    path: '/MyTickets',
                    name: 'MyTickets',
                    meta: { title: 'MyTickets' },
                    component: importComponent('User/MyTickets'),
                },
                {
                    path: '/detailTicket',
                    name: 'detailTicket',
                    meta: { title: 'detailTicket' },
                    component: importComponent('User/detailTicket'),
                },
                {
                    path: '/BuyTickets',
                    name: 'BuyTickets',
                    meta: { title: 'BuyTickets' },
                    component: importComponent('User/BuyTickets'),
                },
                {
                    path: '/BuyTicketsDetails',
                    name: 'BuyTicketsDetails',
                    meta: { title: 'BuyTicketsDetails' },
                    component: importComponent('User/BuyTicketsDetails'),
                },
            ],
        },
        {
            path: '*',
            redirect: '/'
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;