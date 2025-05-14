<script setup>
    import { onMounted, ref, reactive } from 'vue';
    import logo from '@/components/common/logo.vue'

    const username = ref()
    const password = ref()

    const error = reactive({
        email: '',
        password: '',
    })

    const validate = () => {
        error.email = ''
        error.password = ''
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
        
    }
}

</script>
<template>
    <div class="auth-page-container">
        <div class="auth-form">            
            <div class="auth-head">
                <logo />
            </div>
            <div class="auth-body">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label class="form-label">Username</label>
                        <input type="text" v-model="username" name="username" class="form-control" />
                        <span class="error" v-if="error.email">{{ error.email }}</span>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" v-model="password" name="password" class="form-control" />
                        <span class="error" v-if="error.password">{{ error.password }}</span>
                    </div>
                     <button class="btn btn-primary" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>