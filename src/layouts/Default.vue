<script setup>
    import sidePanel from '@/components/common/sidePanel.vue';
</script>

<template>
    <div class="admin-layout">        
        <sidePanel />
        <div class="admin-inner">
            <slot />
       </div>
    </div>
</template>