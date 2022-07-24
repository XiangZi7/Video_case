<template>
    <div class="sp">
        <vue3VideoPlay  width="1200px" :title="title" :src="options.src" :type="options.type" :autoPlay="false" />
    </div>
</template>
<script setup lang='ts'>
const route  = useRoute()
const title = ref('')

const options = reactive({
    src: route.query.videiourl, //视频源
    type: 'm3u8', //视频类型
    title: ''
})
</script>

<style scoped lang='scss'>
.sp{
    width: 1200px;
    margin:  0 auto;
}
</style>