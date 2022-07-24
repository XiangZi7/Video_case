<template>
    <!-- 信息 -->
    <div class="box">
        <div class="cover">
            <el-image style="width: 100%" src="http://api.pingcc.cn/video/img/刀剑神域第一季/刀剑神域第一季.jpg
" fit="cover" />
        </div>
        <div class="descs">
            <el-descriptions :column="2" size="large">
                <el-descriptions-item label="名称">刀剑神域</el-descriptions-item>
                <el-descriptions-item label="导演">刀剑神域</el-descriptions-item>
                <el-descriptions-item label="地区">刀剑神域</el-descriptions-item>
                <el-descriptions-item label="上映时间">刀剑神域</el-descriptions-item>
                <el-descriptions-item label="类型">刀剑神域</el-descriptions-item>
                <el-descriptions-item label="演员">刀剑神域</el-descriptions-item>
                <el-descriptions-item label="简介">刀剑神域</el-descriptions-item>
            </el-descriptions>
        </div>
        <div style="clear:both;"></div>
    </div>
    <!-- 选集 -->
    <div class="a_alog">
        <el-row class="mb-4">
            <button v-for="(item, index) in 2" :key="index" class="alog" href="javascript;;">{{ '第' + index + '集'
            }}</button>
        </el-row>
    </div>

</template>

<script setup lang='ts'>
import axios from 'axios'

</script>

<style  lang='scss'>
.a_alog {
    width: 1200px;
    margin: 0 auto;
}

.alog {
    width: 180px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #fff;
}

a {
    text-decoration: none;
}

.box {
    display: flex;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    border-radius: 10px;

    span {
        color: #fff !important;
    }

    .cover {
        width: 300px;
        float: left;
        margin-right: 50px;
    }

    .descs {
        width: 850px;
        float: right;
    }
}

.el-descriptions__body {
    background-color: transparent !important;
}
</style>