<template>
    <div class = "bg-[#0F4C75] w-full h-screen flex ">
        <div class = "bg-[#1B262C] text-center rounded-lg shadow-xl max-h-full m-3 flex-auto basis-2/12">
            <a href = "/adm-home">
            <div class = "flex items-center  bg-gradient-to-r from-[#0F4C75] to-[#1B262C] w-11/12 m-auto mt-20 rounded-md ">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Home</h1>
                    </div>
            </div>
            </a>

            <a href = "/adm-approved">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                <div class = "mr-1 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="20" height="20">
                    <g>
                        <path d="M394.667,512H117.333C52.561,511.929,0.071,459.439,0,394.667V117.333C0.071,52.561,52.561,0.071,117.333,0h277.333   C459.439,0.071,511.929,52.561,512,117.333v277.333C511.929,459.439,459.439,511.929,394.667,512z M117.333,64   C87.878,64,64,87.878,64,117.333v277.333C64,424.122,87.878,448,117.333,448h277.333C424.122,448,448,424.122,448,394.667V117.333   C448,87.878,424.122,64,394.667,64H117.333z" fill="#BBE1FA"/>
                        <path d="M206.229,379.456c-13.462,0.009-26.368-5.368-35.84-14.933l-63.723-63.616c-12.501-12.493-12.507-32.754-0.014-45.255   c0.005-0.005,0.01-0.01,0.014-0.015l0,0c12.496-12.492,32.752-12.492,45.248,0l54.315,54.293l153.856-153.856   c12.496-12.492,32.752-12.492,45.248,0l0,0c12.501,12.493,12.507,32.754,0.014,45.255c-0.005,0.005-0.01,0.01-0.014,0.014   L242.048,364.629C232.566,374.154,219.669,379.493,206.229,379.456z" fill="#BBE1FA"/>
                    </g>
                    </svg>

                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Approved Users</h1>
                    </div>
            </div>
            </a>

            <a href = "/adm-pending">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <div class = "mr-1 p-3">
                    <svg id="Layer_1" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m21 24h-18v-3a12.2 12.2 0 0 1 4.442-9 12.2 12.2 0 0 1 -4.442-9 3 3 0 0 1 3-3h12a3 3 0 0 1 3 3 12.221 12.221 0 0 1 -4.425 9 12.221 12.221 0 0 1 4.425 9zm-16-2h14v-1c0-3.774-2.5-6.552-4.592-8.217l-.984-.783.984-.783c2.092-1.665 4.592-4.443 4.592-8.217a1 1 0 0 0 -1-1h-12a1 1 0 0 0 -1 1c0 3.774 2.508 6.551 4.612 8.216l.988.784-.991.784c-2.101 1.665-4.609 4.442-4.609 8.216zm7.018-6.018a10.065 10.065 0 0 1 1.943 2.018h-3.893m1.946-4.487c-1.637 1.073-4.429 3.33-4.934 6.487h9.842c-.5-3.184-3.288-5.43-4.908-6.487z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Pending Approvals</h1>
                    </div>
            </div>
            </a>


        </div>


        <div class = "flex-auto basis-10/12">
            <div class = "flex items-center bg-[#1B262C] text-center rounded-lg shadow-xl h-fit max-w-full mt-3 mr-3 mb-3 ">
                <h1 class = "text-[#BBE1FA] text-3xl p-3 w-11/12 ml-28 ">Home</h1>  
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

            <div class = "bg-[#1B262C] rounded-lg shadow-xl h-fit w-fit mt-3 mr-3 mb-3">
                <h1 class = "text-[#BBE1FA] text-l p-3">Approved user total : {{granted_approval}}</h1>
                <h1 class = "text-[#BBE1FA] text-l p-3">Total API's connected : {{api_total}}</h1>            
                <h1 class = "text-[#BBE1FA] text-l p-3">User waiting for approval : {{pending_approval}}</h1>   
            </div>

        </div>



        

    
    </div>

</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default{
    data(){
        return{
            user_list : {},
            pending_approval : 0,
            granted_approval : 0,
            api_total : 0
        }
    },
    created(){
       if(this.getCookie("adminToken") == ""){
        this.$router.push('/login');
       }
       else{

       axios({
                method: 'get',
                url: 'http://localhost:3000/api/user/user-list',
                data: qs.stringify({token : this.getCookie("adminToken")}),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+ this.getCookie("adminToken")
                }
                })
        .then((res)=>{
            this.user_list = res.data;
            for (let i = 0; i < this.user_list.length; i++) {
                if(this.user_list[i].approvalStatus == 1){
                    this.granted_approval++;
                }
                else{
                    this.pending_approval++;
                }
                this.api_total = this.api_total +this.user_list[i].connectedAPI;
            }
        })

       }


       


    },
    methods: {
        logout(){
            this.delete_cookie("adminToken");
            this.$router.push('/login');
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
        },
        delete_cookie(name) {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    },
    
}



</script>