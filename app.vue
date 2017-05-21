<template>
    <div>
        <div class="top">
            <div class="header">
                <a href="#/home_page"><img src="./assets/img/logo.png" alt=""></a>
                <div class="search">
                    <input ng-model="query" class="my-input" type="text" placeholder="电影搜索">
                    <button>搜索</button>
                </div>
            </div>
            <nav class="nav">
                <ul>
                    <!--li中添加 active 类样式，显示焦点状态。-->
               
                    <li><router-link :to="{name:'home_page'}">首页</router-link></li>
                    <li><router-link :to="{name:'in_theaters'}">正在热映</router-link></li>
                    <li><router-link :to="{name:'coming_soon'}">即将热映</router-link></li>
                    <li><router-link :to="{name:'top250'}">Top250</router-link></li>
                    
                    <!--<li class="active"><a href="#/home_page">首页</a></li>
                    <li><a href="#/in_theaters">正在热映</a></li>-->
                    <!--<li><a href="#/coming_soon">即将上映</a></li>-->
                    <!--<li><a href="#/top250">Top250</a></li>-->

                </ul>
            </nav>
        </div>
        <!--n内容-->
        <router-view></router-view>

        <footer class="footer">
            <div class="container">
                <p>版权所有&copy; 前端与移动开发学院 火骑士空空(允许侵权)</p>
            </div>
        </footer>
    </div>
</template>
<script>
    // 引入子组件

    //首页的大图片
    // import Hotshow from '../src/hot_show/now.vue'
    // 正在热映
    // import InTheaters from '../src/in_theaters/in_theaters.vue'

    export default {
        data() {
            return {};
        },
    }
</script>
<style scoped>
    /*页面初始化*/

    @import './assets/css/reset.css';
    /*首页样式*/

    body {
        font-size: 14px;
        background: #F5F5F5;
    }

    .top {
        min-width: 1040px !important;
    }

    .top .header {
        background: #fff;
    }

    .top .header a {
        width: 150px;
        display: inline-block;
        height: 60px;
    }

    .top .header img {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }

    .top .header .search {
        margin: 10px 80px 0 0;
        float: right;
        width: 250px;
        height: 30px;
    }

    .top .header .search input {
        padding-left: 10px;
        border: none;
        width: 158px;
        height: 28px;
        float: left;
        border: 1px solid #07A7E1;
        font-size: 14px;
    }

    .top .header .search button {
        float: right;
        width: 80px;
        height: 30px;
        border: none;
        background: #07A7E1;
        color: #fff;
        cursor: pointer;
    }

    .top .nav {
        background: #07A7E1;
    }

    .top .nav ul {
        overflow: auto;
        color: #fff;
        padding-left: 20px;
    }

    .top .nav ul li {
        height: 40px;
        line-height: 40px;
        float: left;
    }

    .top .nav ul li.active {
        background: #0095bb;
    }

    .top .nav ul li a {
        display: block;
        padding: 0 20px;
        text-align: center;
    }

    .top .nav ul li a:hover {
        background: #0095bb;
    }
    /*页面底部css*/

    .footer .container {
        padding: 20px 0;
        background: #eee;
        border-top: 1px #ccc;
        height: 100px;
        text-align: center;
        font-size: 12px;
        color: #666;
    }
</style>