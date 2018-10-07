<template>
    <div>
        <!-- http://smile.hucheng123.xin -->
        <!--search bar area-->
        <div class="search-bar">
        <van-row>
            <van-col span="3"><img :src="locationIcon" width="80%" class="location-icon"></van-col>
            <van-col span="16">
                <input type="text" class="search-input">
            </van-col>
            <van-col span="5"><van-button size="mini">查找</van-button></van-col>
        </van-row>
        </div>

        <!--swiper-area-->
        <div class="swiper-area">
            <van-swipe :autoplay="3000">
               <van-swipe-item v-for="(item,index) in bannerPicArray" :key="index">
                   <img v-lazy="item.imageUrl" width="100%" >
               </van-swipe-item>
            </van-swipe>
        </div>
        <!--type-bar-->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.imageUrl" width="90%" >
                <span >{{cate.categoryName}}</span>
            </div>
        </div>
        <!---->
        <div>
            <img v-lazy="adBanner" width="100%" >
        </div>
        <!--Recommend goods area-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <!--swiper-->
                <swiper :options="swiperOption" >
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" width="80%">
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
                        </div>
                    </swiper-slide>
                 </swiper>
            </div>
        </div> 
        <!--floor one area-->    
        <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
        <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
        <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
        <!--Hot Area-->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
                <van-list style=" overflow-x: hidden"><!--隐藏横滚动条-->
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                            <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
        <!--底部标签栏-->
        <tabbar :goactive="myactive"></tabbar>
    </div>
</template>

<script>
import axios from "axios";
import 'swiper/dist/css/swiper.css'; 
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import floorComponent from '../component/floorComponent';
import goodsInfo from '../component/goodsInfoComponent';
import tabbar from '../component/tabbar'
    export default {
        data() {
            return {
                locationIcon:require("../../assets/images/location.png"),
                bannerPicArray:[
                    {imageUrl: require("../../assets/images/slides/slide_1.jpg")},
                    {imageUrl: require("../../assets/images/slides/slide_2.jpg")},
                    {imageUrl: require("../../assets/images/slides/slide_3.jpg")},
                ],
                category:[
                    {imageUrl: require("../../assets/images/category/category_1.png"),
                    categoryName:"新鲜水果"
                    },
                    {imageUrl: require("../../assets/images/category/category_2.png"),
                    categoryName:"中外名酒"
                    },
                    {imageUrl: require("../../assets/images/category/category_3.png"),
                    categoryName:"营养奶品"
                    },
                    {imageUrl: require("../../assets/images/category/category_4.png"),
                    categoryName:"食品饮料"
                    },
                    {imageUrl: require("../../assets/images/category/category_5.png"),
                    categoryName:"个人护理"
                    },
                ],
                swiperOption:{
                    slidesPerView:3,
                    autoplay:true,
                    speed:400,
                    loop:true
                },
                adBanner:{},
                recommendGoods:[],
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:{},
                hotGoods:[],
                myactive:0
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
                        this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
                        this.recommendGoods = response.data.data.recommend;
                        this.floor1 = response.data.data.floor1 ;
                        this.floor2 = response.data.data.floor2 ;
                        this.floor3 = response.data.data.floor3 ;
                        this.floorName = response.data.data.floorName;
                        this.hotGoods = response.data.data.hotGoods
                   }
                })
                .catch((error) => {     
                })
            },
        components: {
            swiper,
            swiperSlide,
            floorComponent,
            goodsInfo,
            tabbar
        }
              
                
    }
</script>

<style scoped>
.search-bar{
        position:fixed;
        top: 0px;
        z-index: 100;
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
.search-input{
        width: 100%;
        height: 1.3rem;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 1px solid #fff !important;
        background-color: #e5017d;
        color: #fff;
    }
.location-icon{
        padding-top: 0.2rem;
        padding-left: 0.3rem;
    }
.swiper-area{
    max-height: 9rem;
    clear: both;
    overflow: hidden;
    margin-top: 2rem;
}
 .type-bar{
      background-color: #fff;
      margin:.3rem .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
  }
.recommend-area{
       background-color: #fff;
       margin-top: .3rem;
  }
.recommend-title{
      border-bottom:1px solid #eee;
      font-size:14px;
      padding:.2rem;
      color:#e5017d;
  }
.recommend-body{
       border-bottom: 1px solid #eee;
   }
 
.recommend-item{
      width:99%;    
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }
.hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
.hot-title{
    color: #e5017d;
}
</style>