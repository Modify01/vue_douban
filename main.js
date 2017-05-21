// 引入vue对象
import Vue from 'vue';
// 主板
import App from './app.vue';

// 引入vue-resource
import VueResource from 'vue-resource';

// 引入router
import VueRouter from 'vue-router';

Vue.use(VueResource);

// 引入字组件
import home_page from './src/home_page/home_page.vue';
import in_theaters from './src/in_theaters/in_theaters.vue';
import coming_soon from './src/coming_soon/coming_soon.vue';
import top250 from './src/top250/top250.vue';

// 安装vue-router
Vue.use(VueRouter);
// 声明router对象
var router = new VueRouter();
// 配置路由
router.addRoutes([{
        name: 'home_page',
        path: '/home_page',
        component: home_page
    },
    {
        name: 'in_theaters',
        path: '/in_theaters',
        component: in_theaters
    },
    {
        name: 'coming_soon',
        path: '/coming_soon',
        component: coming_soon
    },
    {
        name: 'top250',
        path: '/top250',
        component: top250
    },
])

// 创建vue对象
new Vue({
    el: '#app',
    router: router,
    render: c => c(App)
});
