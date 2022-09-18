<template>
<form @submit.prevent = "handleSubmit" class = "">
    <div class = "login bg-gradient-to-r from-[#0F4C75] to-[#1B262C] w-screen h-screen flex justify-center">
        <div class = "form  bg-[#1B262C] w-1/4 m-auto text-center rounded-lg shadow-xl">

                                <h1 class = "text-[#BBE1FA] font-bold text-2xl mt-8">Login</h1>
                                <input type="text"  class = "w-9/12 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl" placeholder="Enter Username" v-model="username" name="username" required>
                                <input type="password" class = "w-9/12 mt-5 mb-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl" placeholder="Enter Password" v-model = "password" name="password" required>
                                <h1 v-if = "credential_status" class = "mb-5 text-[#BBE1FA]">Invalid credentials!</h1>
                                <button type="submit" class = "p-3 w-1/2 bg-[#3282B8] mb-5 text-[#1B262C] font-bold rounded-full">Login</button>
                                <h1 class = "text-[#BBE1FA] mb-5">Didn't have an account? <a class = "underline" href="/register">Register</a></h1>
                 
        </div>
    
    </div>
</form>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs'
    export default{
        data(){
            return {
                username : '',
                password : '',
                credential_status : false
            }
        },
        created(){
            if(getCookie("userToken") != ""){
                this.$router.push('/home');
            }
        },
        methods:{
            handleSubmit(){
                const data = qs.stringify({
                    username : this.username,
                    password : this.password
                });
                axios({
                method: 'post',
                url: 'http://localhost:3000/api/user/login',
                data: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
                })
                .then((res)=>{
                    if(res.data.status == 1){
                        document.cookie = `userToken=${res.data.token}`;
                        this.$router.push('/home');
                    }
                    else{
                        this.credential_status = true;
                    }
                    console.log(res);

                })
                    
              
            }
        }
    }

    function getCookie(param){
            let name = param + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
    }
</script>