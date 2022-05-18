<template>
    Index
</template>

<script setup lang="ts">
    import api from '@/apis';
    
    api.user.getUserInfo().then(res => {
        console.log(res.data.name);
    });

    api.user.postAny({ project_id: 123, project_name: '哈哈哈' }).then(res => {
        console.log(res.data.project_id);
    });
</script>

<style lang="scss">
</style>