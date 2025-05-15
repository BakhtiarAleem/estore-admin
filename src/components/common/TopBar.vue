<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';

    const router = useRouter()


</script>
<template>
    <div class="top-bar--inner">
        <div class="top-bar-left">
            <h5>{{ $route.meta.title }}</h5>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .top-bar--inner{
        .top-bar-left{
            h5{
                margin-bottom: 0;
            }
        }
    }
</style>