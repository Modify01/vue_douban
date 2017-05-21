<template>
    <div>
        <div class="container">
            <div class="list">
                <ul>
                    <li v-for="item in items" :key="item.id">
                        <a href="#/details">
                            <img :src="item.images.large" alt="">
                        </a>
                        <div class="meta">
                            <h4><span>{{item.title}}</span> <em>{{item.rating.average}}分</em></h4>
                            <div class="otherinfo">类型:<span>{{item.genres}}</span></div>
                        </div>
                    </li>
                </ul>
                <div class="paging">
                    <label>总共：0条记录,第0/0页;</label>
                    <!-- 加上disable类样式，表示按钮禁用状态 -->
                    <button class="prev disable ">上一页</button>
                    <button class="next">下一页</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items: {}
            };
        },
        created() {

            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {
                    content: '这是用vue-resource测试的'
                }, {
                    emulateJSON: true
                })
                .then(res => {
                    var msg = res.body.subjects;
                    this.items = msg;
                    // console.log(this.items);
                })

            // this.$ajax.defaults.baseURL = 'https://api.douban.com/v2/movie/';
        }
    }
</script>
<style lang="css" scoped>
    .container {
        min-width: 1040px !important;
        background: #F5F5F5;
    }

    .container .list {
        margin: 0 auto;
        padding: 20px 25px;
    }

    .container .list ul {
        margin: 0 auto;
        width: 1080px;
        overflow: hidden;
    }

    .container .list ul li {
        margin: 12px 5px;
        padding: 4px;
        float: left;
        background: #fff;
        transition: all .3s;
    }

    .container .list ul li a {
        display: block;
    }

    .container .list ul li a img {
        width: 194px;
        height: 275.828px;
    }

    .container .list ul li .meta h4 {
        color: #555;
    }

    .container .list ul li .meta h4 span {
        display: inline-block;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .container .list ul li .meta h4 em {
        float: right;
        display: inline-block;
        color: #8c8c8c;
    }

    .container .list ul li .meta .otherinfo {
        margin-top: 3px;
        color: #7E7E7E;
    }

    .container .list ul li .meta .otherinfo span {
        margin-left: 4px;
        padding: 1px 3px;
        color: #999;
        background: #e6e6e6;
        font-size: 12px;
    }

    .container .list ul li:hover {
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
    }

    .container .list ul:after,
    .container .list ul:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .container .list .paging {
        text-align: center;
    }

    .container .list .paging .prev,
    .container .list .paging .next {
        border: none;
        border-radius: 4px;
        background: #2aabd2;
        width: 100px;
        height: 40px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
    }
</style>