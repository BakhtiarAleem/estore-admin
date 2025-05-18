<script setup>
import { ref, onMounted, computed } from 'vue';
import data from '@/data/order.json'
const period = ref('daily')
const isLoading = ref(true)
const selectedCategory = ref('All')

const props = defineProps({
  height:{
    type: Number,
  }
})

const intervalOptions = ref([
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

const categoryOptions = ref([
    {
        label: 'All',
        value: 'All',
    },
    {
        label: 'Electronics',
        value: 'Electronics',
    },
    {
        label: 'Clothing',
        value: 'Clothing',
    },
    {
        label: 'Home',
        value: 'Home',
    },
])

const dataRevenue = ref()
const dataOrder = ref()
const dataCategoryNames = ref()


const chartData = computed(() => [
    {
        name: 'Orders',
        data: dataOrder.value
    },
    {
        name: 'Revenue',
        data: dataRevenue.value
    },
])




const onChangeFunc = () => {
    isLoading.value = true
    const filteredCategoryOrder = data.filter(item => item.period === period.value && item.type === 'orders' && item.category === selectedCategory.value )
    const filteredCategoryRevenue = data.filter(item => item.period === period.value && item.type === 'revenue' && item.category === selectedCategory.value )
    dataCategoryNames.value = filteredCategoryRevenue.map(val => val.timeCategory)
    dataRevenue.value = filteredCategoryRevenue.map(val => val.value)
    dataOrder.value = filteredCategoryOrder.map(val => val.value)
    isLoading.value = false
}

const chartOptions = computed(() => ({
  chart: {
    id: 'comparison',
    stacked: false,
    toolbar: {
    show: false
    }
  },
  xaxis: {
    categories: dataCategoryNames.value,
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
  plotOptions: {
    bar: {
      horizontal: false,
    },
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
}))

onMounted(()=>{
    onChangeFunc();
})

</script>
<template>
    <div class="card-box">
        <div class="card-header">
            <div class="left-sec">
                <h6>Orders vs Revenue</h6>
            </div>
            <div class="right-sec">
                <select class="form-control" v-model="selectedCategory" @change="onChangeFunc">
                    <option v-for="(categorySelected, index) in categoryOptions" :key="index" :value="categorySelected.value">
                        {{ categorySelected.label }}
                    </option>
                </select>
                <select class="form-control" v-model="period" @change="onChangeFunc">
                    <option v-for="(intervalOpts, index) in intervalOptions" :key="index" :value="intervalOpts.value">
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
                <apexchart type="bar" :height="props.height" :options="chartOptions" :series="chartData" />
            </div>
        </div>
    </div>
</template>