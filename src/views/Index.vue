<template>
    Index
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

<style lang="scss">
</style>