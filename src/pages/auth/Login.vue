<script setup>
    import { onMounted, ref, reactive } from 'vue';
    import logo from '@/components/common/logo.vue';
    import userIcon from '@/components/icons/IconUser.vue';
    import IconLock from '@/components/icons/IconLock.vue';
    import data from '@/data/users.json'
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore()
    const router = useRouter()

    const username = ref()
    const password = ref()

    const error = reactive({
        email: '',
        password: '',
        auth: '',
    })

    const validate = () => {
        error.email = ''
        error.password = ''
        error.auth = ''
        const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!username.value){
            error.email = 'Email is Required'
        }
        else if(!emailRegix.test(username.value)){
            error.email = 'Enter a valid email address'
        }
        if(!password.value){
            error.password = 'Password is Required'
        }
        else if(password.value.length < 6){
            error.password = 'Password must be at least 6 characters'
        }
        return !error.email && !error.password
    }


const onSubmit = () => {
    if(validate()){
        const check = data.find(
            (u) => u.username === username.value && u.password === password.value
        )
        if(check){
            store.dispatch('login', check.userData)
            router.push({name: 'dashboard'})
        }
        else{
            error.auth = 'Invalid Email or Password'
        }
    }
}

</script>
<template>
    <div class="auth-page-container">
        <logo />
        <div class="auth-form">            
            <div class="auth-head">
                <h3>Login</h3>
                <h6>Sign in to your Account</h6>
            </div>
            <div class="auth-body">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label class="icon">
                            <userIcon />
                        </label>
                        <input type="text" v-model="username" name="username" class="form-control" />
                        <span class="error" v-if="error.email">{{ error.email }}</span>
                    </div>
                    <div class="form-group">
                        <label class="icon">
                            <IconLock />
                        </label>
                        <input type="password" v-model="password" name="password" class="form-control" />
                        <span class="error" v-if="error.password">{{ error.password }}</span>
                    </div>
                    <div v-if="error.auth" class="form-group text-center">
                        <span class="error">{{ error.auth }}</span>
                    </div>
                     <button class="btn btn-primary" type="submit">
                        Login
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
</template>