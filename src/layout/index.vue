<template>
    <div class="common-layout">
        <el-container>
            <el-container class="mainbg">
                <el-header>
                    <div>
                        <el-input  placeholder="Please input"
                            style="background-color:#ffffff14 !important;width: 300px;" />
                    </div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script setup lang='ts'>
const router = useRouter();



</script>

<style scoped lang='scss'>
.mainbg {
    background-color: #1A1C1F;
    height: 100vh;
}

.el-input__wrapper {
    background-color: transparent !important;
}

.asidebg {
    background-color: #16161a;
    height: 100vh;

}
</style>