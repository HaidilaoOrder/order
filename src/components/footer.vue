<template>
    <div>
        <div class="footer">
            <el-row :gutter="24">
                <el-col :span="4"  :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div>
                        <p>
                            <a href="#" class="my-p" target="_parent">关于海底捞</a>
                        </p>
                        <ul class=" hidden-sm-and-down">
                            <li>
                                <a href="#" class="my-li">火锅文化</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">品牌故事</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">经营理念</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">社会责任</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">媒体中心</a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="4"  :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div >
                        <p>
                            <a href="#" class="my-p">海底捞美食</a>
                        </p>
                        <ul class=" hidden-sm-and-down">
                            <li>
                                <a href="#" class="my-li">锅底</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">涮菜</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">特色蘸料</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">小吃甜品</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">特色饮品</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">食品安全</a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="4"  :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div >
                        <p>
                            <a href="#" class="my-p">服务中心</a>
                        </p>
                        <ul class=" hidden-sm-and-down">
                            <li>
                                <a href="#" class="my-li">门店搜索</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">联系我们</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">欢乐卡</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">海底捞外卖</a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="4"  :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div >
                        <p>
                            <a href="#" class="my-p">投资者关系</a>
                        </p>
                        <ul class=" hidden-sm-and-down">
                            <li>
                                <a href="#" class="my-li">公司治理</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">招股文件</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">公告通函</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">业绩报告</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">投资者联络</a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="4"  :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div >
                        <p>
                            <a href="#" class="my-p">海底捞会员</a>
                        </p>
                        <ul class=" hidden-sm-and-down">
                            <li>
                                <a href="#" class="my-li">关于会员</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">会员权益</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">会员须知</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">隐私政策</a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="4"  :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div >
                        <p>
                            <a href="#" class="my-p">相关网站</a>
                        </p>
                        <ul class=" hidden-sm-and-down">
                            <li>
                                <a href="#" class="my-li">新店拓展平台</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">采购招标平台</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">颐海国际控股有限公司</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">蜀海供应链</a>
                            </li>
                            <li>
                                <a href="#" class="my-li">北京微海管理咨询有限公司</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div>
           <el-row :gutter="24">
               <el-col class="footer-text">© 2019 版权所有 海鸿达（北京）餐饮管理有限公司 京ICP备 18016421号-1使用条款</el-col>
               <el-col>  <img src="../assets/login/logo.jpg" alt="#" class="footer-img"> </el-col>
           </el-row>
        </div>
    </div>
    
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
.footer{
    box-sizing: border-box;
    width: 100%;height: 342px;
    background-color:#282828;
    padding: 60px 100px;
    margin-top: -2px;
}
.my-p{
    color: #888;
    text-decoration:none;
    line-height: 40px;
}
.my-li{
    list-style: none;
    color: #888;
    text-decoration:none;
    line-height: 32px;
    font-size: 12px;
}
.my-ul{
    padding: 0;
}
.footer-text{
    margin-top: 50px;
    color: #888;
}
.footer-img{
    width: 50px;height: 50px;
}
</style>