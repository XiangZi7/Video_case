<template>

    <el-carousel :interval="4000" type="card" height="250px">
        <el-carousel-item v-for="(item, index) in 2" :key="index">
            <el-image style="width: 100%; height: 100%" src="http://api.pingcc.cn/video/img/刀剑神域第一季/刀剑神域第一季.jpg
" fit="cover" />
        </el-carousel-item>
    </el-carousel>
    <el-row>
        <el-col v-for="(o, index) in 2" :key="index" :span="4">
            <el-card :body-style="{ padding: '0px' }" style="margin: 10px;">
                <img src="http://api.pingcc.cn/video/img/刀剑神域第一季/刀剑神域第一季.jpg" class="image" />
                <div style="padding: 14px">
                    <span style="color:#000;">刀剑神域第一季</span>
                    <p class="p_descs">刀剑神域第一季</p>
                    <div class="bottom">
                        <time class="time">刀剑神域第一季</time>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>


</template>

<script setup lang='ts'>


</script>

<style scoped lang='scss'>
.p_descs {
    height: 100px;
    font-size: 10px;
    color: rgb(147 147 147);
    overflow: hidden;
    /* 超出的部分隐藏起来 */
    // white-space: nowrap;
    /* 不显示的地方用省略号...代替 */
    text-overflow: ellipsis;

    /* 支持 IE */

}

.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    height: 400px;
    display: block;
}
</style>