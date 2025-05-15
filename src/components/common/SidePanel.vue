<script setup>
    import { ref } from 'vue'
    import logo from '@/components/common/logo.vue'
    import IconDashboard from '@/components/icons/IconDashboard.vue'
    import IconRevenue from '@/components/icons/IconRevenue.vue'
    import IconInventory from '@/components/icons/IconInventory.vue'
    import IconProduct from '@/components/icons/IconProduct.vue'
    import ArrowRight from '@/components/icons/IconArrowRight.vue'
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
                    <img :src="user.image" />
                </div>
                <div class="user-meta">
                    <div class="user-meta-details">
                        <p class="name">{{ user.fullname }}</p>
                        <p class="role">{{ user.role }}</p>
                    </div>     
                    <ArrowRight />               
                </div>
            </div>
            <div v-if="openMenu" class="open-menu">
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

<style lang="scss">
.sidebar-container {
    width: 250px;
    height: 100%;
    border: 1px solid var(--border-seperator-color);
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    .top-area{
        padding: 15px;
    }
    .middle-area{
        height: calc(100% - 200px);
        .side-nav{
            ul{
                padding: 0;
                list-style: none;
                li{
                    a{
                        color: var(--text-color);
                        text-decoration: none;
                        &.router-link-active{
                            .side-nav--item{
                                background-color: var(--auth-form-color);
                                .side-nav--icon{
                                    background-color: var(--primary);
                                    border-radius: 30px;
                                }
                            }
                        }
                    }
                    .side-nav--item{
                        padding: var(--sidebar-item-padding);
                        display: flex;
                        align-items: center;
                        .side-nav--icon{
                            margin-right: 10px;
                            width: 29px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 29px;
                            svg{
                                fill: var(--text-color);
                                width: 22px;
                            }
                        }
                    }
                }
            }
        }
    }
    .bottom-area{
        position: absolute;
        bottom: 20px;
        width: 100%;
        .user-logged-in{
            display: flex;
            width: 100%;
            flex-direction: row;
            cursor: pointer;
            .user-image{
                width: 50px;
                border-radius: 50px;
                overflow: hidden;
                height: 50px;
                img{
                    width: 100%;
                }
            }
            .user-meta{
                margin-left: 10px;
                display: flex;
                flex-direction: row;
                align-items: center;
                width: calc(100% - 70px);
                justify-content: space-between;
                p{
                    margin-top: 5px;
                    margin-bottom: 0px;
                }
                .user-meta-details{
                    display: flex;
                    flex-direction: column;
                }
                svg{
                    path{
                        stroke: var(--text-color);
                    }
                }
            }
        }
        .open-menu {
            position: absolute;
            top: 0;
            left: 100%;
            background-color: var(--auth-form-color);
            width: 100px;
            border-radius: 8px;
            ul {
                padding: 0;
                list-style: none;
                margin: 0;
                a {
                    display: block;
                    cursor: pointer;
                    padding: 10px 0px 10px 20px;
                }
            }
        }
    }
}
</style>