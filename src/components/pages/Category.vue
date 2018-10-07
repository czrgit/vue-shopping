<template>
    <div>
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

        <van-tabs v-model="active" >
            <van-tab title="新鲜水果"></van-tab>
            <van-tab title="中外名酒"> </van-tab>
            <van-tab title="营养奶品"> </van-tab>
            <van-tab title="食品饮料"></van-tab>
            <van-tab title="个人护理"></van-tab>
        </van-tabs>
        <tabbar :goactive="myactive"></tabbar>
    </div>
</template>

<script>
import tabbar from '../component/tabbar'
    export default {
        data(){
            return {
                active:2,
                myactive:1,
                locationIcon:require("../../assets/images/location.png"),
            }            
        },
        components:{
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
.van-tabs--line {
    margin-top: 36px;   
}


</style>