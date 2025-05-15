
<script setup>
    import SidePanel from '@/components/common/sidePanel.vue';
</script>

<template>
    <div class="admin-layout">        
        <SidePanel />
        <div class="admin-inner">
            <div class="admin-top-area">

            </div>
            <div class="admin-bottom-area">            
                <slot />
            </div>

       </div>
    </div>
</template>

<style lang="scss">
    @use '@/assets/scss/admin.scss' as *
</style>