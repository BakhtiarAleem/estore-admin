<script setup>
    import Order from '@/components/revenue/Order.vue'
    import Revenue from '@/components/revenue/Revenue.vue'
    import Trends from '@/components/revenue/Trends.vue'
</script>
<template>
        <div class="row">
            <div class="col-md-6">
                <Trends />
            </div>
            <div class="col-md-6">
                <Revenue />
            </div>
            <div class="col-md-12">
                <Order />
            </div>
        </div>
</template>