<template>
    Index
    <div class="box">
        <div class="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis rerum repellendus, mollitia praesentium nesciunt tempore illo vero voluptas sed a aspernatur, consectetur, autem beatae quae aliquid ullam? Maxime, pariatur a?
        </div>
    </div>
    <div class="box2">
        <div class="content2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi minima beatae modi, odio tempora molestias aperiam nemo veritatis iusto fugit et harum commodi perferendis hic, libero maiores illo explicabo.
        </div>
    </div>
    <el-button type="primary" size="small">按钮</el-button>
    <el-button type="primary" size="default">按钮</el-button>
    <el-button type="primary" size="large">按钮</el-button>
</template>

<script setup lang="ts">
    import api from '@/apis';
    
    api.user.getUserInfo().then(res => {
        console.log(res.data.name);
    });

    api.user.postAny({ project_id: 333, project_name: 'afadsfsdf' }).then(res => {
        console.log(res.data.project_name);
    });
</script>

<style lang="scss" scoped>
    .box {
        width: 200px;

        .content {
            font-size: 20px;
        }
    }
</style>