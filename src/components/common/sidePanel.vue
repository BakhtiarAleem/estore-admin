<script setup>
    import { ref } from 'vue'
    import logo from '@/components/common/logo.vue'
    import IconDashboard from '@/components/icons/IconDashboard.vue'
    import IconRevenue from '@/components/icons/IconRevenue.vue'
    import IconInventory from '@/components/icons/IconInventory.vue'
    import IconProduct from '@/components/icons/IconProduct.vue'
    import { useRouter } from 'vue-router';


    const router = useRouter()

    const navigation = ref([
        {
            text: 'Dashboard',
            name: 'dashboard',
            icon: IconDashboard,
        },
        {
            text: 'Revenue Analysis',
            name: 'revenue',
            icon: IconRevenue,
        },
        {
            text: 'Inventory Management',
            name: 'inventory',
            icon: IconInventory,
        },
        {
            text: 'Product Registration',
            name: 'addProduct',
            icon: IconProduct,
        },
    ])
</script>
<template>
    <div class="sidebar-container">
        <div class="top-area">
            <logo />
        </div>
        <div class="middle-area">
            <div class="side-nav">
                <ul>
                    <li v-for="(nav, index) in navigation" :key="index">
                        <RouterLink :to="{name: nav.name}">
                        <div class="side-nav--item">
                            <div class="side-nav--icon">
                                <component :is="nav.icon"/>
                            </div>
                            <div class="side-nav--text">
                                {{ nav.text }}
                            </div>
                        </div>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom-area">
            
        </div>
    </div>
</template>

<style scoped lang="scss">
.sidebar-container {
    width: 250px;
    height: 100%;
    border: 1px solid var(--border-seperator-color);
    box-sizing: border-box;
    .top-area{
        padding: 15px;
    }
    .middle-area{
        .side-nav{
            ul{
                padding: 0;
                list-style: none;
                li{
                    a{
                        color: var(--text-color);
                        text-decoration: none;
                        &.router-link-active{
                            background-color: var(--auth-form-color);
                        }
                    }
                    .side-nav--item{
                        padding: var(--sidebar-item-padding);
                        display: flex;
                        align-items: center;
                        .side-nav--icon{
                            margin-right: 10px;
                            svg{
                                fill: var(--text-color)
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>