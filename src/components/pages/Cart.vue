<template>
    <div>
        <div class="c-title">购物车</div>
        <div class="c-content">
            <div class="c1">
                <div class="c2">
                    <div class="bj"><img id="sp" :src="img" width="80px"></div>
                </div>
            </div>
            <div class="c3">亲，购物车空空如也，快去逛逛！</div>
            <div class="c4"><van-button id="btn" type="danger">去购物</van-button></div>
        </div>
         <div class="hot-area">
            <div class="hot-title">推荐商品</div>
            <div class="hot-goods">
                <van-list style=" overflow-x: hidden"><!--隐藏横滚动条-->
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item,index) in recommendGoods" :key="index">
                            <goods-info :goodsImage="item.image" :goodsName="item.goodsName" :goodsPrice="item.price"></goods-info>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
        <tabbar :goactive="myactive"></tabbar>
    </div>    
</template>

<script>
import axios from "axios";
import goodsInfo from '../component/goodsInfoComponent';
import tabbar from '../component/tabbar';
    export default {
        data(){
            return {  
                img:require("../../assets/timg.jpg"),
                myactive:2,                                       
                recommendGoods:[],
                hotGoods:[]
            } 
                   
        },
        created(){  
            axios({
                    url: 'https://www.easy-mock.com/mock/5b236c9eb541690d6ed33a63/smileShoppingmall/SmileShopping',
                    method: 'get',
                })       
             .then(response => {
                    console.log(response);
                    if(response.status == 200){                      
                        this.recommendGoods = response.data.data.recommend;                  
                        this.hotGoods = response.data.data.hotGoods
                   }
                })
                .catch((error) => {     
                })
  
        },
        components:{ 
            goodsInfo,           
            tabbar
        }
    }
    
</script>

<style scoped>
.c-title{
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: darkgray;
    border-bottom: 1px solid darkgray;
}
.c-content{
   width: 100%;
}
.c2{
   margin-top: 15px;    
}
#sp{
    width: 80px;
    height: 80px;
    margin-top: 17px;
    padding:0 auto;
    padding-left: 15px;
}
.bj{
    margin-top: 5px;
    margin: 0 auto;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: rgb(196, 192, 192);
}
.c3{
    margin-top: 20px;
    text-align: center;
    color: darkgray;
    font-size: 14px;
}
.c4{
    text-align: center;
     margin-top: 20px;
}
#btn{
    height: 30px;
    line-height: 30px;
}
.hot-area{
    margin-top: 20px;
    text-align: center;
    font-size:14px;
    height: 1.8rem;
    line-height:1.8rem;
}
.hot-title{
    margin-top: 10px;
    font-size: 16px;
    background-color: rgb(196, 192, 192);
    color: black;
}
</style>