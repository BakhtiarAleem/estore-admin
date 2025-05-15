<script setup>
    import logoImage from '@/assets/images/logo.png'
</script>

<template>
    <div class="logo-container">
        <img class="logo-image" :src="logoImage" />
    </div>
</template>

<style lang="scss">
.logo-container {
    width: 200px;
    height: auto;
    .logo-image {
        width: 100%;
        height: auto;
    }
}
</style>