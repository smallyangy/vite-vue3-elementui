<template>
    <div class="layout">
        <el-container class="container">
            <el-aside class="aside">
                <!--系统名称+logo-->
                <div class="head">
                    <div>
                        <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo">
                        <span>element plus</span>
                    </div>
                </div>
                <!--一条为了美观的线条-->
                <div class="line" />
                <el-menu
                    background-color="#222832"
                    text-color="#fff"
                >
                    <!--一级栏目-->
                    <el-sub-menu index="1">
                        <template #title>
                            <span>Dashboard</span>
                        </template>
                        <!--二级栏目-->
                        <el-menu-item-group>
                            <el-menu-item><i class="el-icon-data-line" />系统介绍</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
        </el-container>
    </div>
    <router-view></router-view>
</template>

<style scoped>
    .layout {
        min-height: 100vh;
        background-color: #fff;
    }

    .container {
        height: 100vh;
    }

    .aside {
        width: 200px !important;
        background-color: #222832;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
    }

    .head > div {
        display: flex;
        align-items: center;
    }

    .head img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    .head span {
        font-size: 20px;
        color: #fff;
    }

    .line {
        border-top: 1px solid hsl(0deg 0% 100% / 5%);
        border-bottom: 1px solid rgb(0 0 0 / 20%);
    }
</style>

<style>
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .el-menu {
        border-right: none !important;
    }

    .el-submenu {
        border-top: 1px solid hsl(0deg 0% 100% / 5%);
        border-bottom: 1px solid rgb(0 0 0 / 20%);
    }

    .el-submenu:first-child {
        border-top: none;
    }

    .el-submenu [class^="el-icon-"] {
        vertical-align: -1px !important;
    }

    a {
        color: #409eff;
        text-decoration: none;
    }

    .el-pagination {
        text-align: center;
        margin-top: 20px;
    }

    .el-popper-arrow {
        display: none;
    }
</style>