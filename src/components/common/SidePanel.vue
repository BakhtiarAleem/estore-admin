<script setup>
    import { ref } from 'vue'
    import logo from '@/components/common/logo.vue'
    import IconDashboard from '@/components/icons/IconDashboard.vue'
    import IconRevenue from '@/components/icons/IconRevenue.vue'
    import IconInventory from '@/components/icons/IconInventory.vue'
    import IconProduct from '@/components/icons/IconProduct.vue'
    import ArrowRight from '@/components/icons/IconArrowRight.vue'
    import IconSetting from '@/components/icons/IconSetting.vue'
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const store = useStore()

    const openMenu = ref(false)

    const user = store.getters.user

    const router = useRouter()


    const logout = () => {
        store.dispatch('logout')
        router.push({name: 'login'})
    }

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
            <div @click="() =>{
                openMenu = !openMenu
            }" class="user-logged-in">
                <div class="user-image">
                    <img :src="user?.image" />
                </div>
                <div class="user-meta">
                    <div class="user-meta-details">
                        <p class="name">{{ user?.fullname }}</p>
                        <p class="role">{{ user?.role }}</p>
                    </div>     
                    <ArrowRight />               
                </div>
            </div>
            <div v-if="openMenu" class="open-menu">
                <div class="open-menu-head">
                    <div class="icon">
                        <IconSetting />
                    </div>
                    <p>Setting</p>
                </div>
                <ul>
                    <li>
                        <a @click="logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

