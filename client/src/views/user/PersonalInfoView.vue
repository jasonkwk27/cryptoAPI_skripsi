<template>
    <div class = "bg-[#0F4C75] w-full h-screen flex ">
        <div class = "basis-2/12 m-3"></div>
        <div class = "fixed bg-[#1B262C] text-center rounded-lg shadow-xl h-full m-3 flex-auto w-2/12">
            <a href = "/personal-info">
            <div class = "flex items-center   bg-gradient-to-r from-[#0F4C75] to-[#1B262C] w-11/12 m-auto  mt-20 rounded-md">
                <div class = "mr-1 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" fill="#BBE1FA"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Personal Info</h1>
                    </div>
            </div>
            </a>

            <div v-auto-animate>
            <a href = "#" @click ="api_clicked = !api_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md relative">
                    <div class = "mr-1 p-3">
                        <svg id="Layer_1" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22 0h-2.172a2.978 2.978 0 0 0 -2.121.879l-8.361 8.36a7.537 7.537 0 1 0 5.415 5.415l1.239-1.239v-2.415h3v-3h2.414l1.707-1.707a2.983 2.983 0 0 0 .879-2.122v-2.171a2 2 0 0 0 -2-2zm0 4.171a1 1 0 0 1 -.293.708l-1.121 1.121h-3.586v3h-3v3.585l-1.545 1.545a5.64 5.64 0 0 1 .545 2.37 5.5 5.5 0 1 1 -5.5-5.5 4.236 4.236 0 0 1 2.369.544l9.252-9.251a1.009 1.009 0 0 1 .707-.293h2.172zm-17 13.829a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">API Management</h1>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-if = "!api_clicked">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" fill="#BBE1FA"/></svg>
                    </div>
            </div>
            </a>

            <a href = "/add-api" v-if="api_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">Add API Key</h1>
            </div>
            </a>

            <a href = "/api-info" v-if="api_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">API Info</h1>
            </div>
            </a>
            </div>

            <a href = "/wallet-balance">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M20.5,6H5.5c-.789,0-1.53-.376-2-.999,.457-.607,1.184-1.001,2-1.001H22.5c1.972-.034,1.971-2.967,0-3H5.5C2.468,1,0,3.467,0,6.5v11c0,3.033,2.468,5.5,5.5,5.5h15c1.93,0,3.5-1.57,3.5-3.5V9.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,13.5c0,.276-.225,.5-.5,.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V8.396c.763,.39,1.618,.604,2.5,.604h15c.275,0,.5,.224,.5,.5v10Zm-2-5c-.034,1.972-2.967,1.971-3,0,.034-1.972,2.967-1.971,3,0Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Wallet Balances</h1>
                    </div>
            </div>
            </a>

            <div v-auto-animate>
            <a href = "#" @click ="ts_clicked = !ts_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md relative">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M12,0A12.043,12.043,0,0,0,4,3.06V0H2V5.143A1.859,1.859,0,0,0,3.857,7H9V5H4.86A10,10,0,1,1,2,12H0A12,12,0,1,0,12,0Z" fill="#BBE1FA"/><polygon points="11 7 11 12.414 14.293 15.707 15.707 14.293 13 11.586 13 7 11 7" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Trading Statistics</h1>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-if = "!ts_clicked">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" fill="#BBE1FA"/></svg>
                    </div>
            </div>
            </a>

            <a href = "/trading-history" v-if = "ts_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">Trading History</h1>
            </div>
            </a>

            <a href = "/trading-analytics" v-if = "ts_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">Trading Analytics</h1>
            </div>
            </a>
            </div>

            <a href = "/trading-hub">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="20" height="20"><path d="M24,19V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V19H10.5v2H6v3H18V21H13.5V19ZM21,3V13H3V3Z " fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Trading Hub</h1>
                    </div>
            </div>
            </a>

        </div>


        <div class = "flex-auto basis-10/12">
            <div class = "flex items-center bg-[#1B262C] text-center rounded-lg shadow-xl h-fit max-w-full mt-3 mr-3 mb-3 ">
                <h1 class = "text-[#BBE1FA] text-3xl p-3 w-11/12  ml-28 ">Personal Info</h1>  
                <a href = "#" @click="logout()">
                <div class = " flex items-center hover:bg-[#0F4C75] rounded-md">
                    <div class = "mr-1 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><title>11-arrow</title><path d="M22.763,10.232l-4.95-4.95L16.4,6.7,20.7,11H6.617v2H20.7l-4.3,4.3,1.414,1.414,4.95-4.95a2.5,2.5,0,0,0,0-3.536Z" fill="#BBE1FA"/><path d="M10.476,21a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H9.476a1,1,0,0,1,1,1V8.333h2V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H9.476a3,3,0,0,0,3-3V15.667h-2Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div class = "pr-3">
                        <h1 class = "text-[#BBE1FA] text-l">Logout</h1>
                    </div>
                </div>
                </a> 
            </div>


            <div class = "bg-[#1B262C] rounded-lg shadow-xl max-w-full h-fit mt-3 mr-3 mb-3 flex-auto" v-if="result_loaded">
                <div class = "flex">
                    <h1 class = "text-[#BBE1FA] text-2xl p-3 w-full">Username : {{personal_info[0].username}}</h1>    
                    <a href = "#" class = "pt-3" @click="modal_clicked = true,modal_obj.username = personal_info[0].username,modal_obj.password=personal_info[0].password,modal_obj.email = personal_info[0].email,modal_obj.name=personal_info[0].name">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"  class = "mr-5"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"  fill="#BBE1FA"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"  fill="#BBE1FA"/></svg>
                    </a>
                </div>

                <h1 class = "text-[#BBE1FA] text-2xl p-3">Email : {{personal_info[0].email}}</h1>   
                <h1 class = "text-[#BBE1FA] text-2xl p-3">Name : {{personal_info[0].name}}</h1>   
                <h1 class = "text-[#BBE1FA] text-2xl p-3">API's Connected : {{this.api_connected}}</h1>         
            </div>

            <div  class="bg-slate-600 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 "  v-if="modal_clicked">
            <div v-auto-animate class=" w-1/3 bg-[#1B262C] m-auto text-center rounded-lg shadow-xl">
                <a href="#">
                    <h1 class = "text-right text-[#BBE1FA] text-2xl p-5" @click = "modal_clicked = false">X</h1>
                </a>
                <h1 class = "text-[#BBE1FA] font-bold text-2xl">Update User's Credential</h1>
                <div>
                    <input type="text"  class = "w-3/4 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl outline-white outline-1 hover:outline focus:outline" placeholder="New Username.." name="username" v-model="modal_obj.username" required>
                </div>
                <div>
                    <input type="text"  class = "w-3/4 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl outline-white outline-1 hover:outline focus:outline" placeholder = "New Password.." name="password" v-model="modal_obj.password" required>
                </div>
                <div>
                    <input type="text"  class = "w-3/4 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl outline-white outline-1 hover:outline focus:outline" placeholder = "New Email.." name="email" v-model="modal_obj.email" required>
                </div>
                <div>
                    <input type="text"  class = "w-3/4 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl outline-white outline-1 hover:outline focus:outline" placeholder = "New Name.." name="name" v-model="modal_obj.name" required>
                </div>
                <h1 v-if = "update_status" class = " mt-5 text-[#BBE1FA]">User Info updated successfully !</h1>
                <button class = "p-3 w-1/4 bg-[#3282B8] mb-5 mt-5  text-[#1B262C] font-bold rounded-full hover:bg-[#0F4C75] hover:text-[#BBE1FA]" @click = "update_user()">Update</button>
            </div>
            </div>


        </div>



        

    
    </div>

</template>

<script>
import axios from 'axios';
import qs from 'qs'
export default{
    data(){
        return{
            api_clicked : false,
            ts_clicked : false,
            personal_info : {},
            result_loaded : false,
            api_connected : 0,
            modal_clicked : false,
            modal_obj :{
                username : "",
                password : "",
                email : "",
                name : "",
            }
        }
    },
    created(){
        if(this.getCookie("userToken") == ""){
        this.$router.push('/login');
        }
        else {
            axios({
                method: 'get',
                url: 'http://localhost:3000/api/user',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+this.getCookie("userToken")
                }
            }).then((result)=>{
                this.personal_info = result.data;
                this.result_loaded = true;
                axios({
                method: 'get',
                url: 'http://localhost:3000/api/user/bybit-api/api-list',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+this.getCookie("userToken")
                }
                }).then((result)=>{
                    if(result.data[0].apiKey != null){
                        this.api_connected = result.data.length;
                    }
                })
            })
        }
       



    },
    methods: {
        update_user(){
            const data = qs.stringify({
                    username : this.modal_obj.username,
                    password : this.modal_obj.password,
                    email : this.modal_obj.email,
                    name : this.modal_obj.name
            });
            axios({
                method: 'put',
                url: 'http://localhost:3000/api/user',
                data: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+this.getCookie("userToken")
                }
            }).then(()=>{
                this.personal_info[0].username =this.modal_obj.username;
                this.personal_info[0].password =this.modal_obj.password;
                this.personal_info[0].email =this.modal_obj.email;
                this.personal_info[0].name =this.modal_obj.name;
                this.update_status = true;
            })
        },
        logout(){
            this.delete_cookie("userToken");
            this.delete_cookie("apiToken");
            this.delete_cookie("pair");
            this.delete_cookie("dateFrom");
            this.delete_cookie("dateTo");
            this.$router.push('/login');
        },
        delete_cookie(name) {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        
        },
        getCookie(param){
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
    }
    
}

</script>