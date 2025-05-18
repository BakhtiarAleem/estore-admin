<script setup>
    import { ref, computed, onMounted } from 'vue';
    import data from '@/data/trends.json'


    const categorySelected = ref()

    const chartOptions = computed(() => (
        {
            chart: {
              height: 350,
              type: 'area',
              stacked: false,
              toolbar: {
                show: false // This hides the toolbar
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
                categories: categorySelected.value,
                labels: {
                    style: {
                        colors: '#fff',
                    }
                }
            },
            yaxis: {  
                labels: {
                    style: {
                        colors: '#fff',
                    }
                }
            },            
            legend: {
                labels: {
                    colors: '#fff'
                }
            },
            tooltip: {
                theme: 'dark',
                style: {
                    fontSize: '14px',
                    color: '#fff'
                }
            }
        }
    ))
    const periodOptions = ref([
        {
            label: 'Daily',
            value: 'daily',
        },
        {
            label: 'Weekly',
            value: 'weekly',
        },
        {
            label: 'Monthly',
            value: 'monthly',
        },
        {
            label: 'Annually',
            value: 'annually',
        },
    ])

    const period = ref('daily')

    const isLoading = ref(true)

    const trendData = ref([])

    const onChangeFunc = () => {
        isLoading.value = true
        trendData.value = []
        categorySelected.value = data[period.value].map(item => item.time )
        const items = data[period.value].map(({time, ...rest}) => rest)
        const dataName = Object.keys(items[0])
        const trendVal = data[period.value].map(item => item.value )
        dataName.forEach((element) => {
            const compilingData = {
                name: element,
                data: data[period.value].map(selectedData => selectedData[element])
            }
            trendData.value.push(compilingData)
        });        
        
        console.log('trendData.value', trendData.value)
        isLoading.value = false
    }

onMounted(() => {
    onChangeFunc();
})


</script>
<template>
    <div>
    <div class="card-box">
        <div class="card-header">
            <div class="left-sec">
                <h6>Trends</h6>
            </div>
            <div class="right-sec">
                 <select class="form-control" v-model="period" @change="onChangeFunc">
                    <option v-for="(intervalOpts, index) in periodOptions" :key="index" :value="intervalOpts.value">
                        {{ intervalOpts.label }}
                    </option>
                </select>
            </div>
            </div>
        <div class="card-body">
            <div v-if="isLoading" class="loading">
                <p>Loading</p>
            </div>
            <div v-if="!isLoading">
                <apexchart type="area" height="350" :options="chartOptions" :series="trendData" />
            </div>
        </div>
    </div>
    </div>
</template>