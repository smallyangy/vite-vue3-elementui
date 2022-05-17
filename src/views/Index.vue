<template>
    Index
</template>

<script setup lang="ts">
    import api from '@/apis';
    
    api.user.getUserInfo().then(res => {
        console.log(res.age);
    });

    api.user.postAny({ project_id: 123, project_name: '哈哈哈' }).then(res => {
        console.log(res.project_name);
    });
</script>

<style lang="scss">
</style>