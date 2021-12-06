import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function importComponent(path){
    return () => import(`./components/${path}.vue`);
}

const router = new VueRouter({
    mode:'history',
    routes:[
        //landing page
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
                    meta: { title: 'Sign In' },
                    component: importComponent('Landing Page/SignIn'),
                },
                {
                    path: '/SignUp',
                    name: 'SignUp',
                    meta: { title: 'Sign Up' },
                    component: importComponent('Landing Page/SignUp'),
                },
            ],
        },
        //admin
        {
            path: '/Admin',
            name: 'Admin',
            meta: { title: 'Admin' },
            component: importComponent('Admin/Admin'),
            children: [
                {
                    path: '/adminDashboard',
                    name: 'adminDashboard',
                    meta: { title: 'Dashboard Admin' },
                    component: importComponent('Admin/adminDashboard'),
                },
                {
                    path: '/adminProfile',
                    name: 'adminProfile',
                    meta: { title: 'Profile Admin' },
                    component: importComponent('Admin/adminProfile'),
                },
                {
                    path: '/viewTickets',
                    name: 'viewTickets',
                    meta: { title: 'View Tickets' },
                    component: importComponent('Admin/viewTickets'),
                },
                {
                    path: '/editTickets',
                    name: 'editTickets',
                    meta: { title: 'Edit Tickets' },
                    component: importComponent('Admin/editTickets'),
                },
                {
                    path: '/addTickets',
                    name: 'addTickets',
                    meta: { title: 'Add Tickets' },
                    component: importComponent('Admin/addTickets'),
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
                    path: '/userDashboard',
                    name: 'userDashboard',
                    meta: { title: 'Dashboard User' },
                    component: importComponent('User/userDashboard'),
                },
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