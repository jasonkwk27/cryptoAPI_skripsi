<template>
    <div class = "bg-[#0F4C75] w-full h-screen flex ">
        <div class = "basis-2/12 m-3"></div>
        <div class = "fixed bg-[#1B262C] text-center rounded-lg shadow-xl h-screen m-3 flex-auto w-2/12">
            <a href = "/personal-info">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto  mt-20 rounded-md">
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
            <div class = "flex items-center  bg-gradient-to-r from-[#0F4C75] to-[#1B262C] w-11/12 m-auto rounded-md relative">
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

        </div>


        <div class = "flex-auto basis-10/12">
            <div class = "flex items-center bg-[#1B262C] text-center rounded-lg shadow-xl h-fit max-w-full mt-3 mr-3 mb-3 ">
                <h1 class = "text-[#BBE1FA] text-3xl p-3 w-11/12 ml-28 ">API Info</h1>  
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

            <div class = "bg-[#1B262C] rounded-lg shadow-xl mt-3 mr-3 mb-3">
                <div class = "api_list">
                    <table class = "table-auto w-full">
                    <tr>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">API Key</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">API Secret Key</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Description</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Actions</th>
                    </tr>
                    <tr v-for="(user,index) in sliced_apilist" :key="index">
                        <template v-if="sliced_apilist[index].apiKey != null">
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{sliced_apilist[index].apiKey}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{sliced_apilist[index].apiSecretKey}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{sliced_apilist[index].description}}</td>
                            <td v-auto-animate class = "px-5 py-3 text-left text-[#BBE1FA] flex ">
                                <a href = "#" v-if="keySelected != sliced_apilist[index].apiKey">
                                    <svg id="Layer_1" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" class = "mr-5" @click = "fetch_data(index)"><path d="m18.535 18.666 1.414 1.414-3.2 3.2a2.475 2.475 0 0 1 -3.494 0l-3.2-3.2 1.414-1.414 2.531 2.534v-8.2h2v8.2zm-.745-11.457a8 8 0 0 0 -15.79 1.791 7.912 7.912 0 0 0 .9 3.671 5.49 5.49 0 0 0 2.6 10.329h4.642l-2-2h-2.642a3.491 3.491 0 0 1 -.872-6.874l1.437-.371-.883-1.192a5.939 5.939 0 0 1 -1.182-3.563 6 6 0 0 1 11.939-.8l.1.758.759.1a5.988 5.988 0 0 1 4.202 9.247l1.43 1.43a7.976 7.976 0 0 0 -4.64-12.526z"  fill="#BBE1FA"/></svg>
                                </a>
                                <a href = "#">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" @click = "modal_clicked = true,modal_obj.index = index,modal_obj.apiKey = sliced_apilist[index].apiKey , modal_obj.apiSecretKey = sliced_apilist[index].apiSecretKey, modal_obj.description=sliced_apilist[index].description, modal_obj.idapi = sliced_apilist[index].idapi, update_status = false" class = "mr-5"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"  fill="#BBE1FA"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"  fill="#BBE1FA"/></svg>
                                </a>
                                <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" @click = "delete_api(index)"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"  fill="#BBE1FA"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"  fill="#BBE1FA"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" fill="#BBE1FA"/></svg>
                                </a>
                            </td>
                        </template>

                    </tr>
                    </table>
                </div>
            </div>

            
            <div class="bg-[#1B262C] w-fit flex justify-center">
            <nav aria-label="Page navigation example">
                <ul class="flex list-style-none">
                <li class="page-item"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#BBE1FA] hover:bg-[#0F4C75] focus:shadow-none"
                    href="#" aria-label="Previous"  @click = "previous_page()">
                    <span aria-hidden="true">&laquo;</span>
                    </a></li>
                <li class="page-item" v-for="index in total_page" :key="index"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#BBE1FA]  hover:bg-[#0F4C75] focus:shadow-none"
                    href="#" @click = "change_page(index)">{{index}}</a></li>
                <li class="page-item"><a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#BBE1FA]  hover:bg-[#0F4C75] focus:shadow-none"
                    href="#" aria-label="Next"   @click = "next_page()">
                    <span aria-hidden="true">&raquo;</span>
                    </a></li>
                </ul>
            </nav>
            </div>

            <div class="bg-slate-600 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 "  v-if="modal_clicked">
            <div v-auto-animate class=" w-1/3 bg-[#1B262C] m-auto text-center rounded-lg shadow-xl">
                <a href="#">
                    <h1 class = "text-right text-[#BBE1FA] text-2xl p-5" @click = "modal_clicked = false">X</h1>
                </a>
                <h1 class = "text-[#BBE1FA] font-bold text-2xl">Update API Credential</h1>
                <div>
                    <input type="text"  class = "w-3/4 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl outline-white outline-1 hover:outline focus:outline" placeholder="New API Key.." name="apiKey" v-model="modal_obj.apiKey" required>
                </div>
                <div>
                    <input type="text"  class = "w-3/4 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl outline-white outline-1 hover:outline focus:outline" placeholder = "New API Secret Key.." name="apiSecretKey" v-model="modal_obj.apiSecretKey" required>
                </div>
                <div>
                    <input type="text"  class = "w-3/4 mt-8 p-3 bg-[#0F4C75] text-[#BBE1FA] placeholder-[#BBE1FA] rounded-md hover:shadow-xl outline-white outline-1 hover:outline focus:outline" placeholder = "New Description.." name="description" v-model="modal_obj.description" required>
                </div>
                <h1 v-if = "update_status" class = " mt-5 text-[#BBE1FA]">API Info updated successfully !</h1>
                <button class = "p-3 w-1/4 bg-[#3282B8] mb-5 mt-5  text-[#1B262C] font-bold rounded-full hover:bg-[#0F4C75] hover:text-[#BBE1FA]" @click = "update_api()">Update</button>
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
            api_list : {},
            sliced_apilist :{},
            keySelected : "",
            total_page : 1,
            current_page :1,
            max_list : 15,
            modal_clicked :false,
            modal_obj :{
                index : 0,
                apiKey : "",
                apiSecretKey : "",
                description : "",
                idapi : 0,
            },
            update_status :false
        }
    },
    created(){
        if(this.getCookie("userToken") == ""){
        this.$router.push('/login');
        }
        else {
            if(this.getCookie("apiToken")!= ""){
                axios({
                        method: 'get',
                        url: 'http://localhost:3000/api/user/bybit-api/api-info',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            'authorization' : 'Bearer '+this.getCookie("apiToken")
                        }
                    }).then((res)=>{
                        this.keySelected = res.data[0].apiKey;
                    })
            }

            axios({
                method: 'get',
                url: 'http://localhost:3000/api/user/bybit-api',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+this.getCookie("userToken")
                }
            })
            .then((res)=>{
                this.api_list = res.data;
                this.total_page = Math.floor((this.api_list.length + this.max_list - 1) / this.max_list);
                this.change_page(1);
            })
        }
       
    },
    methods: {
        delete_api(index){
            const data = qs.stringify({
                    apiKey : this.sliced_apilist[index].apiKey,
                    apiSecretKey : this.sliced_apilist[index].apiSecretKey
            });
            axios({
                method: 'delete',
                url: 'http://localhost:3000/api/user/bybit-api',
                data: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+this.getCookie("userToken")
                }
            }).then(()=>{
                if(this.keySelected == this.sliced_apilist[index].apiKey){
                    this.delete_cookie("apiToken");
                }
                this.sliced_apilist.splice(index,1);
            })
        },
        update_api(){
            const data = qs.stringify({
                    apiKey : this.modal_obj.apiKey,
                    apiSecretKey : this.modal_obj.apiSecretKey,
                    description : this.modal_obj.description,
                    idapi : this.modal_obj.idapi
            });
            axios({
                method: 'put',
                url: 'http://localhost:3000/api/user/bybit-api',
                data: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+this.getCookie("userToken")
                }
            }).then(()=>{
                if(this.keySelected ==  this.modal_obj.apiKey){
                    this.delete_cookie("apiToken");
                }
                this.sliced_apilist[this.modal_obj.index].apiKey = this.modal_obj.apiKey;
                this.sliced_apilist[this.modal_obj.index].apiSecretKey = this.modal_obj.apiSecretKey;
                this.sliced_apilist[this.modal_obj.index].description = this.modal_obj.description;
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
        fetch_data(index){
            const data = qs.stringify({
                    apiKey : this.sliced_apilist[index].apiKey,
                    apiSecretKey : this.sliced_apilist[index].apiSecretKey
            });
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/user/api-token',
                data: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                }
            }).then((result)=>{
                if(result.data.status == 1){
                    document.cookie = `apiToken=${result.data.token}`;
                    axios({
                        method: 'get',
                        url: 'http://localhost:3000/api/user/bybit-api/api-info',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            'authorization' : 'Bearer '+this.getCookie("apiToken")
                        }
                    }).then((res)=>{
                        this.keySelected = res.data[0].apiKey;
                    })

                }
            })

        },
        change_page(index){
            this.current_page = index;
            this.sliced_apilist = this.api_list.slice((this.current_page-1)*this.max_list,this.current_page*this.max_list);
        },
        previous_page(){
            if(this.current_page > 1){
                this.current_page = this.current_page - 1;
                this.sliced_apilist = this.api_list.slice((this.current_page-1)*this.max_list,this.current_page*this.max_list);
            }
        },
        next_page(){
            if(this.current_page < this.total_page){
                this.current_page = this.current_page + 1 ;
                this.sliced_apilist = this.api_list.slice((this.current_page-1)*this.max_list,this.current_page*this.max_list);
            }
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