<script setup>
    import { ref, onMounted } from 'vue';
    import data from '@/data/inventoryManagement.json'
    import { AgGridVue } from "ag-grid-vue3";
    import { AllCommunityModule, ModuleRegistry, themeQuartz, colorSchemeDarkBlue } from 'ag-grid-community';
    import { useStore } from 'vuex';

    const store = useStore()


    ModuleRegistry.registerModules([AllCommunityModule]);
    const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
    const isLoading = ref(true)


    const inventory = ref(store.getters.inventory)

    
    const onLoad = () => {
         isLoading.value = false 

    }

    onMounted(() => {
        onLoad();
    })
</script>
<template>
    <div class="card-box">
        <div class="card-header">
            <div class="left-sec">
                <h6>Inventory Management</h6>                
            </div>
            <div class="right-sec">
            </div>
            </div>
        <div class="card-body">
            <div class="manage-inventory">
                <div v-if="isLoading" class="loading">
                    <p>Loading</p>
                </div>
                <div v-if="!isLoading">
                    <AgGridVue 
                    v-if="inventory"
                    :theme="themeDarkBlue"
                    :rowData="inventory?.data"
                    :columnDefs="inventory?.keys"
                    style="height: 500px" />
                </div>
            </div>
        </div>
    </div>
</template>