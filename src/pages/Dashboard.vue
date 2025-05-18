<script setup>
    import { ref } from 'vue'
    import ManageInventory from '@/components/inventory/ManageInventory.vue'
    import Order from '@/components/revenue/Order.vue'
    import Revenue from '@/components/revenue/Revenue.vue'
    import Trends from '@/components/revenue/Trends.vue'
    import Card from '@/components/common/Card.vue'

    const stats = ref([
        {
            label: 'Total Sales',
            value: '$7.8M',
            percentage: '25',
            color: '#1478ee',
        },
        {
            label: 'Total Revenue',
            value: '$12.4M',
            percentage: '55',
            color: '#2eaa41',
        },
        {
            label: 'Trends',
            value: '35k',
            percentage: '60',
            color: '#ae7d27',
        },
        {
            label: 'Conversion Rate',
            value: '15%',
            percentage: '30',
            color: '#42a3bb',
        },
    ])

</script>
<template>
    <div>
    <div class="dashboard-top-card">
        <div class="row">
            <div v-for="(data, index) in stats" :key="index" class="col-md-3">
                <Card :label="data.label" :value="data.value" :percentage="data.percentage" :color="data.color" />
            </div>
        </div>
    </div>
        <div class="row">
            <div class="col-md-6">
                <ManageInventory />
            </div>
            <div class="col-md-6">
            <Revenue :height="483"  />
            </div>
            <div class="col-md-6">            
                <Order :height="350" />
            </div>
            <div class="col-md-6">
                <Trends :height="350" />
            </div>
        </div>
    </div>
</template>