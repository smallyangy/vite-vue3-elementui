<template>
    Index
</template>

<script setup lang="ts">
    import api from '@/apis';
    
    api.user.getUserInfo().then(res => {
        console.log(res);
    });
</script>

<style lang="scss">
</style>