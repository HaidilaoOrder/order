<template>
    <div class="header">
        <div class="maxWidth">
                <div class="lgsg">
                    <a href="javascript:;">登录</a> / <a href="javascript:;">注册</a>
                </div>
            <ul class="nav">
                <li><a href="javascript:;">海底捞菜</a></li>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">哆啦A梦</a></li>
                <li class="headerImg">
                    <a href="javascript:;">
                        <img src="../assets/header/header_index.png" alt="">
                    </a>
                </li>
                <li><a href="javascript:;">哆啦B梦</a></li>
                <li><a href="javascript:;">哆啦C梦</a></li>
                <li><a href="javascript:;">哆啦D梦</a></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    a{
        text-decoration: none;
        color: #888;
        font-size: 18px;
    }
    .header{
        width:100%;
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        box-shadow: 0 0 2px #999;
    }
    .maxWidth{
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .nav{
        display: flex;
        justify-content: space-between;
    }
    .lgsg{
        position: absolute;
        right: 0;
        top: 10px;
        height: 24px;
    }
    .lgsg a{
        color: #e60012;
        font-size: 14px;
        line-height: 24px;
    }
    .header .nav .headerImg{
        top:0;
        margin-top: 35px;
        width: 350px;
        height: 70px;
    }

    .nav li{
        display: block;
        position: relative;
        top: 60px;
        width: 140px;
        height: 40px;
        line-height: 40px;
        font-weight: 400;
    }
    .nav li a:hover{
        font-weight: 700;
        transition: all 0.5s ease-out 0s;
    }
</style>